$(document).ready(function () {
  $("#save").on("click", function () {
    $('input[type="text"]').each(function () {
      var id = $(this).attr("id");
      var value = $(this).val();
      localStorage.setItem(id, value);
    });
  });

  $("#load").on("click", function () {
    $('input[type="text"]').each(function () {
      var id = $(this).attr("id");
      var value = localStorage.getItem(id);

      $(this).val(value);
    });
  });

  $("#clear").on("click", function () {
    $('input[type="text"]').each(function () {
      $('form :input').val('');
    });
  });
});
