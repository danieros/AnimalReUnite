using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for DiaryInsert
    /// </summary>
    public class DiaryInsert : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string mydate = "";
            string petname = "";
            string memberid = "";
            string mydiary = "";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
                        case "mydate":
                            mydate = context.Request.Form[key];
                            break;
                        case "petname":
                            petname = context.Request.Form[key];
                            break;
                        case "memberid":
                            memberid = context.Request.Form[key];
                            break;
                        case "mymessage":
                            mydiary = context.Request.Form[key];
                            break;
                        default:
                            // You can use the default case.
                            break;
                    }
                }
            }

            Models.PetsDataContext db = new Models.PetsDataContext();
            DateTime myDateTime = Convert.ToDateTime(mydate);

            var linqregisters = db.sp_InsertDiary(Convert.ToInt32(memberid), petname, mydiary, myDateTime);


           
            context.Response.ContentType = "text/plain";
            context.Response.Write("Diary entry sucessfully added");
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