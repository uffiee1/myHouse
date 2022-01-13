using Microsoft.EntityFrameworkCore.Migrations;

namespace myHouse.DAL.Migrations
{
    public partial class AddedPictures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pictures",
                table: "Estate",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pictures",
                table: "Estate");
        }
    }
}
