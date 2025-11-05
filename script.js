function press(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* ✅ Keyboard Support */
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (!isNaN(key) || key === ".") {
        press(key);
    } 
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        press(key);
    }
    else if (key === "Enter") {
        calculate();
    }
    else if (key === "Backspace") {
        backspace();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});
