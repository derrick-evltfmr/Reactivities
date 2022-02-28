using Persistence;                            // DataContext
using Domain;                                 // Activity
using Microsoft.AspNetCore.Mvc;               // [HttpGet]
using System.Threading.Tasks;                 // Task
using System.Collections.Generic;             // List
using Microsoft.EntityFrameworkCore;          // ToListAsync()

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities(){
            return await _context.Activities.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivities(Guid id){
            return await _context.Activities.FindAsync(id);
        }

    }
}