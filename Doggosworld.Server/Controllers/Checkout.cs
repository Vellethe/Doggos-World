using Microsoft.AspNetCore.Mvc;

namespace Doggosworld.Server.Controllers
{
    public class Checkout : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
