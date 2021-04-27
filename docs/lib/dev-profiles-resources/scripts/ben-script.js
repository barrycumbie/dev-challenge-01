
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    //for (var x = 0; x < myObj.data.length; x++) {
    $(document).ready(function () {

      document.getElementById("name").innerHTML = myObj.devProfiles[1].name;
      document.getElementById("major").innerHTML = myObj.devProfiles[1].major;
      document.getElementById("concentration").innerHTML = myObj.devProfiles[1].concentration;
      document.getElementById("degree").innerHTML = myObj.devProfiles[1].degree;
      document.getElementById("languages").innerHTML = myObj.devProfiles[1].skills.languages;
      document.getElementById("frameworks").innerHTML = myObj.devProfiles[1].skills.frameworks;
      document.getElementById("database").innerHTML = myObj.devProfiles[1].skills.database;
      document.getElementById("position").innerHTML = myObj.devProfiles[1].skills.position;
      document.getElementById("description").innerHTML = myObj.devProfiles[1].description;
      document.getElementById("email").innerHTML = myObj.devProfiles[1].email;
      document.getElementById("githubProfile").innerHTML = myObj.devProfiles[1].githubProfile;

    })
      
  }
};

xmlhttp.open("GET", "../lib/dev-profiles-resources/scripts/devs-data.txt", true);
xmlhttp.send();