// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  //menampilkan informasi pelanggan
  infoPelanggan() {
    return `Nama: ${this.nama}, No. Telp: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa}`;
  }
}

//menyimpan daftar pelanggan
let daftarPelanggan = [];

//Daftar transaksi penyewaan kendaraan
function sewaKendaraan(nama, nomorTelepon, kendaraan) {
  const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraan);
  daftarPelanggan.push(pelangganBaru);
  console.log(`✅ Transaksi berhasil dicatat untuk ${nama}`);
}

//Daftar Pelanggan
function tampilkanDaftarPelanggan() {
  console.log("\n=== Daftar Pelanggan yang Menyewa Kendaraan ===");
  if (daftarPelanggan.length === 0) {
    console.log("Belum ada pelanggan yang menyewa kendaraan.");
  } else {
    daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
  console.log("==============================================");
}

// Tampilan
// Mencatat transaksi penyewaan
sewaKendaraan("El Fikrie", "08123456789", "Mobil");
sewaKendaraan("M. Afif", "08987654321", "Motor");
sewaKendaraan("Prayoga Hendrik", "082233445566", "Becak");

// Menampilkan daftar pelanggan
tampilkanDaftarPelanggan();
