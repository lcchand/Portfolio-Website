const sectionOne = document.querySelector(".section--webdev");
const sections = document.querySelectorAll("section");

const options = {
    root: null, // it is the viewport
    threshold: 0, // How much of Object is visible 0 = part, 1 = all of it
    rootMargin: "-150px" // within 150px from top of viewport   
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
	// Not intersecting - do nothing, exit
	if(!entry.isIntersecting) {
	    return;
	}
	console.log(entry.target);
	entry.target.classList.toggle("inverse");
	;// Stop observing object - so we don't undo the classList.toggle
	observer.unobserve(entry.target);
    })
}, options);

sections.forEach(section => {
    observer.observe(section);
});



