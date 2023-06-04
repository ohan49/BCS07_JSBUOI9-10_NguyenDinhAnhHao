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
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    // render lên giao diện
    renderGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = themNhanVien;

// Xóa nhân viên
function xoaNhanVien(tK) {
  console.log(tK);
  var index = timViTriNhanVien(tK);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
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
  document.getElementById("tknv").readOnly = true;
}
function capNhatThongTinNhanVien() {
  var nhanVienDaChinhSua = layGiaTriInput();
  console.log(nhanVienDaChinhSua);
  var index = timViTriNhanVien(nhanVienDaChinhSua.tK);
  console.log(index);
  // sau khi tìm được vị trí index của phần đang chỉnh sửa trong mảng, chúng ta sẽ làm một việc là thay thế phần tử đó trong mảng bằng giá trị mới
  arrNhanVien[index] = nhanVienDaChinhSua;
  renderGiaoDien();
  ganGiaTriChoInput("", "", "", "", "", "", "", "");
  document.getElementById("tknv").readOnly = false;
}
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;
