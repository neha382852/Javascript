var listIndex = 0;
function clickOnList(name) {
    document.getElementById("userInput").value = name;
    document.getElementById("suggestion").innerHTML = "";
    document.getElementById("suggestion").setAttribute("class", "scroll-hidden");
}
function hideSuggestions() {
    if (document.activeElement.id != "userInput") {
        document.getElementById("suggestion").innerHTML = "";
        document.getElementById("suggestion").setAttribute("class", "scroll-hidden");
    }
}
function clearTextBox() {
    document.getElementById("userInput").value = "";
}

function searchSuggestions(event) {
    debugger;
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    var suggestions = document.getElementById("suggestion");
    var list = suggestions.getElementsByTagName("li");
    if (charCode == 40) {
        if (listIndex < list.length - 1) {
            list[listIndex].className = "";
            listIndex += 1;
            list[listIndex].className = "selected";
            list[listIndex].scrollIntoView(false);
        }
    }
    else if (charCode == 38) {
        if (listIndex > 0) {
            list[listIndex].className = "";
            listIndex -= 1;
            list[listIndex].className = "selected";
            list[listIndex].scrollIntoView(false);
        }
    }
    else if (charCode == 13) {
        document.getElementById("userInput").value = list[listIndex].innerHTML;
        document.getElementById("suggestion").innerHTML = "";
        document.getElementById("suggestion").setAttribute("class", "scroll-hidden");
    }
    else {
        var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
        names.sort();
        var isPresent = "";
        var charCount = 0;
        var Name = "";
        var suggestions = document.getElementById("suggestion");
        suggestions.innerHTML = "";
        var input = document.getElementById("userInput").value;
        for (i = 0; i < names.length; i++) {
            Name = names[i].toLowerCase();
            input = input.toLowerCase();
            if (input.length > 0)
                isPresent = Name.includes(input);
            if (isPresent == true) {
                charCount = charCount + 1;
                if (charCount == 1)
                    suggestions.innerHTML = suggestions.innerHTML + '<li class="selected" onclick="clickOnList(this.innerHTML)">' + names[i] + '</li>';
                else
                    suggestions.innerHTML = suggestions.innerHTML + '<li onclick="clickOnList(this.innerHTML)">' + names[i] + '</li>';
                if (charCount > 5) {
                    suggestions.setAttribute("class", "scroll");
                }
                if (charCount <= 5 || charCount == 0)
                    suggestions.setAttribute("class", "scroll-hidden");
            }
        }
        if (input.length == 0)
            suggestions.setAttribute("class", "scroll-hidden");
        if (charCount == 0 && input.length != 0) {
            suggestions.innerHTML = suggestions.innerHTML + '<li>' + "No Data Found" + '</li>';
        }
        listIndex = 0;
    }
}
