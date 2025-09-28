// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 500000 },
  { id: 5, nama: "Keyboard", harga: 350000 }
];

// **Event Handler (nama fungsi bebas)**
const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (...id) => hapusProduk(...id),
  tampil: () => tampilkanProduk()
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  // produk baru
  const produkBaru = { id, nama, harga };
  // spread operator untuk menambahkan produk ke array lama
  produkList = [...produkList, produkBaru];
  console.log(`✅ Produk "${nama}" berhasil ditambahkan!`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
  produkList = produkList.filter((p) => !id.includes(p.id));
  console.log(`🗑️ Produk dengan ID ${id.join(", ")} berhasil dihapus!`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("\n=== Daftar Produk Toko ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga.toLocaleString()}`);
  });
  console.log("==========================\n");
}

// --- Simulasi penggunaan dengan event handler ---
eventHandler.tampil(); // tampilkan produk awal
eventHandler.tambah(6, "Mouse", 200000);
eventHandler.tampil();
eventHandler.hapus(2, 4); // hapus Smartphone & Headset
eventHandler.tampil();
