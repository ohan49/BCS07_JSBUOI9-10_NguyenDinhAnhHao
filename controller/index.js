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
                    <button onclick="editNhanVien('${
                      nhanVien.tK
                    }')" class="btn btn-warning">
                      <i class="fa-solid fa-pen"></i>
                    </button></td>
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
}

document.getElementById("btnThemNV").onclick = themNhanVien;

// Xóa nhân viên
function xoaNhanVien() {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.tK == tK) {
      viTri = index;
    }
  });
  if (viTri != -1) {
    arrNhanVien.slice(viTri, 1);
    renderGiaoDien();
  }
}
