// controller.js
let users = require("./data.js");

// Melihat data (pakai map)
const index = () => {
    console.log("=== Daftar Users ===");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

// Menambah data
const store = (user) => {
    users.push(user);
    console.log(`Data ${user.nama} berhasil ditambahkan!`);
};

// Menghapus data berdasarkan index
const destroy = (indexUser) => {
    if (indexUser >= 0 && indexUser < users.length) {
        let deleted = users.splice(indexUser, 1);
        console.log(`Data ${deleted[0].nama} berhasil dihapus!`);
    } else {
        console.log("Index tidak valid!");
    }
};

module.exports = { index, store, destroy };
