using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class SPCAsingleController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_getSPCA_singleResult> GetSPCA(string spcaid)
        {
            var singleSPCA = db.sp_getSPCA_single(Convert.ToInt32(spcaid));

            return singleSPCA.ToList();
        }
    }
}
