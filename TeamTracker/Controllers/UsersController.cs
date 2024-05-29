using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TeamTracker.Data;
using TeamTracker.Models;

namespace TeamTracker.Controllers
{
    public class UsersController : Controller
    {
        private readonly TeamTrackerContext _context;

        public UsersController(TeamTrackerContext context)
        {
            _context = context;
        }

        // GET: Users
        public async Task<IActionResult> Profile()
        {
            var user = await _context.User
                .FirstOrDefaultAsync(m => m.user_ID == _context.LoggedUserId);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/SignUp
        public IActionResult SignUp()
        {
            return View();
        }

        // POST: Users/SignUp
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SignUp([Bind("user_ID,user_name,public_username,email,user_password,profileIcon_URL,birth_date")] User user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("user_ID,user_name,public_username,email,user_password,profileIcon_URL,birth_date")] User user)
        {
            if (id != user.user_ID)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                try
                {
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.user_ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.user_ID == id);
        }
    }
}