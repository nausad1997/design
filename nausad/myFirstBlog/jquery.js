
$(document).ready(()=>{

	$("input").hover(function(){

		(this).focus();
		// (this).focusout();
		// alert("hello");
		// $("#navbarDropdown").();

	});

	$("textarea").hover(function(){

		(this).focus();
		// alert("hello");
		// $("#navbarDropdown").();
	});

	$("#navbarDropdown").hover(function(){

		$("#drop").show();


	},

	function(){

		$("#drop").hide();	


   });



});	

