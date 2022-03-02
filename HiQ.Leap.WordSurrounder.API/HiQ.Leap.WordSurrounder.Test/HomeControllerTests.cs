using HiQ.Leap.WordSurrounder.WebAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Xunit;

namespace HiQ.Leap.WordSurrounder.Test
{
    public class HomeControllerTests
    {
        HomeController controller = new HomeController();

        [Fact]
        public void TestIndex()
        {
            var result = controller.Index();

            Assert.IsType<OkObjectResult>(result);
        }
        [Theory]
        [InlineData("One", "fooOnebar")]                                                                                //test one word
        [InlineData("the the the ok ok", "foothebar foothebar foothebar ok ok")]                                        //test most frequent word
        [InlineData("the mother needs the therapist", "foothebar mother needs foothebar therapist")]                    //test inside word
        [InlineData("the The thE ok ok", "foothebar fooThebar foothEbar ok ok")]                                        //test capitalization
        [InlineData("the the ok ok", "foothebar foothebar ok ok")]                                                      //test same count
        [InlineData("\"The\'", "\"fooThebar\'")]                                                                        //test citation
        [InlineData("", "")]                                                                                            //test empty string
        [InlineData("the_the ok ok", "the_the foookbar foookbar")]                                                      //test underscore combined
        [InlineData("__the__ _the the_ the ok ok ok ok", "__the__ _the the_ the foookbar foookbar foookbar foookbar")]  //test underscore separate
        [InlineData(null, "ERROR: text is null")]                                                                       //test null
        public void TestProcessFile(string input, string expected)
        {
            var result = controller.ProcessFile(new JsonString(input));

            Assert.Equal(expected, result.text);
        }
    }
}
