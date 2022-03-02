using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace HiQ.Leap.WordSurrounder.WebAPI.Controllers
{
    [Route("/")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() 
        {
            return Ok("Server is up and running!");
        }

        [HttpPost]
        public JsonString ProcessFile([FromBody] JsonString jsonString)
        {;
            return new JsonString(ProcessText(jsonString.text));
        }
        private string ProcessText(string text)
        {
            if(text != null)
            {
                string onlyText = Regex.Replace(text, @"[^\w\s\-]*", "");
                var mostFrequentWord = Regex.Split(onlyText.ToLower(), @"\W+")
                    .Where(word => !word.Contains("_"))
                    .GroupBy(x => x)
                    .OrderByDescending(x => x.Count())
                    .First().Key;
                var mostFrequentWordAllCases = Regex.Split(onlyText, @"\W+")
                    .Where(word => string.Equals(word,mostFrequentWord,StringComparison.CurrentCultureIgnoreCase)).Distinct().ToList();
                string processedText = Regex.Replace(text, @"\b" + mostFrequentWord + @"\b", "foo" + mostFrequentWord + "bar");
                foreach (var word in mostFrequentWordAllCases)
                {
                    processedText = Regex.Replace(text, @"\b" + word + @"\b", "foo" + word + "bar");
                    text = processedText;
                }
                return processedText;
            }
            else
            {
                return "Error: text is null";
            }
        }
    }
    public class JsonString
    {
        public string text { get; set; }
        public JsonString(string text)
        {
            this.text = text;
        }
    }
}
