(function () {
    // An object with options for the IntersectionObserver.
    const options = {
        // 0.5 = The callback is fired when 50% of the element is visible
        // We can add more values to the array, like 0.25, 0.75 or 1.0
        threshold: [0.5]
    };

    // Instantiate the IntersectionObserver class
    const observer = new IntersectionObserver((entries, observer) => {
        // This is the callback.
        entries.forEach((entry => {
            // Checks if 50% or more of the element is visible in the viewport
            if (entry.intersectionRatio >= 0.5) {
                // Call the setCurrent function and pass the element (DOM-node)
                setCurrent(entry.target);
            }
        }));
        // End of callback. Pass the options object as the second argument.
    }, options);

    const setCurrent = (section) => {
        // Finds all elements (<a> and <section>) with the .current class and remove it.
        document.querySelectorAll('.current').forEach((el) => el.classList.remove('current'));

        // Add the .current class to the current <section>...
        section.classList.add('current');
        // ...and the current <a> in the navbar.
        document.querySelector(`.navbar a[href="#${section.id}"]`).classList.add('current');
    };

    // Query the DOM for all the sections...
    const sections = document.querySelectorAll('section');
    // Loop through them and tell our instance of the 
    // IntersectionObserver class to observe each one of them.
    sections.forEach((section) => observer.observe(section));
})();
