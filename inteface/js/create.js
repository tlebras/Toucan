var tabfield;
function submit() {
	document.getElementById('message').style.visibility="hidden";
	var fileInput = document.querySelector('#image_file');
    var reader = new FileReader();
	surline(document.getElementById('instrument'),false);
	surline(document.getElementById('name'),false);
	surline(document.getElementById('regionname'),false);
	surline(document.getElementById('regioncoords'),false);    

	if ( document.getElementById('name').value==""){
		document.getElementById('message').innerHTML="Error: Please inform the name of your file";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('name'),true);
	}
	else if ( document.getElementById('instrument').value=="Selection"){
		document.getElementById('message').innerHTML="Error: Please inform the instrument";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('instrument'),true);
	}
	else if ( document.getElementById('regionname').value==""){
		document.getElementById('message').innerHTML="Error: Please inform the region name";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('regionname'),true);
	}
	else if ( document.getElementById('regioncoords').value==""){
		document.getElementById('message').innerHTML="Error: Please inform the region coords";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		surline(document.getElementById('regioncoords'),true);
	}
	else if ( verifFormat(document.getElementById('regioncoords'))==false){
		document.getElementById('message').innerHTML="Error: Please correct the region coords";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else if ( verifFormat(document.getElementById('regioncoords'))==false){
		document.getElementById('message').innerHTML="Error: Please correct the region coords";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else if(checklatlon(document.getElementById('regioncoords'))){
		surline(document.getElementById('regioncoords'),true);
		if(tabfield[0]>tabfield[2]){
			document.getElementById('message').innerHTML="Error: Please correct your latitudes";
			document.getElementById('message').style.color="red";
			document.getElementById('message').style.visibility="visible";
		}
		else{
		document.getElementById('message').innerHTML="Error: Please correct your longitudes";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
		}
	}
	else if ( fileInput.files[0]== undefined){
		document.getElementById('message').innerHTML="Error: no image file found";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else{
		var imagename= fileInput.files[0].name;
		var imagetest=imagename.split('.');
		if (imagetest[(imagetest.length)-1]!='png' && imagetest[(imagetest.length)-1]!='tif' && imagetest[(imagetest.length)-1]!='jpg' && imagetest[(imagetest.length)-1]!='tiff' && imagetest[(imagetest.length)-1]!='jpeg' ){
			document.getElementById('message').innerHTML="Error: image file : Wrong type";
			document.getElementById('message').style.color="red";
			document.getElementById('message').style.visibility="visible";
		}	
		else{
			document.getElementById('message').innerHTML="File uploaded successfully!";
			document.getElementById('message').style.color="green";
			document.getElementById('message').style.visibility="visible";
			document.getElementById('name').value="";
			document.getElementById('regionname').value="";
			document.getElementById('regioncoords').value="";
			document.getElementById('instrument').value="Selection";
			$("#image_file").val('');
		}
	}

};

function verifFormat(field)
{
   var reg=/^\[[0-9]+\.[0-9]+\,[0-9]+\.[0-9]+\,[0-9]+\.[0-9]+\,[0-9]+\.[0-9]+\]$/;
   if(!reg.test(field.value)){
      surline(field, true);
      return false;
   }
   else{
      surline(field, false);
      return true;
   }
}
function checklatlon(field)
{
    var reg=/\[|\]/gi;
	var fieldformated = field.value.replace(reg,"");
    tabfield=fieldformated.split(",");
	if(parseFloat(tabfield[0])>parseFloat(tabfield[2]) || parseFloat(tabfield[1])>parseFloat(tabfield[3])){
		return true;
	}
	else{
		return false;
	}
	
}

function surline(field, error)
{
   if(error)
      field.style.backgroundColor = "#fba";
   else
      field.style.backgroundColor = "";
}