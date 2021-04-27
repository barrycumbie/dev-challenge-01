// Retrieve JSON data from file
var xhttp = new XMLHttpRequest();

// Holds the html content of the profile card
var AndrewSkillList = "";

var head = "My Skills";
xhttp.onreadystatechange = function () {
    // Check status
    if (this.readyState == 4 && this.status == 200) {
        // Convert text to JSON
        var jsonData = JSON.parse(this.responseText);
        console.log(jsonData);

        // Retrieve all devs
        for (var i = 0; i < jsonData.devProfiles[3].skills.languages.length; i++) {
            var devLangs = jsonData.devProfiles[3].skills.languages[i].toString();
            AndrewSkillList += "<div class='skills' id='skills'>"
                    + "<ul>"
                    + "<li>" + devLangs + "</li>"
                    + "</ul>"
                    + "</div>"

            // Assign the content to div
            document.querySelector("#AndrewList").innerHTML = AndrewSkillList;
        }
    }
};
xhttp.open("GET", "../lib/dev-profiles-resources/scripts/devs-data.txt", true);
xhttp.send();