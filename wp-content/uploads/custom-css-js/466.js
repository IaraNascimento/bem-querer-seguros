<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const imageUrlList = [
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Unimed_box_logo.svg_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Amil.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Seguros-Unimed.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Sulamerica.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/bradesco-saude-logo-84BBE89C87-seeklogo.com_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Notredame.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/porto-seguro-logo-1-3.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/golden-cross-logo-conteudo.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Plamer.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Mapfre.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Liberty.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Assim.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/logo-tokio-marine-seguradora-1024-e1722867121862.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Allianz.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/bradesco-seguros-logo-1-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/icatu-seguros-logo-0.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Logo_MAG_Seguros.svg_.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/logo-odontoprev.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Logo-Amil-Dental.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Sulamerica-odonto-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/HDI-1.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Azul-seguros.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Aliro.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/Rodobens.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/sompo-seguros.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/suhai-seguradora.png",
	"http://localhost/bem-querer-seguros/wp-content/uploads/2024/08/images.png",
];
	
let imgById = document.getElementById('partners-img');
	
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

let index = 0;
let interval = 4000;
			
moveImage(imgById, '0', 1);
changeImage(imgById, imageUrlList, index);

setInterval(() => {
			
	setTimeout(() => {
		moveImage(imgById, '-320px', 0);
	}, 2000);

	setTimeout(() => {
		changeImage(imgById, imageUrlList, index);
		moveImage(imgById, '320px', 0);
	}, 2500);

	setTimeout(() => {
		moveImage(imgById, '0', 1);
	}, 3000);

	index = changeIndex(index, imageUrlList.length);

}, 5000);</script>
<!-- end Simple Custom CSS and JS -->
