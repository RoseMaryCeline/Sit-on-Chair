document.addEventListener("DOMContentLoaded", function(){
  var prevButton= document.querySelector(".arrow1[href]");
  var nextButton= document.querySelector(".arrow2[href]");
  var pictures= document.querySelectorAll(".slider li");
  var currentVisiblePicture= 0;

  //1- slider with chairs
  pictures[currentVisiblePicture].classList.add("visible");

  prevButton.addEventListener("click", function(event){
    console.log("Click in prev button");
    pictures[currentVisiblePicture].classList.remove("visible");
    currentVisiblePicture--;
    if(currentVisiblePicture <0){
      currentVisiblePicture = pictures.length - 1;
    }
    pictures[currentVisiblePicture].classList.add("visible");
  });

  nextButton.addEventListener("click", function(event){
    console.log("click in next");
    pictures[currentVisiblePicture].classList.remove("visible");
    currentVisiblePicture++;//daje nastepnemu
    if(currentVisiblePicture > (pictures.length -1)){
      currentVisiblePicture= 0;
    }
    pictures[currentVisiblePicture].classList.add("visible");
  });

// 2- dissapearing content on images
  var hide= document.querySelectorAll("td.container");
  var textOnPicture= document.querySelectorAll(".onPicture");

  for(var i=0; i<hide.length; i++){
    hide[i].addEventListener("mouseenter", function(event){
      var onPicture=event.currentTarget.getElementsByClassName('onPicture')[0];
      onPicture.style.visibility="hidden";
    });
    hide[i].addEventListener("mouseleave", function(event){
      var onPicture=event.currentTarget.getElementsByClassName('onPicture')[0];
      onPicture.style.visibility="visible";
    });
  }

  //KOD do zadania z formularzy

    // var formToOrder=document.querySelector(".orderingForm");
    //
    // var typeOfChairs=document.getElementById("#typeOfChairs");
    // var chair=typeOfChairs.children;
    //
    // console.log("sjgdcbjsdb");
    //
    // var colorOfChairs=document.getElementById("#color");
    // var colorChair=colorOfChairs.children;
    //
    // var textileOfChairs=document.getElementById("#textile");
    // var textile=textileOfChairs.children;


});
