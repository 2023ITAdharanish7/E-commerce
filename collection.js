var search=document.querySelector(".search")

var Allimage=document.querySelector(".Allcollectionimage")


var oneimage=Allimage.querySelectorAll("div")
console.log(oneimage);

var sidenav = document.querySelector(".side-navbar")

function showNavbar(){
sidenav.style.left = "0%"
}

function closeNavbar(){
sidenav.style.left = "-60%"
}


search.addEventListener("keyup",function()
    {
        var onclick = event.target.value.toUpperCase()

        for(var count=0; count<oneimage.length;count=count+1){

            var produtname = oneimage[count].querySelector("p").textContent


            if(produtname.toUpperCase().indexOf(onclick)<0){
                oneimage[count].style.display="none"
            }
            else{
                oneimage[count].style.display="block"
            }
        }



    }

)