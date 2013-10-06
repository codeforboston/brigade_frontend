var members = [
  {
    "id": 1,
    "name": "Liam Morley",
    "github_profile": "https://github.com/carpeliam",
    "email": "liam@carpeliam.com",
    "projectMemberships": [1]
  },
  {
    "id": 2,
    "name": "Harlan Weber",
    "github_profile": "https://github.com/whereshj",
    "email": "hweber@codeforamerica.org",
    "projectMemberships": [2]
  },
  {
    "id": 3,
    "name": "Sarah LaPlante",
    "github_profile": "https://github.com/ohnorobo",
    "email": "sar.laplante@gmail.com",
    "projectMemberships": [3]
  },
  {
    "id": 4,
    "name": "Kristen Merrill",
    "email":"snowtackle@gmail.com",
    "projectMemberships": [4]
  },
  {
    "id": 5,
    "name": "Matt Cloyd",
    "github_profile": "https://github.com/_beechnut",
    "email": "mcloyd@codeforamerica.org",
    "projectMemberships": [5]
  }
];
var projectMembers = [
  {"id": 1, "member": 1, "project": 1, "role": "Lead Developer"},
  {"id": 2, "member": 2, "project": 1, "role": "Designer"},
  {"id": 3, "member": 3, "project": 1, "role": "Developer"},
  {"id": 4, "member": 4, "project": 1, "role": "Researcher"},
  {"id": 5, "member": 5, "project": 2, "role": "Lead Developer"}
];
var projects = [
  {
    "id": 1,
    "name": "Pantry Pickup",
    "description": "Combining city data with a list of specific needs from food pantries will allow citizens to most effectively make useful and needed donations assisted by the Pantry Pick-Up App.",
    "repository": "https://github.com/codeforboston/pantry_pickup",
    "history": "https://github.com/codeforboston/pantry_pickup/contributors",
    "url": "http://www.pantrypickup.org",
    "status": "In Development",
    "projectMembers": [1, 2, 3, 4],
    "skillsNeeded": ["node.js", "python"],
    "screenshots": [],
    "pressClippings": [],
    "featured": true
  },
  {
    "id": 2,
    "name": "MBTA Alerts",
    "description": "The bot that tweets from the MBTA Alerts RSS feed. Saving 9K @mbta_alerts Twitter followers from information blackout!",
    "repository": "https://github.com/codeforboston/mbta_alerts",
    "history": "https://github.com/codeforboston/mbta-alerts/contributors",
    "url": "http://www.twitter.com/mbta-alerts",
    "status": "Deployed",
    "projectMembers": [5],
    "skillsNeeded": ["node.js"],
    "screenshots": [],
    "pressClippings": ["http://www.metro.us/boston/news/local/2013/06/11/code-for-boston-to-revive-mbta-alerts-twitter-account/"],
    "featured": false
  }
];
var events = [
  {
    "id": 1,
    "name": "Weekly Hack Night",
    "description": "At our weekly hack nights, Code for Boston members work to better civic and municipal life here in Boston by developing civic apps, pursuing open data projects, and generally lookng to leverage technology for use in the public sphere.",
    "location": {
      "name": "Cambridge Innovation Center",
      "address1": "1 Broadway",
      "address2": "4th Floor, Kathmandu Conference Room",
      "city": "Cambridge",
      "state": "MA",
      "zip": "02142",
      "specialInstructions": "Check in with security, then take the elevator to the 4th Floor."
    },
    "startTime": "2013-09-24T19:00:00",
    "url": "http://www.meetup.com/Code-for-Boston/events/137578862/",
    "featured": true
  },
  {
    "id": 2,
    "name": "Weekly Hack Night",
    "description": "At our weekly hack nights, Code for Boston members work to better civic and municipal life here in Boston by developing civic apps, pursuing open data projects, and generally lookng to leverage technology for use in the public sphere.",
    "location": {
      "name": "Cambridge Innovation Center",
      "address1": "1 Broadway",
      "address2": "4th Floor, Kathmandu Conference Room",
      "city": "Cambridge",
      "state": "MA",
      "zip": "02142",
      "specialInstructions": "Check in with security, then take the elevator to the 4th Floor."
    },
    "startTime": "2013-10-01T19:00:00",
    "url": "http://www.meetup.com/Code-for-Boston/events/137601442/",
    "featured": false
  }
];
var press = [
  {
    "title": "Code for Boston to revive MBTA Alerts! Twitter account",
    "publicationName": "Metro | Boston",
    "publicationDate": "June 11, 2013",
    "url": "http://www.metro.us/boston/news/local/2013/06/11/code-for-boston-to-revive-mbta-alerts-twitter-account/",
    "relatedProject": "MBTA Alerts",
    "relatedProjectGithub": "https://github.com/codeforboston/mbta-alerts",
    "relatedMembers": "Matt Cloyd"
  },
  {
    "title": "Civic hackers (the good kind) help local governments",
    "publicationName": "USA Today",
    "publicationDate": "June 23, 2013",
    "url": "http://www.usatoday.com/story/money/columnist/2013/06/23/baverman-columnist-entrepreneurs-startups/2445807/",
    "relatedProject": "National Day of Civic Hacking",
    "relatedProjectGithub": "",
    "relatedMembers": "Harlan Weber"
  }
];
App.Project.FIXTURES = projects;
App.ProjectMember.FIXTURES = projectMembers;
App.Member.FIXTURES = members;
App.Event.FIXTURES = events;