using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace TeamTracker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public ChatController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendMessage([FromBody] ChatMessage message)
    {
        // Replace with your AI service endpoint and API key
        var aiServiceUrl = "https://api.gemini.com/v1/chat";
        var apiKey = "AIzaSyB_enJuHRK9vanW8g7SFwrdYaxJWrIy3Y0";

        var request = new HttpRequestMessage(HttpMethod.Post, aiServiceUrl)
        {
            Content = new StringContent(JsonConvert.SerializeObject(message), Encoding.UTF8, "application/json")
        };
        request.Headers.Add("Authorization", $"Bearer {apiKey}");

        var response = await _httpClient.SendAsync(request);
        var responseContent = await response.Content.ReadAsStringAsync();

        return Ok(responseContent);
    }
}

public class ChatMessage
{
    public string Message { get; set; }
}
