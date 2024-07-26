<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

function toggleContent(element) {
	var content = element.nextElementSibling;
	var symbol = element.querySelector("span:last-child");
	content.classList.toggle("open");
	if (content.classList.contains("open")) {
		symbol.innerHTML = "−";
	} else {
		symbol.innerHTML = "+";
	}
}</script>
<!-- end Simple Custom CSS and JS -->
