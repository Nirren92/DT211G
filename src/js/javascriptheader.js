function show_menu()
{
    var x = document.getElementById("menu_knappen").src;

    if(x.includes("img/cancel.png"))
    {
        document.getElementById("menu_innehall").style.display="none";
        document.getElementById("menu_knappen").src="img/menu.png"
       
    }

    else
    {
        document.getElementById("menu_innehall").style.display="block";
        document.getElementById("menu_knappen").src="img/cancel.png"
        
    }
  
    
   

}