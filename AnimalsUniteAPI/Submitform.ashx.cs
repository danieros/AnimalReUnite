using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for Submitform
    /// </summary>
    public class Submitform : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string username = "";
            string password = "";
            string email = "";
            string mymessage = "";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
                        case "user":
                            username = context.Request.Form[key];
                            break;
                        case "email":
                            email = context.Request.Form[key];
                            break;
                        case "passsword":
                            password = context.Request.Form[key];
                            break;
                        default:
                            // You can use the default case.
                            break;
                    }
                }
            }

            Models.PetsDataContext db = new Models.PetsDataContext();
            var linqregisters = db.sp_registeruser(email, username, password);


            foreach (var linqregister in linqregisters)
            {
                int memberid = Convert.ToInt32(linqregister.memberid);
                if (memberid > 0)
                {
                    HttpCookie cookie1 = new HttpCookie("memberid");
                    cookie1.Value = memberid.ToString();
                    cookie1.Expires = DateTime.Now.AddDays(30);
                    //cookie.Path = "/StaticViews";
                    context.Response.AppendCookie(cookie1);

                    HttpCookie cookie2 = new HttpCookie("yourname");
                    cookie2.Value = username;
                    cookie2.Expires = DateTime.Now.AddDays(30);
                    //cookie.Path = "/StaticViews";
                    context.Response.AppendCookie(cookie2);
                    mymessage = linqregister.mymessage;
                }
                else
                {
                    mymessage = linqregister.mymessage;
                }
            }

            context.Response.ContentType = "text/plain";
            context.Response.Write(mymessage);

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