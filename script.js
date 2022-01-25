
function process(fname, lname, dob) {
    var ferror = document.getElementById("ferror")
    var lerror = document.getElementById("lerror")

    if (fname == "") {
        ferror.textContent = "Please enter your first name"
        ferror.style.color = "white"

    }
    else if (fname.length != 0) {
        document.getElementById("ferror").style.visibility = "hidden";
    }

    if (lname == "") {
        lerror.textContent = "Please enter your last name"
        lerror.style.color = "white"
    }
    else if (lname.length != 0) {
        document.getElementById("lerror").style.visibility = "hidden";
    }


    if (isNaN(dob) == false) {
        derror.textContent = "Please enter correct date"
        derror.style.color = "white"
        return false;
    }
    else if (dob.length != 0) {
        document.getElementById("derror").style.visibility = "hidden";
    }


    var mm = moment(dob).format('MM');
    var dd = moment(dob).format('DD');
    var yy = moment(dob).format('YY');

    fname = fname.slice(0, 2).toUpperCase();
    lname = lname.slice(0, 2).toUpperCase();

    min = Math.ceil(10);
    max = Math.floor(99);
    var random = Math.floor(Math.random() * (max - min) + min);
    var random2 = Math.floor(Math.random() * (max - min) + min);

    document.getElementById("firstname").innerHTML = fname;
    document.getElementById("lastname").innerHTML = lname;
    document.getElementById("random_num").innerHTML = random;
    document.getElementById("mm").innerHTML = mm;
    document.getElementById("dd").innerHTML = dd;
    document.getElementById("yy").innerHTML = yy;
    document.getElementById("random_num2").innerHTML = random2;


}