function kiemTraRong(checkIput, idThongBao) {
  // * check xem input đó có được nhập dữ liệu vô hay không, nếu không có thì báo lỗi trả về kết quả false, nếu có trả về true
  if (checkIput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập trường dữ liệu này";
    return false;
  }
}

function kiemTraEmail(checkIput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var hopLe = regexEmail.test(checkIput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email";
    return false;
  }
}
