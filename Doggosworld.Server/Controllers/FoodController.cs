using Doggosworld.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Doggosworld.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly DoggosWorldDbContext _context;

        public FoodController(DoggosWorldDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Food>> GetFoods()
        {
            return _context.Food.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Food> GetFood(int id)
        {
            var food = _context.Food.Find(id);
            if (food == null)
            {
                return NotFound();
            }
            return food;
        }

        [HttpPost]
        public ActionResult<Food> PostFood([FromBody] Food food)
        {
            if (food == null)
            {
                return BadRequest();
            }

            food.Id = 0;

            _context.Food.Add(food);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetFood), new { id = food.Id }, food);
        }


        [HttpPut("{id}")]
        public IActionResult PutFood(int id, Food food)
        {
            if (id != food.Id)
            {
                return BadRequest();
            }

            _context.Entry(food).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFood(int id)
        {
            var food = _context.Food.Find(id);
            if (food == null)
            {
                return NotFound();
            }

            _context.Food.Remove(food);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
