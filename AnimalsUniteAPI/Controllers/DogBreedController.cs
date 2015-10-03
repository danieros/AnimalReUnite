using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AnimalsUniteAPI.Controllers
{
    //[Authorize]
    [EnableCors(origins: "http://localhost:45118", headers: "*", methods: "*")]

    public class DogBreedController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_getdogbreedResult> GetBreed(string keyword)
        {
            var Breednames = db.sp_getdogbreed(keyword);

            return Breednames.ToList();
        }
    }
}
