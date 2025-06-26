/*alert("Bem vindo a minha pagina")
alert("Importante frisar que sou iniciante, então essa pagina ainda está em manutenção")
alert("Então de onde vier, venha em paz, estou aberto a melhoras, qualquer erro ou possível melhora, me informe, deixarei meu contato no rodapé")
alert("Espero salientar dúvidas e ajudar o mínimo que for, meu objetivo é apenas aprendizado, obrigado pela escollha !!!")*/

window.onload = function () {/*------needed to load my code */
 
//DISPLAY MY CONTENT ON element WHEN BUTTON BE CLICKED
var element_info_Tecnologia = document.getElementById("element_window_InfoTech")
var element_mob= document.getElementById("element_window_Mob");
var element_RAM= document.getElementById("element_window_RAM");
var element_PSU= document.getElementById("element_window_PSU");
var element_window_HDSSD = document.getElementById("element_window_HDSSD");
var element_window_case = document.getElementById("element_window_case");
    
var btn_info_tec=document.getElementById("my_btn_title_info_table");
var btn_info_MOB = document.getElementById("btn_MOB_table");
var btn_info_RAM =document.getElementById("btn_RAM_table");
var btn_info_PSU =document.getElementById("btn_PSU");
var btn_info_HDDSSD = document.getElementById("btn_HD_SSD_table");
var btn_info_case = document.getElementById("btn_case_table");

var span_tec_info= document.getElementsByClassName("close_Info_tec")[0];
var span_tec_info_Mob = document.getElementsByClassName("close_Info_tec")[1];
var span_tec_info_RAM = document.getElementsByClassName("close_Info_tec")[2];
var span_tec_info_PSU = document.getElementsByClassName("close_Info_tec")[3];
var span_tec_info_HDDSSD = document.getElementsByClassName("close_Info_tec")[4];
var span_tec_info_case = document.getElementsByClassName("close_Info_tec")[5];


/*var date at end of the page*/
let date__yearEndPage = new Date();



btn_info_tec.onclick = function() {
  element_info_Tecnologia.style.display = "block";
  }
btn_info_MOB.onclick = function() {
  element_mob.style.display = "block";
}
btn_info_RAM.onclick = function() {
  element_RAM.style.display = "block";
}
btn_info_PSU.onclick = function(){
  element_PSU.style.display = "block";
}
btn_info_HDDSSD.onclick = function () {
    element_window_HDSSD.style.display = "block";
}
btn_info_case.onclick = function () {
        element_window_case.style.display = "block";
}
  window.onclick = function(event) {
    if (event.target == element_info_Tecnologia || event.target == element_mob ||
        event.target == element_RAM || event.target == element_PSU ||
        event.target == element_window_HDSSD || event.target == element_window_case) {
      element_info_Tecnologia.style.display = "none";
      element_mob.style.display = "none";
      element_RAM.style.display = "none";
        element_PSU.style.display = "none";
        element_window_HDSSD.style.display = "none";
        element_window_case.style.display = "none";
    }
    
  }


span_tec_info.onclick = function() {
  element_info_Tecnologia.style.display = "none";
  
}

span_tec_info_Mob.onclick = function() {
    element_mob.style.display = "none";

} 
span_tec_info_RAM.onclick = function() {
  element_RAM.style.display = "none";

}  
span_tec_info_PSU.onclick = function() {
  element_PSU.style.display = "none";

}
span_tec_info_HDDSSD.onclick = function () {
    element_window_HDSSD.style.display = "none";
}
span_tec_info_case.onclick = function () {
        element_window_case.style.display = "none";
}
//-----------------------------

//-----Scroll stycky navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav_bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*date year at end page */
document.querySelector('.date--year').textContent = "@" + date__yearEndPage.getFullYear();


/* TIME */

let day = ['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'];

setInterval(function (){
 let date = new Date();
 let x = date.getDay()
 document.getElementById('time').textContent = day[x-1] + ' ' + date.getHours() +':'+('0'+ date.getMinutes()).slice(-2) +':'+ ('0' + date.getSeconds()).slice(-2);

}, 1000);

/* Translate */

    $('.translate-this').click(function() {
        $(this).hide(); // Hide the icon when clicked
        $('#google_translate_element').show(); // Show the dropdown
        $('#global-iccon-').hide();
        $('.close_').show(); 
    });
  
    $(document).click(function(event) {
        if (!$(event.target).closest('.translate-this, #google_translate_element').length) {
            $('#google_translate_element').hide(); // Hide the dropdown
            $('.translate-this').show(); // Show the icon again
             $('.close_').hide();
             
        }
    });
   $(document).click(function(event) {
    if (!$(event.target).closest('.translate-this, #google_translate_element').length) {
           
        $(this).hide(); // Hide the icon when clicked
        $('#global-iccon-').show();
    }
    });

    
}