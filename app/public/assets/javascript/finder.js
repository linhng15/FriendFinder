console.log("your linked!");

// // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
//     // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
//     // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
//     // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

//     $(".submit").on("click", function(event) {
//       event.preventDefault();

//       // Here we grab the form elements
//       var newApplicant = {
//         Name: $("#name").val().trim(),
//         Photo: $("#photo").val().trim(),
//         Score: $(".chosen-select").val().trim()
//       };

//       console.log(newApplicant);

//       // This line is the magic. It"s very similar to the standard ajax function we used.
//       // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
//       // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
//       // depending on if a tables is available or not.

//       $.post("/api/friends", newApplicant,
//         function(data) {
//         	console.log(data);
//           // Clear the form when submitting
//           // Name: $("#name").val().trim(),
//           // Photo: $("#photo").val().trim(),
//           // Score: $(".chosen-select").val().trim()

//         });

//     });
