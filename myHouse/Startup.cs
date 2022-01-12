using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using myHouse.DAL;
using myHouse.EmailService.HostedServices;
using myHouse.Helpers;
using myHouse.Hubs;
using myHouse.Logic.EstateData;
using myHouse.Logic.UserRepository;

namespace myHouse
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            // DB Connection PostgresSQL
            services.AddDbContext<AppDbContext>(opt => opt.UseNpgsql
                (Configuration.GetConnectionString("myHouse")));

            services.AddSignalR();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "myHouse", Version = "v1" });
            });

            // Logic
            services.AddScoped<IEstateData, EstateData>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<JwtService>();

            // Mocked Data
            // services.AddSingleton<IEstateData, MockEstateData>();
            services.AddSingleton<EmailHostedService>();
            services.AddHostedService(provider => provider.GetService<EmailHostedService>());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "myHouse v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            // CORS Policy Configuration
            app.UseCors(options => options
                .WithOrigins(new[] { "http://localhost:3000", "http://localhost:8000" })
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
            );

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<ChatHub>("/chat");
            });
        }
    }
}
