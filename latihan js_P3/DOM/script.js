let container = document.getElementById("container");
let gambar = document.getElementById("gambar");
let clickcount = 0;

function tambahGambar(){
    clickcount++;
    if(clickcount === 1){
        container.classList.remove("background-color");
        gambar.style.display = "block"
    }else {
        let imageContainer = document.getElementById("image-container");

        if(!imageContainer){
            imageContainer = document.createElement("div");
            imageContainer.id = "image-container";
            document.body.appendChild(imageContainer);
        }
        let gambarBaru = document.createElement("img");
        gambarBaru.src = "gambar1.jpg";
        gambarBaru.alt = "gambar tambahan";
        imageContainer.appendChild(gambarBaru);
    }
}