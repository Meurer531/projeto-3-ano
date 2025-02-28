document.addEventListener('DOMContentLoaded', () => {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
});