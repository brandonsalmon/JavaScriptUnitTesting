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
            return Get(1000);
        }

        public IEnumerable<Person> Get(int quantity)
        {
            return GetRandomPeople(quantity);
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
                Name = GetRandomName(),
                Salary = ((decimal)random.NextDouble() * 50000) + 50000
            };
        }

        private string GetRandomName()
        {
            return firstNames[random.Next(firstNames.Length)] + " " + lastNames[random.Next(lastNames.Length)];
        }
    }
}