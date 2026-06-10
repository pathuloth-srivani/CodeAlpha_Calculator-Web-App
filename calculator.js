let display = document.querySelector("#display");
let result = document.querySelector("#result");
let buttons = document.querySelectorAll("button");
function updateResult() {
try {
        if (display.value !== "") {
            result.innerText = "Result: " + eval(display.value);
        } else {
            result.innerText = "Result:";
        }
    }
    catch {
        result.innerText = "Result: Invalid";
    }
}

buttons.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let value = btn.innerText;

        if (value === "C") {
            display.value = "";
            result.innerText = "Result:";
        }

        else if (value === "=") {
            try {
                display.value = eval(display.value);
                result.innerText = "Result: " + display.value;
            }
            catch {
                display.value = "Error";
                result.innerText = "Result: Invalid";
            }
        }

        else if (value === "X") {
            display.value = display.value.slice(0, -1);
            updateResult();
        }

        else {
            display.value += value;
            updateResult();
        }
    });
});

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if ("0123456789+-*/().".includes(key)) {
        display.value += key;
        updateResult();
    }

    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
            result.innerText = "Result: " + display.value;
        }
        catch {
            display.value = "Error";
            result.innerText = "Result: Invalid";
        }
    }

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
        updateResult();
    }

    else if (key === "Escape") {
        display.value = "";
        result.innerText = "Result:";
    }
});
