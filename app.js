$(document).ready(function () {
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
  let body = document.querySelector("body");
  let screenSize = window.innerWidth;
  function update() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 960) {
      console.log(window.innerWidth);
      sidebar.classList.add("close");
      console.log("class added");
      console.log(sidebar.classList);
    } else {
      sidebar.classList.remove("close");
    }
  }
  /* ##################### menu toogler #############################  */

  window.addEventListener("resize", update);
  update();
  console.log(arrow);
  arrow.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement);
      let arrowParent = e.target.parentElement.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  });
  menuToggler.addEventListener("click", () => {
    sidebar.classList.toggle("close");

    if (sidebar.classList.contains("close")) {
      // console.log(sidebar.classList.contains("close"))
      // IncreaseSideFont.style.fontSize="2.2rem";
      // logoDyna.classList.add("dynamic-background-changer");
      // hamburgerBackground.classList.add("dynamic-background-changer")
      logoDyna.classList.toggle("dynamic-background-changer");
      console.log("logo bg " + logoDyna.classList);
      zoom.forEach((s) => {
        s.style.height = "30px";
        s.style.width = "30px";
      });
      hamburgerBackground.style.width = "70px";

      console.log("done");
    } else {
      logoDyna.classList.add("dynamic-background-changer");
      hamburgerBackground.classList.add("dynamic-background-changer");
      hamburgerBackground.style.width = "268px";

      // IncreaseSideFont.style.fontSize="1.3rem";

      zoom.forEach((s) => {
        s.style.width = "70px";
        s.style.height = "20px";
      });
      logoDyna.style.width = "268px";
    }
  });
  // menuToggler.addEventListener("click",()=>{

  //     if(sidebar.classList.contains("close")){

  //     }
  //     else{

  //         console.log(logoDyna.classList)
  //     }

  // });

  $("select").niceSelect();

  menuToggler.addEventListener("click", () => {
    if (sidebar.classList.contains("close")) {
      homePaddingL.style.margin = "0 0 0 171.26px !mportant";
      console.log(homePaddingL);
    } else {
      homePaddingL.style.margin = "0 0 0 171.26px !mportant";
    }
  });

  //Tabs changer
  let tabBtn = document.getElementById("dynamic-tab-changer");
  let tabList = document.querySelector(".list-of-tabs");
  if (tabList) {
    let tabChilds = tabList.childNodes;
    let getListContent;
    console.log(tabChilds);
    tabChilds.forEach((s) => {
      s.addEventListener("click", (e) => {
        e.target.classList.remove("active");
        getListContent = e.target.parentElement;
        if (getListContent.classList.contains("alabama")) {
          tabBtn.innerHTML = "Commisioner";
        } else if (getListContent.classList.contains("workshop")) {
          tabBtn.innerHTML = "Workshop";
        } else if (getListContent.classList.contains("addNew")) {
          tabBtn.innerHTML = "Media";
        } else if (getListContent.classList.contains("award")) {
          tabBtn.innerHTML = "Award";
        } else if (getListContent.classList.contains("addConventions")) {
          tabBtn.innerHTML = "Add Convention";
        } else if (getListContent.classList.contains("newOffers")) {
          tabBtn.innerHTML = "New Offer";
        } else if (getListContent.classList.contains("cosplay-group")) {
          tabBtn.innerHTML = "Cosplay Group";
        }
      });
    });
  }

  //SELL PAGE RADIO BUTTONS
  $(".custom-radio").on("click", function () {
    $(".custom-radio").removeClass("active");
    let val = $(this).addClass("active").data("value");
    $("#condition-radio").val(val);
  });
  //NOTIFICATION DROPDOWN

  var down = false;

  $("#bell").click(function (e) {
    var color = $(this).text();
    if (down) {
      $("#notifications-box").css("height", "0px");
      $("#notifications-box").css("opacity", "0");
      down = false;
    } else {
      $("#notifications-box").css("height", "auto");
      $("#notifications-box").css("opacity", "1");
      down = true;
    }
  });
});
