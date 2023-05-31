var arrNhanVien = [];

function renderGiaoDien() {
  var content = "";
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    content += ` 
  <tr>
                    <td>${nhanVien.tK}
                    </td>
                    <td>${nhanVien.name}</td>
                    <td>${nhanVien.email}</td>
                    <td>${nhanVien.ngayLam}</td>
                    <td>${nhanVien.cV}</td>
                    <td>${nhanVien.tinhTongLuong()}</td>
                    <td>${nhanVien.tinhXepLoai()}</td>
                    <td><button onclick="xoaNhanVien('${
                      nhanVien.tK
                    }')" class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button onclick="capNhat('${
                      nhanVien.tK
                    }')" data-toggle="modal"
                    data-target="#myModal" class="btn btn-warning">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    </td>
                  </tr>
  `;
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien() {
  var _tK = document.getElementById("tknv").value;
  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _pass = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luong = document.getElementById("luongCB").value * 1;
  var _cV = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

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
  arrNhanVien.push(nhanVien);
  // render lên giao diện
  renderGiaoDien();
  ganGiaTriChoInput("", "", "", "", "", "", "", "");
}

document.getElementById("btnThemNV").onclick = themNhanVien;

// Tìm vị trí nhân viên
function timNhanVien(tK) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.tK == tK) {
      viTri = index;
    }
  });
  return viTri;
}

// Gán giá trị
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

// Xóa nhân viên
function xoaNhanVien(tK) {
  console.log(tK);
  var index = timViTriNhanVien(tK);
  if (viTri != -1) {
    arrNhanVien.splice(viTri, 1);
    renderGiaoDien();
  }
}

// Cập nhập nhân viên
function capNhat(tK) {
  var index = timViTriNhanVien(tK);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.tK,
    nhanVien.name,
    nhanVien.email,
    nhanVien.pass,
    nhanVien.ngayLam,
    nhanVien.luong,
    nhanVien.cV,
    nhanVien.gioLam
  );
}
document.getElementById("btnCapNhat").onclick = capNhat;
