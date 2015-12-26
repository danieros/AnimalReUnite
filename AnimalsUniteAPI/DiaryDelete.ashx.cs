using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for DiaryDelete
    /// </summary>
    public class DiaryDelete : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string diaryid = "";

            if (context.Request.HttpMethod == "GET")
            {
                foreach (string key in context.Request.QueryString.AllKeys)
                {
                    switch (key)
                    {
                        case "diaryid":
                            diaryid = context.Request.QueryString[key];
                            break;                       
                        default:
                            // You can use the default case.
                            break;
                    }
                }
            }

            Models.PetsDataContext db = new Models.PetsDataContext();

            var linqregisters = db.sp_DeleteDiary(Convert.ToInt32(diaryid));



            context.Response.ContentType = "text/plain";
            context.Response.Write("Diary entry sucessfully deleted");
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