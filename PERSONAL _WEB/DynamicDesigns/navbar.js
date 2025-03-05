fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    let navbar_links = document.querySelectorAll("#navbar-container a");

    let activeLink = localStorage.getItem("activeNavLink");

    navbar_links.forEach((link) => {
        if (link.getAttribute("href") === activeLink) {
            link.classList.add("clicked"); // Apply stored highlight
        }

        link.addEventListener("click", function () {
            navbar_links.forEach((l) => l.classList.remove("clicked"));

            this.classList.add("clicked");

            localStorage.setItem("activeNavLink", this.getAttribute("href"));
        });
    });


    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");

        if (window.scrollY >25) {
            navbar.classList.add("scrolled");
        } else{
            navbar.classList.remove("scrolled");
        }
    });
});
