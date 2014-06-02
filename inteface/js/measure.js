function submit() {

	document.getElementById('message').style.visibility="hidden";
    var selectdeploy = document.getElementById("deployment");
	var selecttype = document.getElementById("type");
	var selectwave = document.getElementById("wavelengths");
	surline(document.getElementById('wavelengths'),false);
	surline(document.getElementById('deployment'),false);
	surline(document.getElementById('type'),false);
	if ( selectdeploy.value=="Selection" && selecttype.value=="Selection" && selectwave.value=="Selection"){
		document.getElementById('message').innerHTML="Error: Please at least inform the deployment,the type or the wavelengths";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('wavelengths'),true);
		surline(document.getElementById('deployment'),true);
		surline(document.getElementById('type'),true);
	}
	// cant be tested now - and to be completed
	/* else if {resultat=="undefined"){
		document.getElementById('message').innerHTML="Error: No such result";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	} */
	else { 
		document.getElementById('message').innerHTML="Result found :"; // + the result, It will be treated later
		document.getElementById('message').style.color="green";
		document.getElementById('message').style.visibility="visible";
		document.getElementById('deployment').value="Selection";
		document.getElementById('type').value="Selection";
		document.getElementById('wavelengths').value="Selection";
	}

};

function surline(field, error){
   if(error)
      field.style.backgroundColor = "#fba";
   else
      field.style.backgroundColor = "";
}