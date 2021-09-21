let arrow = document.querySelectorAll(".arrow");
let sidebarBtn = document.querySelector(".bx-menu");
let sidebar = document.querySelector(".sidebar");
let IncreaseSideFont = document.querySelector("li i");
let zoom = document.querySelectorAll(".zoom");
let menuToggler = document.querySelector(".hamburger-menu img");
let logoDyna = document.querySelector(".brand-image");
let hamburgerBackground = document.querySelector(".hamburger-menu");
let sideBox = document.querySelector(".nav_links li");
let homePaddingL = document.querySelector(".home-section");

console.log(arrow);
arrow.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        console.log(e.target.parentElement.parentElement)
         let arrowParent = e.target.parentElement.parentElement.parentElement;
         arrowParent.classList.toggle("showMenu");
    });
});
menuToggler.addEventListener("click",()=>{
    sidebar.classList.toggle("close");

   
    if(sidebar.classList.contains("close")){
    // console.log(sidebar.classList.contains("close"))
        // IncreaseSideFont.style.fontSize="2.2rem";
        // logoDyna.classList.add("dynamic-background-changer");
        // hamburgerBackground.classList.add("dynamic-background-changer")
        logoDyna.classList.toggle("dynamic-background-changer")
        console.log("logo bg " + logoDyna.classList);
        zoom.forEach((s)=>{
         
            s.style.height="30px";
            s.style.width="30px"
        });
        
        console.log("done");
    }
    else{

        logoDyna.classList.add("dynamic-background-changer");
        hamburgerBackground.classList.add("dynamic-background-changer")

        // IncreaseSideFont.style.fontSize="1.3rem";

        zoom.forEach((s)=>{
            s.style.width="70px";
            s.style.height="20px"
        });
        logoDyna.style.width="268px"
    }
 
});
// menuToggler.addEventListener("click",()=>{
    
//     if(sidebar.classList.contains("close")){
      
//     }
//     else{
       
//         console.log(logoDyna.classList)
//     }
   
// });

$(document).ready(function() {
    $('select').niceSelect();
  });

  menuToggler.addEventListener("click", ()=>{
      if(sidebar.classList.contains("close")){
        homePaddingL.style.margin="0 0 0 171.26px !mportant";
        console.log(homePaddingL);
      }
      else{
          homePaddingL.style.margin="0 0 0 171.26px !mportant" ;
      }
  });

/* ##################### menu toogler #############################  */
let body = document.querySelector("body");
let screenSize = window.innerWidth;
window.addEventListener("resize",update);
function update(){
    console.log(window.innerWidth);
    if( window.innerWidth<=960){
        console.log(window.innerWidth)
        sidebar.classList.add("close");
        console.log(sidebar.classList);
        
    }
    else{
        sidebar.classList.remove("close");

    }
}


//Tabs changer
let tabBtn = document.getElementById("dynamic-tab-changer");
let tabList = document.querySelector(".list-of-tabs");
let tabChilds = tabList.childNodes;
let getListContent;
console.log(tabChilds);
tabChilds.forEach((s)=>{
s.addEventListener("click", (e)=>{
    e.target.classList.remove("active");
    getListContent = e.target.parentElement;
    if(getListContent.classList.contains("alabama")){
        tabBtn.innerHTML="Alabama";
    }
    else if(getListContent.classList.contains("workshop")){
        tabBtn.innerHTML="Work Shop";
    }
    else if(getListContent.classList.contains("addNew")){
        tabBtn.innerHTML="Add New";
    }
    else if(getListContent.classList.contains("award")){
        tabBtn.innerHTML="Award";
    }
    else if(getListContent.classList.contains("addConventions")){
        tabBtn.innerHTML="Add Convention";
    }
    else if(getListContent.classList.contains("newOffers")){
        tabBtn.innerHTML="New Offer";
    }
    else if(getListContent.classList.contains("addItem")){
        tabBtn.innerHTML="New Item";
    }
    
});
});