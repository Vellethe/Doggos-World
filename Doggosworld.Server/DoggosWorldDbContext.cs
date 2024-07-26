using Doggosworld.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Doggosworld.Server
{
    public class DoggosWorldDbContext : DbContext
    {
        public DoggosWorldDbContext(DbContextOptions<DoggosWorldDbContext> options) : base(options) { }

        public DbSet<Food> Food { get; set; }
        public DbSet<Toys> Toys { get; set; }
        public DbSet<Snacks> Snacks { get; set; }
    }
}
