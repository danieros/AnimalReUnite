using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for Submitforms
    /// </summary>
    public class Submitforms : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");

            string petname = "";
            string previouspetname = "";
            string color = "";
            string breed = "";
            string memberid = "";
            string features = "";
            string animalid = "";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
                        case "petname":
                            petname = context.Request.Form[key];
                            break;
                        case "previouspetname":
                            previouspetname = context.Request.Form[key];
                            break;
                        case "color":
                            color = context.Request.Form[key];
                            break;
                        case "breed":
                            breed = context.Request.Form[key];
                            break;
                        case "memberid":
                            memberid = context.Request.Form[key];
                            break;
                        case "animalid":
                            animalid = context.Request.Form[key];
                            break;
                        default:
                            string subkey = key.Substring(0, 7);
                            if (subkey == "feature")
                            {
                                features += "|F=" + context.Request.Form[key];
                            }
                            break;
                    }
                }
            }

            features = features.Substring(1);

            Models.PetsDataContext db = new Models.PetsDataContext();
            var updateanimal = db.sp_InsertFeatures(color, 12, 12, 1, previouspetname, petname, "poodle", 1, Convert.ToInt32(memberid));
            var insertfeatures = db.sp_InsertUniqueFeatures(Convert.ToInt32(animalid), features);           
            context.Response.Redirect("StaticViews/Index.html#/PetsRegistered");
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