// console.log("your linked!");

// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

$("#submit").on("click", function(){ 
//validation
	if($('#name').val() == ""){
		  	$('#alertMsg').html('Please fill in your name');
		 	$('#name').focus(); 
	} else if ($('#photo').val() == ""){
		  	$('#alertMsg').html('Please add a photo');
		 	$('#photo').focus();
	} else if ($('input[name=ques1]:checked', '#q1').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 1');
	} else if ($('input[name=ques2]:checked', '#q2').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 2');
	} else if ($('input[name=ques3]:checked', '#q3').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 3');
	} else if ($('input[name=ques4]:checked', '#q4').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 4');
	} else if ($('input[name=ques5]:checked', '#q5').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 5');
	} else if ($('input[name=ques6]:checked', '#q6').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 6');
	} else if ($('input[name=ques7]:checked', '#q7').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 7');
	} else if ($('input[name=ques8]:checked', '#q8').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 8');
	} else if ($('input[name=ques9]:checked', '#q9').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 9');
	} else if ($('input[name=ques10]:checked', '#q10').val() == undefined ){
		  	$('#alertMsg').html('Please answer Question 10');
		 	
	} else {
	var newApplicant = {
		name: $('#name').val().trim(),
		photo: $('#photo').val().trim(),
		scores: [$('input[name=ques1]:checked', '#q1').val(),
				$('input[name=ques2]:checked', '#q2').val(),	
				$('input[name=ques3]:checked', '#q3').val(),
				$('input[name=ques4]:checked', '#q4').val(),
				$('input[name=ques5]:checked', '#q5').val(),
				$('input[name=ques6]:checked', '#q6').val(),
				$('input[name=ques7]:checked', '#q7').val(),
				$('input[name=ques8]:checked', '#q8').val(),
				$('input[name=ques9]:checked', '#q9').val(),
				$('input[name=ques10]:checked', '#q10').val()
			]
		}

	// Grab the URL of the current webpage
	var currentURL = window.location.origin;
	// AJAX post
	$.post(currentURL + '/api/friends', surveyArray, function(data){
		$("#matchName").text(data.name);
	    $('#matchImg').attr("src", data.photo);
	    //console.log(data);
	 });
	    	
	}
});



