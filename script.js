var input = "";

function inputData(data) {
    input += data;
    console.log(input);
    var obj = document.getElementById("inputnum");
    obj.value = input;
}

function screenClear() {
    input = "";
    inputData("");
}

function calculateResult() {
    input = document.getElementById("inputnum").value;
    output = document.getElementById("result");
    try {
        var result = eval(input);
        if (isNaN(result) || (result == undefined)) {
            output.innerHTML = "Error";
        }
        else {
            output.innerHTML = result;
        }
    }
    catch (exception) {
        output.innerHTML = "InvalidSyntax";
    }
    finally {
        screenClear();
    }
}

function keyPress(keyevent) {
    var numcode = keyevent.charCode || keyevent.KeyCode;
    if (numcode == 13)
        calculateResult();
}
