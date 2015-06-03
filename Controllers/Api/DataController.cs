using System;
using System.Collections.Generic;
using System.Web.Http;
using JavaScriptUnitTesting.Models;

namespace JavaScriptUnitTesting.Controllers.Api
{
    public class DataController : ApiController
    {
        Random random = new Random();
        string[] firstNames = new string[] { "Bob", "John", "David", "Brandon", "Ken", "Tom", "Matt", "Mike", "Henry" };
        string[] lastNames = new string[] { "Smith", "Johnson", "Baker", "Wilson", "Person", "Webster", "Wallace" };

        public IEnumerable<Person> Get()
        {
            return GetRandomPeople(100);
        }

        private IEnumerable<Person> GetRandomPeople(int numberOfRecords)
        {
            var people = new List<Person>();

            for (var i = 0; i < numberOfRecords; i++)
            {
                people.Add(GetRandomPerson(i + 1));
            }

            return people;
        }

        private Person GetRandomPerson(int id)
        {
            return new Person
            {
                Id = id,
                Name = GetRandomName()
            };
        }

        private string GetRandomName()
        {
            return firstNames[random.Next(firstNames.Length)] + " " + lastNames[random.Next(lastNames.Length)];
        }
    }
}