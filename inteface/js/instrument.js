function submit() {
	document.getElementById('message').style.visibility="hidden";	
	surline(document.getElementById('wavelengths'),false);
	surline(document.getElementById('name'),false);  
	if ( document.getElementById('name').value==""){
		document.getElementById('message').innerHTML="Error: Please inform a name";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('name'),true);
	}	
	else if ( document.getElementById('wavelengths').value==""){
		document.getElementById('message').innerHTML="Error: Please inform a wavelength";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('wavelengths'),true);
	}	
	else if ( verifFormat(document.getElementById('wavelengths'))==false){
		document.getElementById('message').innerHTML="Error: Please correct your wavelength";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	// Can't be created while we don't have the liaison between front and back end
	/*
	else if (){
		document.getElementById('message').innerHTML="Error: Instrument already existing";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	*/
	else { 
		document.getElementById('message').innerHTML="Instrument created successfully!";
		document.getElementById('message').style.color="green";
		document.getElementById('message').style.visibility="visible";
		document.getElementById('name').value="";
		document.getElementById('wavelengths').value="";
	}
};

function verifFormat(field){
   var reg=/^[0-9]+\.[0-9]+$/;
   if(!reg.test(field.value)){
      surline(field, true);
      return false;
   }
   else{
      surline(field, false);
      return true;
   }
}

function surline(field, error){
   if(error)
      field.style.backgroundColor = "#fba";
   else
      field.style.backgroundColor = "";
}