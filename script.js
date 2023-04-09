/* This file is used to add interactivity onto your website */


function toggleViewMode() {
      var elem = document.body; 
      elem.classList.toggle("light-mode");
      var h2Elements = document.getElementsByTagName("h2");
      for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].classList.toggle("light-mode-h2");
      }

      var textElements = document.getElementsByTagName("p"); 
      for (let i = 0; i < textElements.length; i++) {
        textElements[i].classList.toggle("light-mode-p");
      }

      var navContain = document.getElementsByClassName("nav-container");
      console.log(navContain);
      navContain[0].classList.toggle("nav-bar-light"); 

      var navBarButtons = document.getElementsByTagName("button")

      for (let i = 0; i < navBarButtons.length; i++) {
        navBarButtons[i].classList.toggle("nav-bar-button-light")
      }

      var aElems = document.getElementsByTagName("a");  
      for (let i = 0; i < aElems.length; i++) {
        aElems[i].classList.toggle("light-a");
      }

      var projectCards = document.getElementsByClassName("project-card")
      for (let i = 0; i < projectCards.length; i++) {
        projectCards[i].classList.toggle("project-card-light"); 
      }

      var lineBreaks = document.getElementsByClassName("main-container");
      console.log(lineBreaks); 
      
    }