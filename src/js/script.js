$(document).ready(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    $('.skills-section__title, .skills-section__list, .hero-section__name, .hero-section__prof, .projects-section__title, .projects-section__desc, .projects-section__screen, .contact-section__title, .contact-section__form, .contact-section__links').viewportChecker({
        classToAdd: 'fade-skills', // Class to add to the elements when they are visible,
        classToAddForFullView: false, // Class to add when an item is completely visible in the viewport
        classToRemove: false, // Class to remove before adding 'classToAdd' to the elements
        removeClassAfterAnimation: false, // Remove added classes after animation has finished
        offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
        invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
        repeat: false, // Add the possibility to remove the class if the elements are not visible
        callbackFunction: function (elem, action) {}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
        scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    });
});
