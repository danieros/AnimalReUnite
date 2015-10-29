using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class HeroesController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_GetHeroesResult> GetHeroes()
        {
            var Heroenames = db.sp_GetHeroes();

            return Heroenames.ToList();
        }
    }
}
