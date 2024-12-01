using Microsoft.AspNetCore.Mvc;
using Dapper;
using System.Data;
using Microsoft.Data.SqlClient;
using XaxatoH.Models;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace XaxatoH.Controllers
{
  public class Response
  {
    public List<string> Parents { get; set; } = new List<string>();
    public List<string> OnLevel { get; set; } = new List<string>();
    public string? Current { get; set; } = null;
    public List<string> Children { get; set; } = new List<string>();
  }

  [ApiController]
  [Route("[controller]")]
  public class SearchController : ControllerBase
  {
    private readonly string _connstr;

    public SearchController(IConfiguration configuration)
    {
      _connstr = configuration.GetConnectionString("DefaultConnection");
    }

    [HttpGet("fio/{str}")]
    public async Task<ActionResult> SearchFi(string str)
    {
        
      List<table> staff = new List<table>();

      using (IDbConnection db = new SqlConnection(_connstr))
      {
        staff.AddRange(await db.QueryAsync<table>("SELECT * FROM [table]"));
      }

      List<string> fi = str.Split().ToList();
      
      List<table> res = new List<table>();
      foreach (string _ in fi)
      {
        _.Trim();
        Console.WriteLine($"Searching string: {_}");
        
        res.AddRange(staff.Where(s => s.Surname != null && s.Surname.StartsWith(_, StringComparison.OrdinalIgnoreCase)).ToList());
        res.AddRange(staff.Where(s => s.Name != null && s.Name.StartsWith(_, StringComparison.OrdinalIgnoreCase)).ToList());
      }

      var matchedPeople = res.Where(p =>
            fi.Contains(p.Surname) && fi.Contains(p.Name)).ToList();

      return !matchedPeople.IsNullOrEmpty() ? new JsonResult(matchedPeople) : new JsonResult(res);
    }
    [HttpGet("id/{id}")]
    public async Task<ActionResult> GetById(int id)
    {
      Response res = new Response();

      using (IDbConnection db = new SqlConnection(_connstr))
      {
        return new JsonResult(await db.QueryFirstOrDefaultAsync<table>("SELECT * FROM [table] WHERE Id = @Id", new {Id = id}));
      }
    }
    [HttpGet("hierarchy/{id}")]
    public async Task<ActionResult> GetHieById(int id)
    {
      Response res = new Response();

      using (IDbConnection db = new SqlConnection(_connstr))
      {
        res.Current = db.Query("SELECT * FROM [staff] WHERE ").FirstOrDefault();
      }

      return new JsonResult(res);
    }

    [HttpGet("filter")]
    public async Task<ActionResult<IEnumerable<table>>> GetByFilter(string? dep, string? block, string? back, string? city, string? role)
    {
      var queryBuilder = new StringBuilder("SELECT * FROM [table] WHERE 1=1");
      var parameters = new DynamicParameters();

      if (!string.IsNullOrEmpty(dep))
      {
        queryBuilder.Append(" AND Subdiv1 = @Depart");
        parameters.Add("@Depart", dep);
      }

      if (!string.IsNullOrEmpty(block))
      {
        queryBuilder.Append(" AND Func_block = @Block");
        parameters.Add("@Block", block);
      }

      if (!string.IsNullOrEmpty(back))
      {
        queryBuilder.Append(" AND Background = @Background");
        parameters.Add("@Background", back);
      }

      if (!string.IsNullOrEmpty(city))
      {
        queryBuilder.Append(" AND City = @City");
        parameters.Add("@City", city);
      }

      if (!string.IsNullOrEmpty(role))
      {
        queryBuilder.Append(" AND Role = @Role");
        parameters.Add("@Role", role);
      }

      var query = queryBuilder.ToString();

      using (var connection = new SqlConnection(_connstr))
      {
        var results = await connection.QueryAsync<table>(query, parameters);
        return Ok(results);
      }
    }
  }
}
