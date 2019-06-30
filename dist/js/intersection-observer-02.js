const header = document.querySelector("header");
const sectionIntro = document.querySelector(".section--intro");
//const sections = document.querySelectorAll("section");



const sectionIntroOptions = {
    //root: null, // it is the viewport
    //threshold: 0, // How much of Object is visible 0 = part, 1 = all of it
    rootMargin: "-40%" // within 40% from top of section--intro   
};

const sectionIntroObserver = new IntersectionObserver(function(entries, sectionIntroObserver) {
    entries.forEach(entry => {
	console.log(entry.target);
	if(!entry.isIntersecting) {
	    header.classList.add("header--scrolltotheme");
	} else {
	    header.classList.remove("header--scrolltotheme");
	}
    });
},  sectionIntroOptions);




 sectionIntroObserver.observe(sectionIntro);


