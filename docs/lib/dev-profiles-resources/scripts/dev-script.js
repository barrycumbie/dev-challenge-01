// Retrieve JSON data from file
var xhttp = new XMLHttpRequest();

// Holds the html content of the profile card
var profileCardHtml = "";

// Holds the modal content of the profile card
var profileModalHtml = "";
var modalHeaderHtml = "";
var modalBodyHtml = "";
var modalFooterHtml = "";

// Holds the content for sorting
var temp = [];
var sortedProfileHtml = [];

xhttp.onreadystatechange = function() {
  // Check status
  if (this.readyState == 4 && this.status == 200) {
      // Convert text to JSON
      var jsonData= JSON.parse(this.responseText);
      console.log(jsonData.devProfiles);

      temp = jsonData.devProfiles;

      // Retrieve all devs
      for(var i = 0; i < jsonData.devProfiles.length; i++) {
        var devName = jsonData.devProfiles[i].name;
        var devImg = jsonData.devProfiles[i].imagePath;
        var devAlt = jsonData.devProfiles[i].picAlt;
        var devLink = jsonData.devProfiles[i].link;
        var devModal = jsonData.devProfiles[i].modal;
        var devLangs = jsonData.devProfiles[i].skills.languages.toString();
        var devDesc = jsonData.devProfiles[i].description;
        var devMajor = jsonData.devProfiles[i].major;

        

        // Assign html elements for profile cards
        profileCardHtml += "<a data-toggle='modal' data-target='#"+ devModal +"'>"
                            + "<div class='card'>"
                              + "<img src='" + devImg + "' alt='" + devAlt + "' style='width:300px;height:250px;'>"
                              + "<h3>" + devName + "</h3>"
                            + "</div>"  
                          + "</a>";

        // Modal header
        modalHeaderHtml = "<div class='modal-header header-bg'>"
                            + "<h4 class='modal-title text-center'>About Me</h4>"
                            + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
                              +  "<span aria-hidden='true'>&times;</span>"
                            + "</button>"
                        + "</div>";

        // Modal body
        modalBodyHtml = "<div class='modal-body'>"
                           + "<center>"
                               + "<img src='" + devImg + "' width='150px' height='140px' border='0'>"
                               + "<h4>" + devName + "</h4>"
                               + "<span><strong>Major: </strong></span>"
                               + "<span class='label label-info'>"+ devMajor +"</span><br>"
                               + "<span><strong>Skills: </strong></span>"
                               + "<span class='label label-info'>"+ devLangs +"</span><hr>"
                               + "<p class='text-left'>"
                                  + "<strong>Description: </strong>" + devDesc + "<br>"
                               + "</p><br>"
                           + "</center>"
                        + "</div>";

        // Modal footer
        modalFooterHtml = "<div class='modal-footer footer-bg'>"
                          +  "<a href='"+ devLink +"'><button type='button' class='btn btn-success'>Continue</button></a>"
                        + "</div>";

        // Assign html elements for profile modals
        profileModalHtml += "<div class='modal fade' id='" + devModal + "' aria-hidden='true'>"
                              + "<div class='modal-dialog'>"
                                + "<div class='modal-content'>"
                                  + modalHeaderHtml + modalBodyHtml + modalFooterHtml
                                + "</div>"
                              + "</div>"
                            +"</div>";

      }

      // Assign the content to div
      document.querySelector("#profileList").innerHTML = profileCardHtml;
      document.querySelector("#modalList").innerHTML = profileModalHtml;

      /////////////////////////////////////////
      // This is the search function section
      document.querySelector('#searchBtn').addEventListener('click', () => {
        var input = document.getElementById('searchbar').value;
        input=input.toLowerCase();
        
        for (i = 0; i < jsonData.devProfiles.length; i++) {
            console.log("Input: " + input + "/ Dev Name: " + jsonData.devProfiles[i].name.toLowerCase());

            if (jsonData.devProfiles[i].name.toLowerCase().includes(input)) {
              
              var searchedProfile = "<a data-toggle='modal' data-target='#"+ jsonData.devProfiles[i].modal +"'>"
                                    + "<div class='card'>"
                                      + "<img src='" + jsonData.devProfiles[i].imagePath + "' alt='" + jsonData.devProfiles[i].picAlt + "' style='width:300px;height:250px;'>"
                                      + "<h3>" + jsonData.devProfiles[i].name + "</h3>"
                                    + "</div>"  
                                  + "</a>";

              // Clear the main content and display the searched content only
              document.querySelector("#profileList").innerHTML = "";
              document.querySelector("#profileList").innerHTML += searchedProfile;
            }
            
        }
      }) 

      // Refresh page function
      document.querySelector('#refreshBtn').addEventListener('click', () => {
        document.querySelector("#profileList").innerHTML = "";
        document.querySelector("#profileList").innerHTML = profileCardHtml;
      }) 
      /////////////////////////////////////////

      //////////////////////////////////////////////
      // This is the sort function section
      const sortContainer = document.getElementById('sortBtns');

      sortContainer.addEventListener('click', (event) => {
        // Empty Array
        sortedProfileHtml = [];
        
        // Check id
        if(event.target.id === "sortAlphabet"){
          temp.sort(GetSortOrder("name"));
        } 
        if (event.target.id === "sortMajor"){
          temp.sort(GetSortOrder("major"));
        }
        if (event.target.id === "sortGit"){
          temp.sort(GetSortOrder("githubProfile"));
        }
        
        for (var item in temp) {
          // console.log(temp[item]);
          var a = "<a data-toggle='modal' data-target='#"+ temp[item].modal +"'>"
                  + "<div class='card'>"
                    + "<img src='" + temp[item].imagePath + "' alt='" + temp[item].picAlt + "' style='width:300px;height:250px;'>"
                    + "<h3>" + temp[item].name + "</h3>"
                  + "</div>"  
                + "</a>";

          // Push list of profile cards into array
          sortedProfileHtml.push(a);

          document.querySelector("#profileList").innerHTML = "";
          document.querySelector("#profileList").innerHTML += sortedProfileHtml.toString();
        }

      })

      //////////////////////////////////////////////

  }
};
xhttp.open("GET", "../lib/dev-profiles-resources/scripts/devs-data.txt", true);
xhttp.send();


//Sort function
function GetSortOrder(prop){
  return function(a,b){
     if( a[prop].toLowerCase() > b[prop].toLowerCase()){
         return 1;
     }else if( a[prop].toLowerCase() < b[prop].toLowerCase()){
         return -1;
     }
     return 0;
  }
}