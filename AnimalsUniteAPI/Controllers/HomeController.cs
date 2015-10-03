using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Globalization;

namespace AnimalsUniteAPI.Controllers
{
    using System.IO;

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Basic()
        {
            return View();
        }
        public ActionResult BasicPlus()
        {
            return View();
        }
        public ActionResult AngularJS()
        {
            return View();
        }
        public ActionResult JQueryUI()
        {
            return View();
        }

        /// <summary>
        /// Returns a SAS for the specified blob that can be used to upload/download the blob
        /// </summary>
        /// <param name="blobName">The blob Name</param>
        /// <returns>ContentResult with a SAS signed URI or an empty string</returns>
        [HttpGet]
        public ActionResult GetBlobSasUrl(string blobName)
        {
            if (!string.IsNullOrEmpty(blobName))
            {
                AzureCommon.InitializeAccountPropeties();
                CloudBlockBlob blob = AzureCommon.ImagesContainer.GetBlockBlobReference(blobName);
                return Content(GetSasForBlob(blob));
            }

            return Content(string.Empty);
        }

        /// <summary>
        /// Generate a blob SAS
        /// </summary>
        /// <param name="blob">CloudBlockBlob</param>
        /// <returns>SAS string for the specified CLoudBlockBlob</returns>
        private static string GetSasForBlob(CloudBlockBlob blob)
        {
            if (blob == null)
            {
                throw new ArgumentNullException("blob can't be null");
            }

            var sas = blob.GetSharedAccessSignature(
                new SharedAccessBlobPolicy()
                {
                    Permissions = SharedAccessBlobPermissions.Write | SharedAccessBlobPermissions.Read | SharedAccessBlobPermissions.List,
                    SharedAccessExpiryTime = DateTime.UtcNow.AddMinutes(30),
                });
            return string.Format(CultureInfo.InvariantCulture, "{0}{1}", blob.Uri, sas);
        }
    }
}
