using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AnimalsUniteAPI.Controllers
{
    [EnableCors(origins: "http://localhost:45118", headers: "*", methods: "*")]

    public class SPCAController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_getSPCAResult> GetSPCA(string memberid)
        {
            var listedSPCA = db.sp_getSPCA();

            return listedSPCA.ToList();
        }

    }
}
