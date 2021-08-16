menu_list_array = ["Veg Margherita Pizza","Plain Cheese Pizza","Pepperoni Pizza","Meatlovers Special Pizza","Sausage Pizza"];


function getmenu(){
var htmldata;
htmldata = "<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata = htmldata + menu_list_array[1] + '<br>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort(); 
htmldata="";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'div class="card">'
    +'<img src="images/pizzaImg.png">'
    + menu_list_array[i] + '</div>'
}

}
htmldata = htmldata+"</section>"
document.getElementsById("display_addedmenu").innerHTML = htmldata;

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}