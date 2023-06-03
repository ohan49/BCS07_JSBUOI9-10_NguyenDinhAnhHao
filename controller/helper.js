// * àm giúp gán giá trị mới cho input
function ganGiaTriChoInput(tK, name, email, pass, ngayLam, luong, cV, gioLam) {
  document.getElementById("tknv").value = tK;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("password").value = pass;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luong;
  document.getElementById("chucvu").value = cV;
  document.getElementById("gioLam").value = gioLam;
}

// Tìm vị trí nhân viên
function timViTriNhanVien(tK) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.tK == tK) {
      viTri = index;
    }
  });
  return viTri;
}

function layGiaTriInput() {
  var _tK = document.getElementById("tknv").value;
  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _pass = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luong = document.getElementById("luongCB").value * 1;
  var _cV = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  //* Khi lấy được dữ liệu gọi tới lớp đối tượng nhân viên và tạo ra đối lượng nhân viên
  var nhanVien = new NhanVien(
    _tK,
    _name,
    _email,
    _pass,
    _ngayLam,
    _luong,
    _cV,
    _gioLam
  );
  return nhanVien;
}