function validateForm(event) {
    var flag = true;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var mobileNo = document.getElementById("mobile").value;
    var email = document.getElementById("mail").value;
    var city = document.getElementById('dropdown').value;
    var gender = document.getElementsByName("Gender");

    document.getElementById("requiredFirstName").innerHTML = "";
    document.getElementById("lastName").innerHTML = "";
    document.getElementById("requiredMobileNumber").innerHTML = "";
    document.getElementById("requiredEmail").innerHTML = "";
    document.getElementById("requiredCity").innerHTML = "";
    document.getElementById("requiredGender").innerHTML = "";

    if (firstName.length == 0 || firstName == "") {
        document.getElementById("requiredFirstName").innerHTML = "*Required Field";
        flag = false;
    }
    else if (!firstName.match(/^[a-z-A-Z ]*$/)) {
        document.getElementById("requiredFirstName").innerHTML = "Firstname can contain alphabets only";
        flag = false;
    }

    if (!lastName.match(/^[a-z-A-Z ]*$/)) {
        document.getElementById("lastName").innerHTML = "Lastname can contain alphabets only";
        flag = false;
    }

    if (mobileNo.length == 0) {
        document.getElementById("requiredMobileNumber").innerHTML = "*Required Field";
        flag = false;
    }
    else if (!mobileNo.match(/^[0-9]*$/)) {
        document.getElementById("requiredMobileNumber").innerHTML = "Only Numeric digits allowed";
        flag = false;
    }
    else if (!(mobileNo.length == 10)) {
        document.getElementById("requiredMobileNumber").innerHTML = "Mobile number should be 10 digits long";
        flag = false;
    }

    if (email.length == 0) {
        document.getElementById("requiredEmail").innerHTML = "*Required Field";
        flag = false;
    }
    else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        document.getElementById("requiredEmail").innerHTML = "Invalid email-id";
        flag = false;
    }

    if (city == "--Select--") {
        document.getElementById("requiredCity").innerHTML = "*Required Field.";
        flag = false;
    }

    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        document.getElementById("requiredGender").innerHTML = "*Required Field.";
        flag = false;
    }

    return flag;
}
