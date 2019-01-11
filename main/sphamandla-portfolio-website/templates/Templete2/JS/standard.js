var accordion = document.getElementsByClassName("accordion");
var panels;

for (panels = 0; panels< accordion.length; panels++) {
 accordion[panels].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling; //hidden div with content
   if (panel.style.maxHeight){
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }
 });
}
document.getElementsByClassName('className')
