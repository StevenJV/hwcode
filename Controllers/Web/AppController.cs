using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TheWorld.ViewModels;
using TheWorld.Services;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        private IMailService _mailService;
        private IConfigurationRoot _config;
        public AppController(IMailService mailService, IConfigurationRoot config)
        {
            _mailService = mailService;
            _config = config;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            _mailService.SendMail(_config["MailSettings:ToAddress"],model.Email, "fromTheWorld", model.Message);
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
    }
}
