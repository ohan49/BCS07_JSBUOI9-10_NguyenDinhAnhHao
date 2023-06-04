function kiemTraRong(checkInput, idThongBao) {
  // * check xem input đó có được nhập dữ liệu vô hay không, nếu không có thì báo lỗi trả về kết quả false, nếu có trả về true
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập trường dữ liệu này";
    return false;
  }
}

function kiemTraEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var hopLe = regexEmail.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email";
    return false;
  }
}

function kiemTraTK(checkInput, idThongBao) {
  var regexTK = /^[a-zA-Z0-9_-]{4,6}$/;
  var hopLe = regexTK.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập tên tài khoản từ 4 - 6 ký tự";
    return false;
  }
}

function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

function kiemTraTen(checkInput, idThongBao) {
  var input = removeAscent(checkInput);
  var regexTen = /^[a-zA-Z ]+$/;
  var hopLe = regexTen.test(input);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập tên chỉ chứa ký tự chữ";
    return false;
  }
}

function kiemTraPass(checkInput, idThongBao) {
  var regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  var hopLe = regexPass.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập mật khẩu có độ dài từ 6-10 ký tự chứa ít nhất 1 ký tự in hoa, số, ký tự đặc biệt ";
    return false;
  }
}

function kiemTraLuong(checkInput, idThongBao) {
  if (checkInput >= 1000000 && checkInput <= 20000000) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập lương từ 1.000.000VND đến 20.000.000VND";
    return false;
  }
}

function kiemTraGio(checkInput, idThongBao) {
  if (checkInput >= 80 && checkInput <= 200) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "block";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập giờ từ 80 giờ đến 200 giờ";
    return false;
  }
}
