using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using SendGrid;
using System.Net;

namespace AnimalsUniteAPI
{
    /// <summary>
    /// Summary description for ComUs
    /// </summary>
    public class ComUs : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string mymessage = "";

            if (context.Request.HttpMethod == "POST")
            {
                foreach (string key in context.Request.Form.AllKeys)
                {
                    switch (key)
                    {
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
            var linqregisters = db.sp_DoortjieMessages(mymessage);







            var myMessage = new SendGridMessage();

            // Add the message properties.
            myMessage.From = new MailAddress("noreply@petsociety.co.za");

            // Add multiple addresses to the To field.
            List<String> recipients = new List<String>
            {
                @"Danie Rossouw <rossouw.daniel@gmail.com>"
            };

            myMessage.AddTo(recipients);

            myMessage.Subject = "Mail from Doortjie";

            //Add the HTML and Text bodies
          

            myMessage.Html = mymessage;
            myMessage.Text = "Hello World plain text!";

            // Create network credentials to access your SendGrid account.
            var username = "azure_00db54dbccd19ec61af8bb92193f66ca@azure.com";
            var pswd = "Lappies12";

            var credentials = new NetworkCredential(username, pswd);

            // Create an Web transport for sending email, using credentials...
            var transportWeb = new Web(credentials);

            // Send the email. 
            try
            {
                //await transportWeb(myMessage);
                //Console.WriteLine("Sent!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("ERROR = " + ex.Message);
            }




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