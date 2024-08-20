<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const healthImageUrlList = [
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Unimed_box_logo.svg_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Amil.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Seguros-Unimed.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Sulamerica.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/bradesco-saude-logo-84BBE89C87-seeklogo.com_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Notredame.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/golden-cross-logo-conteudo.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Plamer.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Assim.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/logo-odontoprev.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Logo-Amil-Dental.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Sulamerica-odonto-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/porto-seguro-logo-1-3.png",
];

const consortiumImageUrlList = [
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Rodobens.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/porto-seguro-logo-1-3.png",
];

const securityImageUrlList = [
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Sulamerica.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/porto-seguro-logo-1-3.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/logo-tokio-marine-seguradora-1024-e1722867121862.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/bradesco-seguros-logo-1-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/icatu-seguros-logo-0.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Logo_MAG_Seguros.svg_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Azul-seguros.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/sompo-seguros.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/suhai-seguradora.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Liberty.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/HDI-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Aliro.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Allianz.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Mapfre.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/images.png",
]
	
let healthImgById = document.getElementById('health-partners-img');
let securityImgById = document.getElementById('security-partners-img');
let consortiumImgById = document.getElementById('consortium-partners-img');
	
function moveImage(img, position, opacity) {
	img.style.marginLeft = position;
	img.style.opacity = opacity;
}

function changeImage(img, list, index) {
	img.src = list[index];
}

function changeIndex(current, size) {
	if (current < size -1) {
		return ++current
	}
	return 0;
}

let indexHealth = 0;
let indexSecurity = 0;
let indexConsortium = 0;
let interval = 4000;
			
moveImage(healthImgById, '0', 1);
moveImage(securityImgById, '0', 1);
moveImage(consortiumImgById, '0', 1);

changeImage(healthImgById, healthImageUrlList, indexHealth);
changeImage(securityImgById, securityImageUrlList, indexSecurity);
changeImage(consortiumImgById, consortiumImageUrlList, indexConsortium);

setInterval(() => {
			
	setTimeout(() => {
		moveImage(healthImgById, '-320px', 0);
		moveImage(securityImgById, '-320px', 0);
		moveImage(consortiumImgById, '-320px', 0);
	}, 2000);

	setTimeout(() => {
		changeImage(healthImgById, healthImageUrlList, indexHealth);
		moveImage(healthImgById, '320px', 0);

		changeImage(securityImgById, securityImageUrlList, indexSecurity);
		moveImage(securityImgById, '320px', 0);

    changeImage(consortiumImgById, consortiumImageUrlList, indexConsortium);
		moveImage(consortiumImgById, '320px', 0);
	}, 2500);

	setTimeout(() => {
		moveImage(healthImgById, '0', 1);
		moveImage(securityImgById, '0', 1);
		moveImage(consortiumImgById, '0', 1);
	}, 3000);

	indexHealth = changeIndex(indexHealth, healthImageUrlList.length);
	indexSecurity = changeIndex(indexSecurity, securityImageUrlList.length);
	indexConsortium = changeIndex(indexConsortium, consortiumImageUrlList.length);

}, 5000);</script>
<!-- end Simple Custom CSS and JS -->
