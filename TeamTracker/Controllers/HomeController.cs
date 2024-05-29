using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using TeamTracker.Data;
using TeamTracker.Models;

namespace TeamTracker.Controllers
{
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
		private readonly TeamTrackerContext _context;

		public HomeController(TeamTrackerContext context)
        {
			_context = context;
        }

        public async Task<IActionResult> Index()
		{
            return View(await _context.project_member.Where(x => x.user_ID == _context.LoggedUserId).Select(y => y.Project).ToListAsync());
        }

        public IActionResult AboutUs()
        {
            return View();
		}
		public async Task<IActionResult> Content()
        {
			return View(await _context.project_member.Where(x => x.user_ID == _context.LoggedUserId).Select(y => y.Project).ToListAsync());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
