using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for Login
    /// </summary>
    public class Login : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string username = "";
            string password = "";
            string message = "1";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
                        case "user":
                            username = context.Request.Form[key];
                            break;
                        case "password":
                            password = context.Request.Form[key];
                            break;
                        default:
                            // You can use the default case.
                            break;
                    }
                }
            }

            Models.PetsDataContext db = new Models.PetsDataContext();
            var linqregisters = db.sp_login(username, password);

            bool checkifloggedin = false;

            foreach(var linqregister in linqregisters)
            {
                int memberid = linqregister.memberid;
                HttpCookie cookie = new HttpCookie("memberid");
                cookie.Value = memberid.ToString();
                cookie.Expires = DateTime.Now.AddDays(30);
                //cookie.Path = "/StaticViews";
                context.Response.AppendCookie(cookie);
                checkifloggedin = true;
                message = "1";
            }

            if (checkifloggedin == true)
            {
                HttpCookie cookie = new HttpCookie("yourname");
                cookie.Value = username;
                cookie.Expires = DateTime.Now.AddDays(30);
                //cookie.Path = "/StaticViews";
                context.Response.AppendCookie(cookie);
            }
            else
            {
                // HttpCookie cookie = new HttpCookie("loginfailed");
                // cookie.Value = "true";
                // cookie.Expires = DateTime.Now.AddDays(1);
                //// cookie.Path = "/StaticViews";
                // context.Response.AppendCookie(cookie);
                message = "Please check your username and/or password";
            }

            context.Response.ContentType = "text/plain";
            context.Response.Write(message);


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