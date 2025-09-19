using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlamingoAirwaysApi.Model
{
   
    public class AdminBook
    {
        [Key]
        public int BookingID { get; set; }

        [ForeignKey("Customer")]
        public int CustomerID { get; set; }

        [ForeignKey("Flight")]
        public int FlightID { get; set; }

        public string PassengerName { get; set; } = string.Empty;
        public int PassengerAge { get; set; }
        public string PassengerGender { get; set; } = string.Empty;
        public int NoOfSeats { get; set; }
        public DateTime? BookingDate { get; set; }
        public string? Status { get; set; }
    }
}
