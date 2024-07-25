document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById("mainName");
    let text = element.innerHTML;
    element.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index <= text.length) {
            element.innerHTML = text.slice(0, index) + (`&nbsp;`.repeat(text.length - index));
            index++;
            setTimeout(typeWriter, 300); // Ajustez la vitesse ici
        }
    }

    typeWriter(element);
});