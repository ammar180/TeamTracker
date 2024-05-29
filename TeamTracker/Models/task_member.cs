using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;
public class task_member
{
    [Key]
    [Column(Order = 0)]
    [ForeignKey("User")]
    public int user_ID { get; set; }

    [Key]
    [Column(Order = 1)]
    [ForeignKey("Task")]
    public int task_ID { get; set; }

    public User User { get; set; }
    public Task Task { get; set; }
}
