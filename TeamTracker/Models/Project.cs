using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;

public class Project
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Display(Name = "Project Code")]
    public int project_code { get; set; }

    [Required]
    [StringLength(100)]
    [Display(Name = "Project Name")]
    public string project_name { get; set; }

    public List<project_member> project_member { get; set; }
    public List<Phase>? Phase { get; set; }
}
