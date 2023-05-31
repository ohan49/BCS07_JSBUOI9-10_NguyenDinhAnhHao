function NhanVien(_tK, _name, _email, _pass, _ngayLam, _luong, _cV, _gioLam) {
  this.tK = _tK;
  this.name = _name;
  this.email = _email;
  this.pass = _pass;
  this.ngayLam = _ngayLam;
  this.luong = _luong;
  this.cV = _cV;
  this.gioLam = _gioLam;

  // Tính tổng lương
  this.tinhTongLuong = function () {
    if (this.cV == "Sếp") {
      return this.luong * 3;
    } else if (this.cV == "Trưởng phòng") {
      return this.luong * 2;
    } else {
      return this.luong;
    }
  };

  // Tính xếp loại
  this.tinhXepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân viên khá";
    } else return "Nhân viên trung bình";
  };
}
