let x = 1;

while (x <= 10) {
    let y = 1, texto = "";
    while (y <= 10) {
        texto = texto + `\n${x} x ${y} = ${x*y}`;
        y++;
    }

    switch (x) {
        case 1:
            let tab1 = document.getElementById("tab1");
            tab1.innerHTML = texto;
            break;
        case 2:
            let tab2 = document.getElementById("tab2");
            tab2.innerHTML = texto;
            break;
        case 3:
            let tab3 = document.getElementById("tab3");
            tab3.innerHTML = texto;
            break;
        case 4:
            let tab4 = document.getElementById("tab4");
            tab4.innerHTML = texto;
            break;
        case 5:
            let tab5 = document.getElementById("tab5");
            tab5.innerHTML = texto;
            break;
        case 6:
            let tab6 = document.getElementById("tab6");
            tab6.innerHTML = texto;
            break;
        case 7:
            let tab7 = document.getElementById("tab7");
            tab7.innerHTML = texto;
            break;
        case 8:
            let tab8 = document.getElementById("tab8");
            tab8.innerHTML = texto;
            break;
        case 9:
            let tab9 = document.getElementById("tab9");
            tab9.innerHTML = texto;
            break;
        case 10:
            let tab10 = document.getElementById("tab10");
            tab10.innerHTML = texto;
            break;
        default:
            break;
    }
    x++;
}