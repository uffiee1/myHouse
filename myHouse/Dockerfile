#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV ASPNETCORE_ENVIRONMENT=Development

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR "/src"
COPY ["myHouse/myHouse.csproj", "myHouse/"]
COPY ["myHouse.Client/myHouse.Client.njsproj", "myHouse/myHouse.Client/"]
COPY ["myHouse.Client.AdminDashboard/myHouse.Client.AdminDashboard.njsproj", "myHouse/myHouse.Client.AdminDashboard/"]
COPY ["myHouse.DAL/myHouse.DAL.csproj", "myHouse/myHouse.DAL/"]
COPY ["myHouse.EmailService/myHouse.EmailService.csproj", "myHouse/myHouse.EmailService/"]
COPY ["myHouse.Logic/myHouse.Logic.csproj", "myHouse/myHouse.Logic/"]
COPY ["myHouse.Models/myHouse.Models.csproj", "myHouse/myHouse.Models/"]

WORKDIR "./myHouse"
RUN dotnet restore "./myHouse.csproj"
COPY . .
WORKDIR "./myHouse"
RUN dotnet build "./myHouse.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "myHouse.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "myHouse.dll"]