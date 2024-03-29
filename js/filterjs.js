
/*
$('select').change(function(){
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
*/

/*
$(document).ready(function () {
  // Filter button click event
  $(".filter-btn").click(function () {
    // Hide all items before applying the filter
    $('.filter').hide();

    // Get selected filter options
    var type = $(".filter-type option:selected").val();
    var brand = $(".filter-brand option:selected").val();

    // Show items based on selected options
    if (type !== '0' && brand !== '0') {
      $('.' + brand + '.' + type).show();
    } else if (type === '0' && brand !== '0') {
      $('.' + brand).show();
    } else if (type !== '0' && brand === '0') {
      $('.' + type).show();
    }
  });
});
*/

$(document).ready(function () {
  // Hide all items initially
  $('.filter').hide();

  // Filter button click event
  $(".filter-btn").click(function () {
    // Get selected filter options
    var type = $(".filter-type option:selected").val();
    var brand = $(".filter-brand option:selected").val();

    // Hide all items before applying the filter
    $('.filter').hide();

    // Show items based on selected options
    if (type !== '0' && brand !== '0') {
      $('.' + brand + '.' + type).show();
    } else if (type === '0' && brand !== '0') {
      $('.' + brand).show();
    } else if (type !== '0' && brand === '0') {
      $('.' + type).show();
    }
  });
});



