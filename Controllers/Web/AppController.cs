using System;
using Microsoft.AspNetCore.Mvc;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Contact()
        {
            //throw new InvalidOperationException("bad things happen to good developers.");
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
    }
}