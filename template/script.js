$(document).ready(function () {
  $("#save").on("click", function () {
    $('input[type="text"]').each(function () {
      let id = $(this).attr("id");
      let value = $(this).val();
      localStorage.setItem(id, value);
    });
  });

  $("#load").on("click", function () {
    $('input[type="text"]').each(function () {
      let id = $(this).attr("id");
      let value = localStorage.getItem(id);
      $(this).val(value);
    });
  });

  $("#clear").on("click", function () {
    $('input[type="text"]').each(function () {
      $('form :input').val('');
    });
  });
  
  $("#json").on("click", function ( event ) {
    let form = $('form').serializeArray();
    console.log(form);
    let jsonForm = JSON.stringify(form);
    let fileBlob = new Blob([jsonForm], {
      type: 'data:text/json;charset=utf-8'
    });
    let temp_anchor = document.createElement("a");
    temp_anchor.style = "display: none";
    let fileBlobURL = URL.createObjectURL(fileBlob); 
    temp_anchor.href = fileBlobURL;
    temp_anchor.download = "charsheet.json";
    temp_anchor.click();
    window.URL.revokeObjectURL(fileBlobURL);
    temp_anchor.remove();
    console.log(jsonForm);
    event.preventDefault();
  })

  
});
