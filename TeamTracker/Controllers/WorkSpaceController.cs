using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Evaluation;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using TeamTracker.Data;
using TeamTracker.Models;

namespace TeamTracker.Controllers;

public class WorkSpaceController : Controller
{
	private readonly TeamTrackerContext _context;
	private Models.Project? proj;
	public WorkSpaceController(TeamTrackerContext context)
	{
		_context = context;
		proj = new Models.Project();
	}
	public async Task<IActionResult> Space(int? id)
	{
		if (id == null)
		{
			return NotFound();
		}

		proj = await _context.Project
			.FirstOrDefaultAsync(m => m.project_code == id);

		proj.Phase = _context.Phase.Where(x => x.project_code == id).ToList();
		if (proj == null)
		{
			return NotFound();
		}

		return View(proj);
	}
	public IActionResult appendTasks(int? givenPhaseId)
	{
		var tasksList = _context.Task.Where(t => t.ph_ID == givenPhaseId).Select(x => x).ToList();
		return PartialView("_appendTasks", tasksList);
	}
	public IActionResult appendPhaseInfo(int givenPhaseId)
	{
		var targetPhase = _context.Phase.FirstOrDefault(x => x.PH_ID == givenPhaseId);
		targetPhase.Materials = new List<materials>();
		targetPhase.Materials = _context.materials.Where(m => m.ph_ID == givenPhaseId).Select(x => x).ToList();
		return PartialView("_appendPhaseInfo", targetPhase);
	}
	public IActionResult appendTaskInfo(int givenTaskeId)
	{
		var targetTask = _context.Task.FirstOrDefault(x => x.task_ID == givenTaskeId);
		targetTask.Materials = _context.materials.Where(mat => mat.task_ID == givenTaskeId).Select(x => x).ToList();
		return PartialView("_appendTaskInfo", targetTask);
	}


	public IActionResult editPhase(int givenPhaseId)
	{
		var targetPhase = _context.Phase.FirstOrDefault(x => x.PH_ID == givenPhaseId);
		return PartialView("_editPhase", targetPhase);
	}


	// POST: WorkSpace/editPhase/5
	[HttpPost]
	[ValidateAntiForgeryToken]
	public async Task<IActionResult> editPhase([Bind("PH_ID, pairant_PH, ParentPhasePH_ID, project_code, phase_name, ph_description, start_date, end_date")] Phase phase)
	{
		if (ModelState.IsValid)
		{
			try
			{
				_context.Update(phase);
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				return Json(new { html = Helper.RenderRazorViewToString(this, "_editPhase", phase) });
			}
			// After finishing the edit phase
			return Json(new { html = Helper.RenderRazorViewToString(this, "_appendPhaseInfo", phase) });

		}
		// if mode not valied
		return Json(new { html = Helper.RenderRazorViewToString(this, "_editPhase", phase) });
	}
	public async Task<IActionResult> deletePhase(int givenPhaseId)
	{
		var phase = await _context.Phase.FirstOrDefaultAsync(x => x.PH_ID == givenPhaseId);
		try
		{
			RemoveChildsPhase(phase);
			_context.Remove(phase);
            _context.SaveChanges();
			phase.Project = await _context.Project.FirstOrDefaultAsync(x => x.project_code == phase.project_code);
			return Json(new { html = Helper.RenderRazorViewToString(this, "Space", phase.Project) });
		}
		catch
		{
			return Json(new { html = Helper.RenderRazorViewToString(this, "_editPhase", phase) });
		}
	}
	public void RemoveChildsPhase(Phase p)
	{
		try
		{
			p.ChildPhases = _context.Phase.Where(x => x.pairant_PH == p.PH_ID).ToList();

			if (p.ChildPhases != null)
			{
				foreach (var ch in p.ChildPhases)
				{
					RemoveChildsPhase(ch);
					_context.Remove(ch);
				}
			}
		}
		catch
		{
			return;
		}
		
	}
}
