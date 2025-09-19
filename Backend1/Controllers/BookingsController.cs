using FlamingoAirwaysApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlamingoAirwaysApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly FlamingoContext _context;

        public BookingsController(FlamingoContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminBook>>> GetBookings()
        {
            return await _context.AdminBook.ToListAsync();
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminBook>> GetBooking(int id)
        {
            var booking = await _context.AdminBook.FindAsync(id);

            if (booking == null)
            {
                return NotFound();
            }

            return booking;
        }

       
        [HttpPost]
        public async Task<ActionResult<AdminBook>> PostBooking(AdminBook booking)
        {
            booking.BookingDate = DateTime.Now; 
            booking.Status = "Confirmed";      

            _context.AdminBook.Add(booking);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBooking), new { id = booking.BookingID }, booking);
        }

       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking(int id, AdminBook booking)
        {
            if (id != booking.BookingID)
            {
                return BadRequest("Booking ID mismatch");
            }

            _context.Entry(booking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            var booking = await _context.AdminBook.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }

            _context.AdminBook.Remove(booking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookingExists(int id)
        {
            return _context.AdminBook.Any(e => e.BookingID == id);
        }
    }
}
