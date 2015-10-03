using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class UniqueFeaturesController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_GetUniqueFeaturesResult> GetUniquefeatures(string animalid)
        {
            var features = db.sp_GetUniqueFeatures(Convert.ToInt32(animalid));

            return features.ToList();
        }
    }
}