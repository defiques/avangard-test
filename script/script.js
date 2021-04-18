$( document ).ready(function() {

  $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
  });

    $(".contact").submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            fio__input: "required",
            phone__input: {
                required: true,
            },
            email__input: {
                required: true,
            },
            theme__select: {
                required: true,
            },
            text__input: {
                required: true
            }
        },
        messages: {
            fio__input: "Пожалуйста введите свое ФИО",
            phone__input: {
                required: "Пожалуйста введите ваш телефон",
                minlength: "Введите номер в формате +7 (xxx) xxx-xx-xx"
            },
            email__input: {
                required: "Пожалуйста введите ваш email",
                email: "Введите email в формате xxx@xxx.com"
            },
            theme__select: {
                required: "Пожалуйста выберите тему сообщения",
            },
            text__input: {
                required: "Пожалуйста введите текст сообщения",
            },
        },
        submitHandler: function(form) {

            $('.overlay').addClass("d-block");

            return false;
        }
    });



    $('.msg__close').click(function (e) {
        $('.overlay').removeClass("d-block");
    });
});
