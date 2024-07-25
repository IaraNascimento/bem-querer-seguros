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
	console.log(index);

	const upperHeader = document.getElementsByClassName("main-header-bar")[index];
	console.log(upperHeader);
	const headerLogo = document.getElementsByClassName("custom-logo")[index];
	const aboveHeader = document.getElementsByClassName("ast-above-header-bar")[index];

	const textHeader = document.querySelectorAll('#ast-hf-menu-1 li a');
	const linkHeader = document.querySelectorAll(".ast-header-social-1-wrap div a span svg path");

	
	if (window.scrollY < 48) {
		console.log(upperHeader);
		upperHeader.style.backgroundColor = "transparent";
		headerLogo.src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/cropped-Marca-BemQuerer-Seguros-Laranja.png";
		headerLogo.srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/cropped-Marca-BemQuerer-Seguros-Laranja.png";
		aboveHeader.style.display = "block";
		
		textHeader.forEach(sessionButton => {
			sessionButton.style.color = "var(--orange)";
		})
		linkHeader.forEach(linkButton => {
			linkButton.setAttribute('fill', 'var(--orange)');
		})
	} else {
		console.log(upperHeader);
		upperHeader.style.backgroundColor = "var(--orange)";
		headerLogo.src = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/Marca-BemQuerer-Seguros-Branca.png";
		headerLogo.srcset = "http://localhost/bem-querer-seguros/wp-content/uploads/2024/06/Marca-BemQuerer-Seguros-Branca.png";
		aboveHeader.style.display = "none";
		
		textHeader.forEach(sessionButton => {
			sessionButton.style.color = "white";
		})
		linkHeader.forEach(linkButton => {
			linkButton.setAttribute('fill', 'white');
		})
	}
}

window.addEventListener("scroll", () => checkScroll(0));
window.addEventListener("scroll", () => checkScroll(1));
checkScroll(0);
checkScroll(1);

document.getElementById("previous-msv").addEventListener("click", previousMSV);
document.getElementById("next-msv").addEventListener("click", nextMSV);</script>
<!-- end Simple Custom CSS and JS -->
