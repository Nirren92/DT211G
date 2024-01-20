
const imageUrl_cancel = new URL(
    '../img/cancel.png',
    import.meta.url
  );

  const imageUrl_open = new URL(
    '../img/menu.png',
    import.meta.url
  );



function show_menu()
{
   


    if(document.getElementById("menu_knappen").src.includes(imageUrl_cancel))
    {
        
        document.getElementById("menu_innehall").style.display="none";
        document.getElementById("menu_knappen").src=imageUrl_open;
       
    }

    else
    {
        document.getElementById("menu_innehall").style.display="block";
        document.getElementById("menu_knappen").src=imageUrl_cancel;
        
    }
  
    
    const dynamicImage = document.getElementById('menu_knappen');

    // Sätt den dynamiska sökvägen till bilden
    const imagePath = 'img/cancel.png';
    dynamicImage.src = imagePath;

}