using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TeamTracker.Models;
public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int user_ID { get; set; }

    [Required]
    [StringLength(100)]
    public string user_name { get; set; }

    [StringLength(100)]
    public string public_username { get; set; }

    [Required]
    [EmailAddress]
    [StringLength(200)]
    public string email { get; set; }

    [Required]
    [StringLength(50)]
    public string user_password { get; set; }

    [StringLength(1000)]
    public string profileIcon_URL { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime birth_date { get; set; }

    public List<project_member> project_members { get; set; }
    //public List<TaskMember> TaskMembers { get; set; }
}