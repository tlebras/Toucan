var bool;
function submit() {
	bool=false;
	document.getElementById('message').style.visibility="hidden";	
	surline(document.getElementById('wavelengths'),false);
	surline(document.getElementById('name'),false);  
	
$.ajaxSetup({async: false});
    	$.get('http://127.0.0.1:8000/api/v1/instrument?limit=0',
       	 datatreat, 
        'jsonp' // /!\ NOT SURE IF SAFE         
  	  );

	if ( document.getElementById('name').value==""){ //check if the user entered a name if not an error occurs
		document.getElementById('message').innerHTML="Error: Please inform a name";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('name'),true); // the name field is highlighted 
	}	
	else if ( document.getElementById('wavelengths').value==""){ //check if the user entered some wavelenghts if not error
		document.getElementById('message').innerHTML="Error: Please inform a wavelength";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('wavelengths'),true); // the wavelength field in highlighted
	}	
	else if ( verifFormat(document.getElementById('wavelengths'))==false){
		document.getElementById('message').innerHTML="Error: Please correct your wavelength";
		document.getElementById('message').style.color="red"; // if the waveloength isnt in the right format, you got an error 
		document.getElementById('message').style.visibility="visible";
	}
	
	else if (  bool==true ){
		document.getElementById('message').innerHTML="Error: Instrument already existing";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	
	else { //console.log(checkexist(document.getElementById('name').value));
		document.getElementById('message').innerHTML="Instrument created successfully!"; // if everything is ok : success message
		document.getElementById('message').style.color="green";
		document.getElementById('message').style.visibility="visible";
		document.getElementById('name').value="";
		document.getElementById('wavelengths').value="";
	}
};

function verifFormat(field){ // this function define the format you want to use
   var reg=/^[0-9]+\.[0-9]+$/;
   if(!reg.test(field.value)){
      surline(field, true); // if wrong highlight the input in red
      return false;
   }
   else{
      surline(field, false); // light the input in white, normal color
      return true;
   }
}

function surline(field, error){ // the highlighter function
   if(error)
      field.style.backgroundColor = "#fba";
   else
      field.style.backgroundColor = "";
}

/*
function checkexist(field){
	var bool =false;
		
	$.ajaxSetup(async=false);

	for (var j =0; j<tabl.length; j++){
		if (field==tabl[j]){
			bool=true;
		}
		}
return bool;

}(jQuery);*/
function datatreat(data){
		
	for(var i=0; i<data.objects.length; i++){
	console.log(data.objects[i].name);
	if (document.getElementById('name').value==data.objects[i].name)
            	{bool=true;}
		//console.log(tabl);
		
		
            } 
        
		
}
