using Doggosworld.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Doggosworld.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SnacksController : ControllerBase
    {
        private readonly DoggosWorldDbContext _context;

        public SnacksController(DoggosWorldDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Snacks>> GetSnacks()
        {
            return _context.Snacks.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Snacks> GetSnacks(int id)
        {
            var snacks = _context.Snacks.Find(id);
            if (snacks == null)
            {
                return NotFound();
            }
            return snacks;
        }

        [HttpPost]
        public ActionResult<Snacks> PostSnacks([FromBody] Snacks snacks)
        {
            if (snacks == null)
            {
                return BadRequest();
            }

            snacks.Id = 0;

            _context.Snacks.Add(snacks);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetSnacks), new { id = snacks.Id }, snacks);
        }


        [HttpPut("{id}")]
        public IActionResult PutSnacks(int id, Snacks snacks)
        {
            if (id != snacks.Id)
            {
                return BadRequest();
            }

            _context.Entry(snacks).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSnacks(int id)
        {
            var snacks = _context.Snacks.Find(id);
            if (snacks == null)
            {
                return NotFound();
            }

            _context.Snacks.Remove(snacks);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
