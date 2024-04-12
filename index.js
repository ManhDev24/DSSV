var lisOfSinhVien = [];

var dataJson = localStorage.getItem("listSinhVien");
if (dataJson != null) {
  var rawData = JSON.parse(dataJson);
  console.log("rawData: ", rawData);
  for (let index = 0; index < rawData.length; index++) {
    var sv = new SinhVien(
      rawData[index].msv,
      rawData[index].tenSv,
      rawData[index].email,
      rawData[index].matKhau,
      rawData[index].diemToan,
      rawData[index].diemLy,
      rawData[index].diemHoa
    );
    lisOfSinhVien.push(sv);
  }
  console.log("lisOfSinhVien: ", lisOfSinhVien);
  display(lisOfSinhVien);
}

function addSinhVien() {
  var sv = layThongTinSinhVien();
  lisOfSinhVien.push(sv);
  var dataJson = JSON.stringify(lisOfSinhVien);
  localStorage.setItem("listSinhVien", dataJson);
  display(lisOfSinhVien);
  resetForm();
}

function resetForm() {
  document.querySelector("#formQLSV").reset();
  document.querySelector("#txtMaSV").readOnly = false;
}

function deleteSinhVien(id) {
  var index = lisOfSinhVien.findIndex(function (item) {
    return item.msv == id;
  });
  lisOfSinhVien.splice(index, 1);
  var dataJson = JSON.stringify(lisOfSinhVien);
  localStorage.setItem("listSinhVien", dataJson);
  display(lisOfSinhVien);
}
function changeSinhVien(id) {
  var index = lisOfSinhVien.findIndex(function (item) {
    return item.msv == id;
  });
  document.querySelector("#txtMaSV").value = lisOfSinhVien[index].msv;
  document.querySelector("#txtTenSV").value = lisOfSinhVien[index].tenSv;
  document.querySelector("#txtEmail").value = lisOfSinhVien[index].email;
  document.querySelector("#txtPass").value = lisOfSinhVien[index].matKhau;
  document.querySelector("#txtDiemToan").value = lisOfSinhVien[index].diemToan;
  document.querySelector("#txtDiemLy").value = lisOfSinhVien[index].diemLy;
  document.querySelector("#txtDiemHoa").value = lisOfSinhVien[index].diemHoa;

  document.querySelector("#txtMaSV").readOnly = true;
}
function updateSinhVien() {
  var sv = layThongTinSinhVien();
  var index = lisOfSinhVien.findIndex(function (item) {
    return item.msv == sv.msv;
  });
  lisOfSinhVien[index] = sv;
  var dataJson = JSON.stringify(lisOfSinhVien);
  localStorage.setItem("listSinhVien", dataJson);
  display(lisOfSinhVien);
}

function findSinhVienByName() {
  var name = document.querySelector("#txtSearch").value;
  var foundList = lisOfSinhVien.filter(function (item) {
    return item.tenSv === name;
  });
  display(foundList);
}
