let menu_btn = document.querySelector("#menu-btn");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector(".my-container");

menu_btn.addEventListener("click", () => {
	sidebar.classList.toggle("active-nav");
	container.classList.toggle("active-cont");
});

window.addEventListener("resize", function (event) {
	if (document.body.clientWidth <= 495) {
		sidebar.classList.remove("active-nav");
		container.classList.remove("active-cont");
	}
	else if (document.body.clientWidth > 495) {
		sidebar.classList.add("active-nav");
		container.classList.add("active-cont");
	}
})