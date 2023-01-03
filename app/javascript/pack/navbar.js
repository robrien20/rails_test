var activeMenu;

function init(){
  console.log("-------init-------");
  activeMenu = "N/A";
}

function toggleMenu(event) {
  if (event) {
    event.stopPropagation();
  }
  var menu = document.getElementById("dropdown-menu");
  var button = document.getElementById("menubutton");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    button.style.color = "";
    button.style.backgroundColor = "";
  } else {
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    menu.style.display = "block";
  }
}

function toggleSubmenu(event, submenuId) {
  event.stopPropagation();
  var submenu = document.getElementById(submenuId);
  var button = document.getElementById(submenuId+"button");
  var openSubmenus = document.querySelectorAll('.submenu[style*="block"]');
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    button.style.backgroundColor = "";
    button.style.color = "";
  } else {
    submenu.style.display = "block";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
  }
  for (var i = 0; i < openSubmenus.length; i++) {
    if (openSubmenus[i] !== submenu && openSubmenus[i] !== submenu.parentNode  ) {
      openSubmenus[i].style.display = "none";
      var button = document.getElementById(openSubmenus[i].id+"button");
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  }
  
}

window.onclick = function(event) {
  var menu = document.getElementById("dropdown-menu");
  var button = document.getElementById("menubutton");
  if (!event.target.matches('.menu-button') && !event.target.closest('.dropdown-menu') && menu.style.display === "block") {
    menu.style.display = "none";
    button.style.backgroundColor = "";
    button.style.color = "";
  }
}

init();