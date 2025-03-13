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
            if (window.scrollY > 25) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

        const navbarContainer = document.getElementById("navbar-container");
        navbarContainer.innerHTML = `
            <nav class="navbar">
                <div class="logo">Franklin Bu</div>
                <div class="hamburger-menu" id="hamburger-menu">
                    &#9776;
                </div>
                <div class="nav-links" id="nav-links">
                    <a href="index.html">Home</a>
                    <a href="Projects.html">Projects</a>
                    <a href="AboutMe.html">About Me</a>

                </div>
            </nav>
        `;
    
        const hamburgerMenu = document.getElementById("hamburger-menu");
        const navLinks = document.getElementById("nav-links");
    
        hamburgerMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburgerMenu.classList.toggle("open");
        });


    })
    .catch(error => console.error("Error loading navbar:", error));
