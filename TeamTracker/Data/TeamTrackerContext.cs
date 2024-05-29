using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamTracker.Models;

namespace TeamTracker.Data
{
    public class TeamTrackerContext : DbContext
    {
        public TeamTrackerContext (DbContextOptions<TeamTrackerContext> options)
            : base(options)
        {
            LoggedUserId = 1;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<project_member>().HasKey(x => new {x.user_ID, x.project_code});
            modelBuilder.Entity<task_member>().HasKey(x => new {x.user_ID, x.task_ID});
            modelBuilder.Entity<Phase>().HasKey(x => x.PH_ID);
        }
        public int LoggedUserId { get; set; }
        public DbSet<User> User { get; set; } = default!;
        public DbSet<Project> Project { get; set; } = default!;
        public DbSet<project_member> project_member { get; set; } = default!;
        public DbSet<Phase> Phase { get; set; } = default!;
        public DbSet<Models.Task> Task { get; set; } = default!;
        public DbSet<task_member> task_members { get; set; } = default!;
        public DbSet<materials> materials { get; set; } = default!;
    }
}
