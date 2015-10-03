using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AnimalsUniteAPI
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public override void ProcessRequest(HttpContext context)
        {
            context.Response.Redirect("StaticViews/Index.html", true);
        }
    }
}