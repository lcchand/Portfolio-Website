/* Select DOM Elements to manipulate with IntersectOberver API */
const header = document.querySelector("header");
const sectionIntro = document.querySelector(".section--intro");
const sectionFaders = document.querySelectorAll(".fade-in");
const allSections = document.querySelectorAll(".section");



/* Observer: sectionIntroObserver -------------------------------*/

// Header with Nav-Bar - Transparent to Theme Color - Vice Versa
const sectionIntroOptions = {
    //root: null, // it is the viewport
    //threshold: 0, // How much of Object is visible 0 = part, 1 = all of it
    rootMargin: "-50%" // within 50% from top of section--intro   
};

const sectionIntroObserver = new IntersectionObserver(function(entries, sectionIntroObserver) {
    entries.forEach(entry => {
	//console.log(entry.target);
	// Add Theme Color if Intro Section is off screen: not intersecting
	if(!entry.isIntersecting) {
	    header.classList.add("header--scrolltotheme");


	} else {
	    // Remove Theme Color if scrolled back to: Intro Section
	    header.classList.remove("header--scrolltotheme");
	}
    });
},  sectionIntroOptions);


// Activate observer for Intro Section
sectionIntroObserver.observe(sectionIntro);




/* Observer: sectionFaders -------------------------------------*/

// Content Sections - Fade-in on scroll
const appearOptions = {
    rootMargin: "-15%"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
	//console.log(entry.target);
	if(!entry.isIntersecting) {
	    return;
	} else {
	    // Add  the .appear class to the current section
	    entry.target.classList.add("appear");
	    appearOnScroll.unobserve(entry.target);
	    // Add the .NAME class to the current <a> in the navbar
	    //document.querySelector(`.main_nav a[href="#${id}"]`).classList.add('.main_nav--active');
	   
	}
    });
},  appearOptions);




// Activate observer for Sections with "fade-in" class
sectionFaders.forEach(sectionFader => {
    appearOnScroll.observe(sectionFader);

});






// /* Observer: sections -------------------------------------*/

//  Highlight Navbar links per active intersecting Section on Screen
const navbarOptions = {
    rootMargin: "-25%"
//    threshold: [0.25]
};

const navbarHighLight = new IntersectionObserver(function(entries, navbarHighLight) {
    entries.forEach(entry => {
	//console.log(entry.target);
	document.querySelectorAll('.main_nav--active').forEach((el) => el.classList.remove('main_nav--active'));
	if(!entry.isIntersecting) {
	    //document.querySelectorAll('.main_nav--active').forEach((el) => el.classList.remove('.main_nav--active'));
	    return;
	} else {
	    // Remove  the '.main_nav--active class from any previous sections

	    console.log(`"#${entry.target.id}" is intersecting`);
	    // Add the .NAME class to the current <a> in the navbar
	    document.querySelector(`.main_nav a[href="#${entry.target.id}"]`).classList.add('main_nav--active');
	}
    });
},  navbarOptions);


// Activate observer for all Sections

allSections.forEach(allSection => {
    navbarHighLight.observe(allSection); 
});
