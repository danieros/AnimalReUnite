using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class UserMessagesController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_GetUserMessagesResult> GetUserMessages(string memberid)
        {
            var UserMesage = db.sp_GetUserMessages(Convert.ToInt32(memberid));

            return UserMesage.ToList();
        }
    }
}
