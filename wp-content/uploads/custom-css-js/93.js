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

function checkScroll(index) {
	const upperHeader = document.getElementsByClassName("main-header-bar")[index];
	const headerLogo = document.getElementsByClassName("custom-logo")[index];
	const aboveHeader = document.getElementsByClassName("ast-above-header-bar")[index];

	const textHeader = document.querySelectorAll('#ast-hf-menu-1 li a');
	const linkHeader = document.querySelectorAll(".ast-header-social-1-wrap div a span svg path");
	const sandwichMenu = document.querySelectorAll(".ast-mobile-svg");
	
	
	if (window.scrollY < 48) {
		upperHeader.style.backgroundColor = "transparent";
		headerLogo.src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/cropped-Marca-BemQuerer-Seguros-Laranja.png";
		headerLogo.srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/cropped-Marca-BemQuerer-Seguros-Laranja.png";
		aboveHeader.style.display = "block";
		
		textHeader.forEach(sessionButton => {
			sessionButton.style.color = "var(--orange)";
		});
		
		linkHeader.forEach(linkButton => {
			linkButton.style.fill = 'var(--orange)';
		});
		
		sandwichMenu.forEach(item => {
			item.style.fill = 'var(--orange)';
		});
		
	} else {
		upperHeader.style.backgroundColor = "var(--orange)";
		headerLogo.src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/Marca-BemQuerer-Seguros-Branca.png";
		headerLogo.srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/Marca-BemQuerer-Seguros-Branca.png";
		aboveHeader.style.display = "none";
		
		textHeader.forEach(sessionButton => {
			sessionButton.style.color = "white";
		});
		
		linkHeader.forEach(linkButton => {
			linkButton.style.fill = 'white';
		});
		
		sandwichMenu.forEach(item => {
			item.style.fill = 'white';
		});
		
	}
}

window.addEventListener("scroll", () => checkScroll(0));
window.addEventListener("scroll", () => checkScroll(1));
checkScroll(0);
checkScroll(1);

document.getElementById("previous-msv").addEventListener("click", previousMSV);
document.getElementById("next-msv").addEventListener("click", nextMSV);


var assist = 14000;

function changeAssist() {
	var moduleAssist = assist % 14;
	switch (moduleAssist) {
		case 13:
			document.getElementById("assist-body").innerText = "Todas as localidades: 0800 026 0909";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/MAG.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/MAG.png";
			break;
		case 12:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4002-0040\nDemais Localidades: 0800 285 3000";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Icatu.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Icatu.png";
			break;
		case 11:
			document.getElementById("assist-body").innerText = "SP e RJ: 3003-0335\nDemais Localidades: 0800 784 2410\nTroca de Pneu / Guincho / Aux Mecânco: 0800 327 8424";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/SUHAI.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/SUHAI.png";
			break;
		case 10:
			document.getElementById("assist-body").innerText = "Todas as localidades: 0800 318 6546";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Tokio-marine.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Tokio-marine.png";
			break;
		case 9:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4090-1012\nDemais Localidades: 0800 777 1012";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Sulamerica-1.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Sulamerica-1.png";
			break;
		case 8:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 3156-2990\nDemais Localidades: 0800 771 9119";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/SOMPO.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/SOMPO.png";
			break;
		case 7:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4004-76786\nDemais Localidades: 0800 703 0203";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Porto-Seguro.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Porto-Seguro.png";
			break;
		case 6:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4002-1000\nDemais Localidades: 0800 775 1000";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/MAPFRE-1.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/MAPFRE-1.png";
			break;
		case 5:
			document.getElementById("assist-body").innerText = "Todas as localidades: 0800 701 4120";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Liberty-1.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Liberty-1.png";
			break;
		case 4:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 3003-5390\nDemais Localidades: 0800 434 4340";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/HDI.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/HDI.png";
			break;
		case 3:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4004-2757\nDemais Localidades: 0800 701 2757";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Bradesco.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Bradesco.png";
			break;
		case 2:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4004-3700\nDemais Localidades: 0800 703 0203";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Azul.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Azul.png";
			break;
		case 1:
			document.getElementById("assist-body").innerText = "Capital/Metropolitana: 4090-1110\nOutras localidades: 0800 777 7243";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Allianz-1.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Allianz-1.png";
			break;
		case 0:
		default:
			document.getElementById("assist-body").innerText = "Todas as localidades: 0800 770 1318";
			document.getElementById("assist-img").src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Aliro-1.png";
			document.getElementById("assist-img").srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/07/Aliro-1.png";

	}
}

function previousAssist() {
	assist--;
	changeAssist();
}

function nextAssist() {
  	assist++;
	changeAssist();
}

document.getElementById("previous-assist").addEventListener("click", previousAssist);
document.getElementById("next-assist").addEventListener("click", nextAssist);</script>
<!-- end Simple Custom CSS and JS -->
