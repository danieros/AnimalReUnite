using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class PetDetailsController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_GetregisteredPetDetailsResult> GetDetails(string memberid, string petname)
        {
            var registeredpetdetail = db.sp_GetregisteredPetDetails(Convert.ToInt32(memberid), petname);

            return registeredpetdetail.ToList();
        }
    }
}