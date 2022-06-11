$(document).ready(function () {
  function save() {
    $('input[type="text"]').each(function () {
      let id = $(this).attr("id");
      let value = $(this).val();
      localStorage.setItem(id, value);
    });
  }
  $("#save").on("click", function () {
    save();
  });

  $("#load").on("click", function () {
    $('input[type="text"]').each(function () {
      let id = $(this).attr("id");
      let value = localStorage.getItem(id);
      $(this).val(value);
      console.log($(this).val(value));
    });
  });

  $("#clear").on("click", function () {
    $('input[type="text"]').each(function () {
      $("form :input").val("");
    });
  });

  $("#json").on("click", function (event) {
    let form = $("form").serializeArray();
    console.log(form);
    let jsonForm = JSON.stringify(form);
    let fileBlob = new Blob([jsonForm], {
      type: "data:text/json;charset=utf-8",
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
  });

 

  $("#str").change(function () {
    save();
    let modifier = localStorage.getItem("str");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="strMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="strMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });
  

  $("#dex").change(function () {
    save();
    let modifier = localStorage.getItem("dex");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="dexMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="dexMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });

  $("#con").change(function () {
    save();
    let modifier = localStorage.getItem("con");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="conMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="conMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });

  $("#int").change(function () {
    save();
    let modifier = localStorage.getItem("int");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="intMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="intMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });

  $("#wis").change(function () {
    save();
    let modifier = localStorage.getItem("wis");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="wisMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="wisMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });

  $("#cha").change(function () {
    save();
    let modifier = localStorage.getItem("cha");
    if (Math.floor((modifier - 10) / 2) >= 0) {
      $('[name="chaMod"]').val("+" + Math.floor((modifier - 10) / 2));
    } else {
      $('[name="chaMod"]').val(Math.floor((modifier - 10) / 2));
    }
  });

  // function getOS() {
  //   var userAgent = window.navigator.userAgent,
  //       platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
  //       macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  //       windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  //       iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  //       os = null;
  
  //   if (macosPlatforms.indexOf(platform) !== -1) {
  //     os = 'Mac OS';
  //   } else if (iosPlatforms.indexOf(platform) !== -1) {
  //     os = 'iOS';
  //   } else if (windowsPlatforms.indexOf(platform) !== -1) {
  //     os = 'Windows';
  //   } else if (/Android/.test(userAgent)) {
  //     os = 'Android';
  //   } else if (!os && /Linux/.test(platform)) {
  //     os = 'Linux';
  //   }
  
  //   return os;
  // }
  
  // alert(getOS());
});
