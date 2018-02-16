// $(document).ready(function () {
//     $('.grid').masonry({
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true
//     });
//
//     //
//     // $grid.imagesLoaded().progress( function() {
//     //     $grid.masonry();
//     // });
// });

const $grid = jQuery('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
});
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});