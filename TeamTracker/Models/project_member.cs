using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;
public class project_member
{
    [Key]
    [Column(Order = 0)]
    [ForeignKey("User")]
    public int user_ID { get; set; }

    [Key]
    [Column(Order = 1)]
    [ForeignKey("Project")]
    public int project_code { get; set; }

    [Required]
    [StringLength(100)]
    public string member_role { get; set; }

    public User User { get; set; }
    public Project Project { get; set; }
}