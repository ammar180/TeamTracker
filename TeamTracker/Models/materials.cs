using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;

public class materials
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int material_ID { get; set; }

    [ForeignKey("Phase")]
    public int? ph_ID { get; set; }

    [ForeignKey("Task")]
    public int? task_ID { get; set; }

    [StringLength(1000)]
    public string? materials_URL { get; set; }

    public Phase Phase { get; set; }
    public Task Task { get; set; }
}