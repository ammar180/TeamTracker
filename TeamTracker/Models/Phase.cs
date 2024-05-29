using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;

public class Phase
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Display(Name = "Phase ID")]
    public int PH_ID { get; set; }

    [ForeignKey("Project")]
    [Display(Name = "Project Code")]
    public int project_code { get; set; }

    [ForeignKey("Phase")]
    [Display(Name = "Parent Phase ID")]
    public int? pairant_PH { get; set; }

    [Display(Name = "Parent Phase PH ID")]
    public int? ParentPhasePH_ID { get; set; }

    [Required]
    [StringLength(100)]
    [Display(Name = "Phase Name")]
    public string phase_name { get; set; }

    [StringLength(1000)]
    [Display(Name = "Phase Description")]
    public string ph_description { get; set; }

    [Required]
    [DataType(DataType.Date)]
    //[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
    [Display(Name = "Start Date")]
    public DateTime start_date { get; set; }

    [Required]
    [DataType(DataType.Date)]
    //[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
    [Display(Name = "End Date")]
    public DateTime end_date { get; set; }

    [Display(Name = "Parent Phase")]
    public virtual Phase? ParentPhase { get; set; }

    [Display(Name = "Child Phases")]
    public virtual ICollection<Phase>? ChildPhases { get; set; }

    [Display(Name = "Project")]
    public Project? Project { get; set; }

    [Display(Name = "Tasks")]
    public List<Task>? Tasks { get; set; }

    [Display(Name = "Materials")]
    public List<materials>? Materials { get; set; }
}