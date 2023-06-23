function navBar() {
    let nav = document.getElementById("myLinks");
    let header = document.getElementById("container");
    if (nav.style.display === "block") {
        nav.style.display = "none";
        header.style.gridTemplateRows = "80px 4fr";
    } else {
        nav.style.display = "block";
        header.style.gridTemplateRows = "200px 4fr";
    }
  }

