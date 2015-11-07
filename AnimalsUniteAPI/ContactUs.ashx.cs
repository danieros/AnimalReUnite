using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for ContactUs
    /// </summary>
    public class ContactUs : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string nameofuser = "";
            string email = "";
            string mymessage = "";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
                        case "nameofuser":
                            nameofuser = context.Request.Form[key];
                            break;
                        case "email":
                            email = context.Request.Form[key];
                            break;
                        case "mymessage":
                            mymessage = context.Request.Form[key];
                            break;
                        default:
                            // You can use the default case.
                            break;
                    }
                }
            }

            Models.PetsDataContext db = new Models.PetsDataContext();
            var linqregisters = db.sp_InsertMessages(nameofuser, email, mymessage);           

            context.Response.ContentType = "text/plain";
            context.Response.Write("message");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}