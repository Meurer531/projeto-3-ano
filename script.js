document.addEventListener('DOMContentLoaded', () => {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
});


document.addEventListener('DOMContentLoaded', () => {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});