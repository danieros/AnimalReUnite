using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AnimalReUnite.Startup))]
namespace AnimalReUnite
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
