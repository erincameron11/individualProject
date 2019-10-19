// INDIVIDUAL PROJECT

// DROPDOWN MENU HAMBURGER

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function dropdwnFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }


//   DROPDOWN X |||
// function xFunction(x) {
//     x.classList.toggle("change");
//   }


// CONTACT FORM - RETURN STATEMENT 
// function validate() {
//   if (document.contactForm.name.value == "") {
//     alert("Please enter your name");
//     document.contactForm.name.focus();
//     return false;
//   }  
//   if(document.contactForm.email.value == "") {
//     alert("Please enter an email address");
//     document.contactForm.email.focus();
//     return false;
//   }
//   return(true);
// }


function validate() {
      if(document.contactForm.name.value == "") {
          alert("Please provide your name!");
          document.contactForm.name.focus();
          return false;
      }
      if(document.contactForm.email.value == "") {
          alert("Please enter an email address!");
          document.contactForm.email.focus();
          return false;
      }
      if(document.contactForm.message.value == "") {
            alert("Please enter a message!");
            document.contactForm.message.focus();
            return false;
      }
      return(true);
  }