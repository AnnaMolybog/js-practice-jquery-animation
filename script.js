$(document).ready(() => {
    $('.btn').on('click', () => {
        $('.overlay').fadeIn(400);
        $('.modal')
            .css('display', 'block')
    });
    $('.close').on('click', () => {
        $('.overlay').fadeOut(400);
        $('.modal')
            .css('display', 'none')
    });
});
