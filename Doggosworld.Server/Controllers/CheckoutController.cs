using Microsoft.AspNetCore.Mvc;

namespace Doggosworld.Server.Controllers
{
    public class CheckoutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
