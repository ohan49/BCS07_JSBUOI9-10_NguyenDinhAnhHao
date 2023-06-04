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

  var valid = true;
  valid =
    kiemTraRong(_tK, "tbTKNV") &
    kiemTraRong(_name, "tbTen") &
    kiemTraRong(_email, "tbEmail") &
    kiemTraRong(_pass, "tbMatKhau") &
    kiemTraRong(_ngayLam, "tbNgay") &
    kiemTraRong(_luong, "tbLuongCB") &
    kiemTraRong(_cV, "tbChucVu") &
    kiemTraRong(_gioLam, "tbGiolam");

  valid &= kiemTraEmail(_email, "tbEmail");
  valid &= kiemTraTK(_tK, "tbTKNV");
  valid &= kiemTraTen(_name, "tbTen");
  valid &= kiemTraPass(_pass, "tbMatKhau");
  valid &= kiemTraLuong(_luong, "tbLuongCB");
  valid &= kiemTraGio(_gioLam, "tbGiolam")
  //* kiểm tra valid
  if (!valid) {
    return;
  }

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


