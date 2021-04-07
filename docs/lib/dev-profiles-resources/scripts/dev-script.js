// Retrieve JSON data from file
var xhttp = new XMLHttpRequest();
var profileCardHtml = "";

xhttp.onreadystatechange = function() {
  // Check status
  if (this.readyState == 4 && this.status == 200) {
      // Convert text to JSON
      var jsonData= JSON.parse(this.responseText);
      // console.log(jsonData.devs.length);

      // Retrieve all devs
      for(var i = 0; i < jsonData.devs.length; i++) {
        var devName = jsonData.devs[i].name;
        var devImg = jsonData.devs[i].image;
        var devAlt = jsonData.devs[i].alt;
        var devUrl = jsonData.devs[i].url;

        // Assign html elements for profile cards
        profileCardHtml += "<a href='" + devUrl + "'>"
                            + "<div class='card'>"
                              + "<img src='" + devImg + "' alt='" + devAlt + "' style='width:300px;height:250px;'>"
                              + "<h3>" + devName + "</h3>"
                            + "</div>"  
                          + "</a>";
      }

      // Assign the content to div
      document.querySelector("#profileList").innerHTML = profileCardHtml;
  }
};
xhttp.open("GET", "../lib/dev-profiles-resources/scripts/devs-data.txt", true);
xhttp.send();