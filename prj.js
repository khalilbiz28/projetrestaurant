function openOnglet(evt , name){
   var i , imbox ,tablinks;
   imbox=document.getElementsByClassName('imbox');
   for(i=0; i<imbox.length;i++){
    imbox[i].style.display = 'none'
   }
   tablinks=document.getElementsByClassName('tablinks');
   for(i=0; i<tablinks.length ; i++){
    tablinks[i].className= tablinks[i].className.replace("active", "");
   }
   document.getElementById(name).style.display ="flex";
   evt.currentTarget.className += " hidden";
}



