using Microsoft.AspNetCore.Mvc;

namespace Doggosworld.Server.Controllers
{
    public class Orders : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
