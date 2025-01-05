let imagensBack =["src/imagem/imgback.jpg", "src/imagem/imgBack2.jpg"];
let imagemAtual = 0;

setInterval(() => {
    imagemAtual++;
    if(imagemAtual >= imagensBack.length){
        imagemAtual =0;
    }

    document.getElementsByTagName('main')[0].style.backgroundImage = `url('${imagensBack[imagemAtual]}')`;
}, 4000);