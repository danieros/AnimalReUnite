using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class DiaryGetController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_GetDiaryResult> GetDiary(string memberid, string petname)
        {
            var Diaries = db.sp_GetDiary(Convert.ToInt32(memberid), petname);

            return Diaries.ToList();
        }
    }
}
