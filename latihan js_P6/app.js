// app.js
const { index, store, destroy } = require("./controller.js");

const main = () => {
  index(); // tampilkan data awal

  // Tambahkan 2 data
  store({ nama: "Tika", umur: 30, alamat: "Jl. Tika", email: "Tika@email.com" });
  store({ nama: "Tiki", umur: 31, alamat: "Jl. Tiki", email: "Tiki@email.com" });

  index(); // tampilkan data setelah ditambah

  // Hapus 1 data (misal index ke-2 → Data 2)
  destroy(1);

  index(); // tampilkan data setelah dihapus
};

main();
