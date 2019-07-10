// Select UL within NAV element
const nav = document.getElementById("mainNavUl");
// Return Node list from li elements within UL
let navList = nav.getElementsByTagName("li");

// Loop thru node list and print ID destinations
for ( var i = 0; i < navList.length; i++) {
    var navListId = navList[i].firstElementChild.hash;
    console.log(navListId);
}
