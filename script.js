var input = "";
var hist = "";
function inputData(data) {
    input += data;
    hist += data;
    console.log(input);
    var obj = document.getElementById("inputnum");
    obj.value = input;
}

function screenClear() {
    input = "";
    document.getElementById("inputnum").value = "";
}

function calculateResult() {
    input = document.getElementById("inputnum").value;
    output = document.getElementById("result");
    try {
        var result = eval(input);
        hist = hist + "=" + result + "<br/>";
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

function viewHistory() {
    document.getElementById("histresult").innerHTML = hist;
}