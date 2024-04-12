function SinhVien(msv, tenSv, email, matKhau, diemToan, diemLy, diemHoa) {
  this.msv = msv;
  this.tenSv = tenSv;
  this.email = email;
  this.matKhau = matKhau;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;

  this.tinhDiemTB = function () {
    var avr = (this.diemHoa + this.diemToan + this.diemLy) / 3;
    return avr;
  };
}
