function GameOver() {
    document.getElementById("popupGameOver").hidden = false;

    let btnSubmit = document.getElementById("compilation");
    btnSubmit.disabled = true;
    let btnClear = document.getElementById("clear");
    btnClear.disabled = true;

    let tryAgain = document.getElementById('tryAgain');
    tryAgain.addEventListener('click', () => {
        let position = window.location.href.indexOf('?');

        if (position != -1) {
            let lvl = "";
            let fin_url = window.location.href.substr(position + 1);
            fin_url = fin_url.replace(/-/g, " ");

            lvl = fin_url.substr(7);

            switch (lvl) {
                case '1':
                    document.location.href = "../html/lvl1.html?niveau=1";
                    break;
                case '2':
                    document.location.href = "../html/lvl2.html?niveau=2";
                    break;
                case '3':
                    document.location.href = "../html/lvl3.html?niveau=3";
                    break;
                case '4':
                    document.location.href = "../html/lvl4.html?niveau=4";
                    break;
                case '5':
                    document.location.href = "../html/lvl5.html?niveau=5";
                    break;
                case '6':
                    document.location.href = "../html/lvl6.html?niveau=6";
                    break;
                case '7':
                    document.location.href = "../html/lvl7.html?niveau=7";
                    break;
                case '8':
                    document.location.href = "../html/lvl8.html?niveau=8";
                    break;
            }
        }
    });

    let leave = document.getElementById('leave3');
    leave.addEventListener('click', () => {
        document.location.href = "../html/accueil.html";
    });
}

function Win() {
    document.getElementById("popupWin").hidden = false;

    let btnSubmit = document.getElementById("compilation");
    btnSubmit.disabled = true;
    let btnClear = document.getElementById("clear");
    btnClear.disabled = true;

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
        let position = window.location.href.indexOf('?');

        if (position != -1) {
            let lvl = "";
            let fin_url = window.location.href.substr(position + 1);
            fin_url = fin_url.replace(/-/g, " ");

            lvl = fin_url.substr(7);

            switch (lvl) {
                case '1':
                    document.location.href = "../html/lvl2.html?niveau=2";
                    break;
                case '2':
                    document.location.href = "../html/lvl3.html?niveau=3";
                    break;
                case '3':
                    document.location.href = "../html/lvl4.html?niveau=4";
                    break;
                case '4':
                    document.location.href = "../html/lvl5.html?niveau=4";
                    break;
                case '5':
                    document.location.href = "../html/lvl6.html?niveau=6";
                    break;
                case '6':
                    document.location.href = "../html/lvl7.html?niveau=7";
                    break;
                case '7':
                    document.location.href = "../html/lvl8.html?niveau=8";
                    break;
                case '8':
                    document.location.href = "../html/accueil.html";
                    break;
            }
        }
    });

    let leave = document.getElementById('leave3');
    leave.addEventListener('click', () => {
        document.location.href = "../html/accueil.html";
    });
}

function PrintConsole(variable) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML=variable.toString();
    li.appendChild(p);
    ul.appendChild(li);
}

function ClearConsole() {
    document.getElementById("list").innerHTML = "";
}

function CollisionConsole() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML="ERROR : Collision area";
    li.appendChild(p);
    ul.appendChild(li);
}

function ErrorConsole(err){
    err = err.split("\n")
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML=`Erreur ligne: ${err[28]}<br><br>` +err[1] + "<br><br>"+err[2] + "<br><br>"+err[3];
    li.appendChild(p);
    ul.appendChild(li);
}
