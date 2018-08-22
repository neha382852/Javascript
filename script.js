function clickOnList(name) {
    document.getElementById("userInput").value = name;
    document.getElementById("suggestion").innerHTML = "";
    document.getElementById("suggestion").setAttribute("class", "scroll-hidden");
}
function searchSuggestions(event) {
    var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
    names.sort();
    var isPresent = "";
    var charCount = 0;
    var Name = "";
    var suggestions = document.getElementById("suggestion");
    suggestions.innerHTML = "";
    try {
        var input = document.getElementById("userInput").value;
        for (i = 0; i < names.length; i++) {
            Name = names[i].toLowerCase();
            input = input.toLowerCase();
            if (input.length > 0)
                isPresent = Name.includes(input);
            if (isPresent == true) {
                suggestions.innerHTML = suggestions.innerHTML + '<li onclick="clickOnList(this.innerHTML)">' + names[i] + '</li>';
                charCount = charCount + 1;
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

    }
    catch (err) {
        document.getElementById("suggestion").innerHTML = "";
    }
}
function hideSuggestions() {
    if (document.activeElement.id != "userInput") {
        document.getElementById("suggestion").innerHTML = "";
        document.getElementById("suggestion").setAttribute("class", "scroll-hidden");
    }
}