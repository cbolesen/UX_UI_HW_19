console.log("Your index.js file is loaded correctly!");
  $(document).ready(function(){
    $(".heroImg").hover(function(){
        alert("Welcome to my work!");
    },
    function(){
      alert("Godbye! Thank you for visiting me!");
    }); 
  });