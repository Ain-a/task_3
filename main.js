let screen = document.getElementById("screen");
let symb = document.getElementById("symb");

function clickbutton (target) {
    // let screen = document.getElementById("screen");
    let target_vallue = target.innerHTML;
    console.log(target_vallue);

    if (target_vallue == "AC") {
        screen.innerHTML = "0";
        return
    } 
    if (target_vallue == "=") {
        screen.innerHTML = eval(screen.innerHTML);
        return
    }
    if (screen.innerHTML == "0") {
        if (target_vallue == "00") {
            console.log("oo");
            return
        }
    }
    if (target_vallue < 10 ) {
        if (screen.innerHTML == "0" ) {
            screen.innerHTML = target_vallue;
        } else {
            screen.innerHTML = screen.innerHTML + target_vallue
        }
        return
    }
    if (target_vallue == "/") {
        console.log("test");
        const lastChar = screen.innerHTML.slice(-1)
        console.log(lastChar != '/');
        console.log(lastChar);
        if (lastChar != '/' && lastChar != '*' && lastChar != '-' && lastChar != '+' && lastChar !='.') {
          screen.innerHTML = screen.innerHTML + target_vallue
        }
    }
    if (target_vallue == "*") {
        const lastChar = screen.innerHTML.slice(-1)
        if (lastChar != '/' && lastChar != '*' && lastChar != '-' && lastChar != '+' && lastChar !='.') {
          screen.innerHTML = screen.innerHTML + target_vallue
        }
    }
    if (target_vallue == "+") {
        const lastChar = screen.innerHTML.slice(-1)
        if (lastChar != '/' && lastChar != '*' && lastChar != '-' && lastChar != '+' && lastChar !='.') {
          screen.innerHTML = screen.innerHTML + target_vallue
        }
    }
    if (target_vallue == "-") {
        const lastChar = screen.innerHTML.slice(-1)
        if (lastChar != '/' && lastChar != '*' && lastChar != '-' && lastChar != '+' && lastChar !='.') {
          screen.innerHTML = screen.innerHTML + target_vallue
        }
    }
    if (target_vallue == ".") {
        const lastChar = screen.innerHTML.slice(-1)
        if (lastChar != '/' && lastChar != '*' && lastChar != '-' && lastChar != '+' && lastChar !='.') {
          screen.innerHTML = screen.innerHTML + target_vallue
        }
    }
    if (target_vallue == "00" && screen.innerHTML == "0") {
        screen.innerHTML = "0";
        console.log("zero");
    }
    
}
