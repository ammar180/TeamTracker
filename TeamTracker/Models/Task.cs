using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;

public class Task
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Display(Name = "Task ID")]
    public int task_ID { get; set; }

    [ForeignKey("Phase")]
    [Display(Name = "Phase ID")]
    public int ph_ID { get; set; }

    [Required]
    [StringLength(100)]
    [Display(Name = "Task Name")]
    public string task_name { get; set; }

    [StringLength(500)]
    [Display(Name = "Details")]
    public string details { get; set; }

    [Required]
    [DataType(DataType.DateTime)]
    [Display(Name = "Start Date")]
    public DateTime start_date { get; set; }

    [Required]
    [DataType(DataType.DateTime)]
    [Display(Name = "End Date")]
    public DateTime end_date { get; set; }

    public string status { get; set; }

    public Phase Phase { get; set; }
    public List<task_member> TaskMembers { get; set; }
    public List<materials>? Materials { get; set; }
}
