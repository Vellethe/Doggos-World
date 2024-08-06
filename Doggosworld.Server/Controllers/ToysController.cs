using Doggosworld.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Doggosworld.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToysController : ControllerBase
    {
        private readonly DoggosWorldDbContext _context;

        public ToysController(DoggosWorldDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Toys>> GetToys()
        {
            return _context.Toys.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Toys> GetToys(int id)
        {
            var toys = _context.Toys.Find(id);
            if (toys == null)
            {
                return NotFound();
            }
            return toys;
        }

        [HttpPost]
        public ActionResult<Toys> PostToys([FromBody] Toys toys)
        {
            if (toys == null)
            {
                return BadRequest();
            }

            toys.Id = 0;

            _context.Toys.Add(toys);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetToys), new { id = toys.Id }, toys);
        }

        [HttpPut("{id}")]
        public IActionResult PutToys(int id, Toys toys)
        {
            if (id != toys.Id)
            {
                return BadRequest();
            }

            _context.Entry(toys).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteToys(int id)
        {
            var toys = _context.Toys.Find(id);
            if (toys == null)
            {
                return NotFound();
            }

            _context.Toys.Remove(toys);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
