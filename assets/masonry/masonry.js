$(document).ready(function () {
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });
});
