function submit() {
	document.getElementById('message').style.visibility="hidden"; 	
	var topleftlat = document.getElementById("topleftlat");
	var topleftlon = document.getElementById("topleftlon");
	var botrightlat = document.getElementById("botrightlat");
	var botrightlon = document.getElementById("botrightlon");
	surline(document.getElementById('topleftlat'),false);
	surline(document.getElementById('topleftlon'),false);
	surline(document.getElementById('botrightlat'),false);
	surline(document.getElementById('botrightlon'),false);
		
	if ( topleftlat.value=="" && topleftlon.value=="" && botrightlat.value=="" && botrightlon.value==""){
		document.getElementById('message').innerHTML="Error: Please inform at least one field";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('topleftlat'),true);
		surline(document.getElementById('topleftlon'),true);
		surline(document.getElementById('botrightlat'),true);
		surline(document.getElementById('botrightlon'),true);
	}
	// cant be tested now
	/* else if {resultat=="undefined"){
	document.getElementById('message').innerHTML="Error: No such result";
	document.getElementById('message').style.color="red";
	document.getElementById('message').style.visibility="visible";
	} */
	else if ( verifFormat(document.getElementById('topleftlat'))==false || verifFormat(document.getElementById('topleftlon'))==false || verifFormat(document.getElementById('botrightlat'))==false || verifFormat(document.getElementById('botrightlon'))==false){
		document.getElementById('message').innerHTML="Error: Please correct the region coords";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else if ( topleftlat.value!="" &&  botrightlat.value!="" && botrightlat.value<topleftlat.value){
		document.getElementById('message').innerHTML="Error: Please correct your latitudes";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('topleftlat'),true);
		surline(document.getElementById('botrightlat'),true);
	}
	else if ( topleftlon.value!="" &&  botrightlon.value!="" && botrightlon.value<topleftlon.value){
		document.getElementById('message').innerHTML="Error: Please correct your longitudes";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('topleftlon'),true);
		surline(document.getElementById('botrightlon'),true);
	}
	else { 
	document.getElementById('message').innerHTML="Result found :"; // + the result, It will be treated later
	document.getElementById('message').style.color="green";
	document.getElementById('message').style.visibility="visible";
	document.getElementById('topleftlat').value="";
	document.getElementById('topleftlon').value="";
	document.getElementById('botrightlat').value="";
	document.getElementById('botrightlon').value="";
	}
		
};
function verifFormat(field)
{
   var reg=/^[0-9]+\.[0-9]+$/;
   if(!reg.test(field.value) && field.value != ""){
      surline(field, true);
      return false;
   }
   else{
      surline(field, false);
      return true;
   }
}

function surline(field, error)
{
   if(error)
      field.style.backgroundColor = "#fba";
   else
      field.style.backgroundColor = "";
}