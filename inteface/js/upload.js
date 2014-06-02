function submit() {
	document.getElementById('message').style.visibility="hidden";
	var fileInput = document.querySelector('#data_file');
	var fileInput2 = document.querySelector('#image_file');
	var reader = new FileReader();	
	if ( fileInput.files[0]== undefined){
		document.getElementById('message').innerHTML="Error: no data file found";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else if ( fileInput2.files[0]== undefined){
		document.getElementById('message').innerHTML="Error: no image file found";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}	
	else{ 
		var jsonname= fileInput.files[0].name;
		var jsontest = jsonname.split('.');
		var imagename= fileInput2.files[0].name;
		var imagetest=imagename.split('.');
		if (jsontest[(jsontest.length)-1]!='netCDF' || jsontest[(jsontest.length)-1]!='N1' || jsontest[(jsontest.length)-1]!='HDF'){
			document.getElementById('message').innerHTML="Error: Data file : Wrong type";
			document.getElementById('message').style.color="red";
			document.getElementById('message').style.visibility="visible";
		}
		else if (imagetest[(imagetest.length)-1]!='png' && imagetest[(imagetest.length)-1]!='tif' && imagetest[(imagetest.length)-1]!='jpg' && imagetest[(imagetest.length)-1]!='tiff' && imagetest[(imagetest.length)-1]!='jpeg' ){
			document.getElementById('message').innerHTML="Error: image file : Wrong type";
			document.getElementById('message').style.color="red";
			document.getElementById('message').style.visibility="visible";
		}
		else {		
			document.getElementById('message').innerHTML="File uploaded successfully!";
			document.getElementById('message').style.color="green";
			document.getElementById('message').style.visibility="visible";
			$("#image_file").val('');
			$("#json_file").val('');    
		}
	}		
};


