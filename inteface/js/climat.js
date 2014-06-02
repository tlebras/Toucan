function submit() {
	document.getElementById('message').style.visibility="hidden";
	var fileInput = document.querySelector('#climat_file');
	var reader = new FileReader();	
	if ( fileInput.files[0]== undefined){
		document.getElementById('message').innerHTML="Error: no climat file found";
		document.getElementById('message').style.color="red";
		document.getElementById('message').style.visibility="visible";
	}
	else{ 
		var climatname= fileInput.files[0].name;
		var climattest = climatname.split('.');
		if (climattest[(climattest.length)-1]!='txt' ){ // i dont know what extension it have to test so I put txt as default
			document.getElementById('message').innerHTML="Error: climat file : Wrong type";
			document.getElementById('message').style.color="red";
			document.getElementById('message').style.visibility="visible";
		}
		
		else {		
			document.getElementById('message').innerHTML="File uploaded successfully!";
			document.getElementById('message').style.color="green";
			document.getElementById('message').style.visibility="visible";
			$("#climat_file").val('');    
		}
	}		
};
