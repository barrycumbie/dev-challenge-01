var commLangs = ["Japanese", "English", "Korean"];
var expObj= [
  {
    "job":"Teacher / Nippon Kyoiku Seminar, San Jose, CA",
    "date":"2018-July 2019",
    "desc":"Provided instruction science, math and Japanese. Taught accurate and easy to understand"
  },
  {
    "job":"Server / Gaku",
    "date":"2018 - 2020",
    "desc":"Provided customers with quick and accurate service. • Prepared and cooked food. • Maintained cleanness and good hygiene according to standards."
  },
  {
    "job":"Server / Misoya",
    "date":"2017 - 2020",
    "desc":"Provided customers with quick and accurate service. • Maintained cleanness and good hygiene according to standards.    "
  }
];

var eduObj = [
  {
    "school":"University of North Alabama",
    "date":"2016 - 2021",
    "desc":"Bachelor of Business Administration"
  },
  {
    "school":"Yachiyo high school",
    "date":"2012 - 2015",
    "desc":"High school study"
  }
];

var harukiSkills = document.getElementById('harukiSkills');
var harukiComm = document.getElementById('harukiComm');
var harukiExp = document.getElementById('harukiExp');
var harukiEdu = document.getElementById('harukiEdu')

for(var i = 0; i < expObj.length; i++) {
  var a = "<h5 class='w3-opacity'><b>" + expObj[i].job + "</b></h5>" 
        + "<h6 class='w3-text-teal'><i class='fa fa-calendar fa-fw w3-margin-right'></i>" + expObj[i].date + "</h6>"
        + "<p>" + expObj[i].desc + "</p>"
        + "<hr></hr>";

  harukiExp.innerHTML += a;
}

for(var i = 0; i < eduObj.length; i++) {
  var b = "<h5 class='w3-opacity'><b>" + eduObj[i].school + "</b></h5>" 
        + "<h6 class='w3-text-teal'><i class='fa fa-calendar fa-fw w3-margin-right'></i>" + eduObj[i].date + "</h6>"
        + "<p>" + eduObj[i].desc + "</p>"
        + "<hr></hr>";

  harukiEdu.innerHTML += b;
}

for(language in commLangs) {
  harukiComm.append(commLangs[language]);
  harukiComm.innerHTML += "<br><br>";
}

// Retrieve JSON data from file
var xhttp = new XMLHttpRequest();

console.log("in ra")

xhttp.onreadystatechange = function() {
  // Check status
  if (this.readyState == 4 && this.status == 200) {
      // Convert text to JSON
      var jsonData= JSON.parse(this.responseText);
      console.log(jsonData);

      console.log(jsonData.devProfiles[6].name);

      document.querySelector("#harukiName").innerHTML = jsonData.devProfiles[6].name;

      console.log(jsonData.devProfiles[6].skills.languages.toString());
      
      for(lang in jsonData.devProfiles[6].skills.languages) {
        harukiSkills.append(jsonData.devProfiles[6].skills.languages[lang])
        harukiSkills.innerHTML += "<br><br>";
      }
  }
};
xhttp.open("GET", "devs-data.txt", true);
xhttp.send();