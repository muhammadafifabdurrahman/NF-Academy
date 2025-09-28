class Produk{
    constructor(nama, harga){
        this.nama = nama;
        this._harga = harga;
    }
    getHarga(){
        return this._harga;
    }
    setHarga(hargaBaru){
        if(hargaBaru > 0){
            this._harga = hargaBaru
        }else {
            console.log ("harga tidak boleh negatif");
        }
    }
}