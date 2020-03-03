$(document).ready(function(){

$('.list_item:first').hover(function(){                 /*можно так*/
    $(this).toggleClass('active');
});

$('.list_item:eq(1)').on('click',function(){            /*так задавать правильней*/
    $('.img:even').fadeToggle('slow');
});

$('.list_item:eq(4)').on('click',function(){
    $('.img:odd').animate(
        {
            opacity:'toggle',
            height: 'toggle',
            width: 'toggle'
        },3000
    );
})

// Нативный JS вместо JQuery
// .document.querySelectorAll('.img').forEach()    вместо   $('.img')
// .classList  вместо  .toggleClass
// .addEventListener   вместо  .on
// animations












});
