var Typed = new Typed(".multi-text",{
    strings : ["Coder","Vloger","Designer"],
    loop :true,
    typeSpeed :100,
    backSpeed : 80,
    backDelay : 1500,
    });


    let icon = document.getElementById("dark-moon");
    let splash = document.getElementById("splash");
    let myPicture = document.getElementById("my-picture");
    let imagesDrak = document.querySelectorAll(".imgbox img");

    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")){
            icon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
            splash.src = "./images/black-purple.jpg";
            myPicture.src = "./images/black-me.jpg";

                imagesDrak[0].style.mixBlendMode = "lighten";
                imagesDrak[1].style.mixBlendMode = "lighten";
                imagesDrak[1].style.right = "80px";

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                    } else {
                        imagesDrak[1].style.right = "99px";
                    }
                  }
                  
                  var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes

        } else {
            icon.innerHTML = `<i class="fa-regular fa-moon"></i>`;
            splash.src = "./images/comhiclipartifata.jpg";
            myPicture.src = "./images/me-mountian2kk.jpg";

                imagesDrak[0].style.mixBlendMode = "darken";
                imagesDrak[1].style.mixBlendMode = "darken";


                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                        // splash.style.cssText = "top: -109px;left: 100px;width: 200%;"

                    } else {
                        imagesDrak[1].style.right = "-200px";
                    }
                  }
                  
                  var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes
        };

    }
