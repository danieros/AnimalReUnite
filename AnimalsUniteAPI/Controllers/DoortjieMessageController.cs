using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnimalsUniteAPI.Controllers
{
    public class DoortjieMessageController : ApiController
    {
        private Models.PetsDataContext db = new Models.PetsDataContext();

        public List<Models.sp_getDoortjieMessagesResult> GetDoortjieMessage()
        {
            var DoortjieMessages = db.sp_getDoortjieMessages();

            return DoortjieMessages.ToList();
        }
    }
}
