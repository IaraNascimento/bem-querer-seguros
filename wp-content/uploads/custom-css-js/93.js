<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

var msv = 999;

function changeMSV() {
	var moduleMSV = msv % 3;
	switch (moduleMSV) {
		case 2:
			document.getElementById("msv-title").innerText = "Nossos valores";
			document.getElementById("msv-body").innerText = "Respeito\nIntegridade\nAtendimento\nExperiência\nColaboração\nFoco em solução";
			document.getElementById("msv-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Valores.png";
			document.getElementById("msv-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Valores.png";
			document.getElementById("msv-img").classList = "wp-image-97";
			break;
		case 1:
			document.getElementById("msv-title").innerText = "Nossa visão";
			document.getElementById("msv-body").innerText = "Ser a principal referência em soluções financeiras, de saúde e segurança, ampliando nossa atuação para todos os municípios do Sul-fluminense junto aos nossos principais parceiros.";
			document.getElementById("msv-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Visao.png";
			document.getElementById("msv-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Visao.png";
			document.getElementById("msv-img").classList = "wp-image-97";
			break;
		case 0:
		default:
			document.getElementById("msv-title").innerText = "Nossa missão";
			document.getElementById("msv-body").innerText = "Ser uma facilitadora no dia-a-dia das pessoas, através de assessoria completa em segurança, saúde e organização financeira, por meio de produtos de excelência no mercado.";
			document.getElementById("msv-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Missao.png";
			document.getElementById("msv-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Missao.png";
			document.getElementById("msv-img").classList = "wp-image-87";

	}
}

function previousMSV() {
	msv--;
	changeMSV();
}

function nextMSV() {
  	msv++;
	changeMSV();
}


document.getElementById("previous-msv").addEventListener("click", previousMSV);
document.getElementById("next-msv").addEventListener("click", nextMSV);</script>
<!-- end Simple Custom CSS and JS -->
