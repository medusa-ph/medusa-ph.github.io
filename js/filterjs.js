$('select').change(function () {
    $('.filter').hide();
});

$(".filter-btn").click(function () {
    var type = $(".filter-type option:selected").val();
    var brand = $(".filter-brand option:selected").val();


    if ($('.filter').hasClass(brand) && $('.filter').hasClass(type)) {
        $('.' + brand + '' + '.' + type).show();
    } else {
        $('.' + brand + '' + '.' + type).hide();
    }


});