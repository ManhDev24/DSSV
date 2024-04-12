function layThongTinSinhVien() {
  var maSv = document.getElementById("txtMaSV").value;
  var tenSv = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemLy = document.getElementById("txtDiemLy").value * 1;
  var diemHoa = document.getElementById("txtDiemHoa").value * 1;
  var sinhvien = new SinhVien(
    maSv,
    tenSv,
    email,
    matKhau,
    diemToan,
    diemLy,
    diemHoa
  );
  return sinhvien;
}

function display(array) {
  var contentHtml = "";
  for (let index = 0; index < array.length; index++) {
    var sv = array[index];
    var listOfStr = `
    <tr>
        <td>${sv.msv}</td>
        <td>${sv.tenSv}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDiemTB()}</td>
        <td>
        <button onclick="deleteSinhVien('${
          sv.msv
        }')" class="btn btn-danger">Xóa</button>
        <button onclick ="changeSinhVien('${
          sv.msv
        }')" class="btn btn-dark">Sửa</button>
        </td>
    </tr>
    `;
    contentHtml += listOfStr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHtml;
}
