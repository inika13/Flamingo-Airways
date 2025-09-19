using Microsoft.EntityFrameworkCore;

namespace FlamingoAirwaysApi.Model
{
    public class FlamingoContext : DbContext
    {
        public FlamingoContext(DbContextOptions<FlamingoContext> options) : base(options)
        {
        }

        public DbSet<Flight> Flights { get; set; }
        public DbSet<User> Users { get; set; }

        
        public DbSet<AdminBook> AdminBook { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.Entity<AdminBook>().ToTable("Bookings");
        }
    }
}
