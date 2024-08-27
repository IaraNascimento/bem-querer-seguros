< !--start Simple Custom CSS and JS-- >
<script type="text/javascript">
 

function fixImage(index) {
	if (screen.width > 544) {
		var image1Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/08/Plano-de-Saude.png";
		var image2Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/07/Consorcio.png";
		var image3Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/08/Seguro-Auto-paisagem.png";
	} else {
		var image1Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/08/Foto-Plano-de-Saude.jpg";
		var image2Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/08/Foto-Consorcio.jpg";
		var image3Url = "https://www.bemquererseguros.com/wp-content/uploads/2024/08/Foto-Seguro-Auto.jpg";
	}
	
	var image1 = document.getElementsByClassName("soliloquy-image-1")[index];
	var image2 = document.getElementsByClassName("soliloquy-image-2")[index];
	var image3 = document.getElementsByClassName("soliloquy-image-3")[index];
	
	image1.src = image1Url;
	image1.srcset = image1Url;
	image2.src = image2Url;
	image2.srcset = image2Url;
	image3.src = image3Url;
	image3.srcset = image3Url;
}

fixImage(0);
fixImage(1);</script>
<!--end Simple Custom CSS and JS-- >
