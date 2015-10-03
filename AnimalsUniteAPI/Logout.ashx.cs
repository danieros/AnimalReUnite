using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for Logout
    /// </summary>
    public class Logout : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpCookie cookie1 = new HttpCookie("yourname");
            cookie1.Value = "logout";
            cookie1.Expires = DateTime.Now.AddDays(-1);
            context.Response.AppendCookie(cookie1);

            HttpCookie cookie2 = new HttpCookie("memberid");
            cookie2.Value = "logout";
            cookie2.Expires = DateTime.Now.AddDays(-1);
            context.Response.AppendCookie(cookie2);

            context.Response.Redirect("StaticViews/Index.html#");
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