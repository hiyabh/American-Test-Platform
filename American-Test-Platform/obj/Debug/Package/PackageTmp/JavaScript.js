
var questions = [];
var rightAll = [];
var i = 0;
htmlTest = "";

//בלחיצה על הכפתור קוראים לקונסטרקטור לבנות אובייקט חדש
document.getElementById("moreQuestion").addEventListener("click", function () {

    questions[i] = new Question;
    
    i++;
    
});

//קונסטרקטור - לכן מתחיל באות גדולה כדי לסמן אותו 
function Question() {

    //בניית האובייקט ע"י הקונסטרקטור
    this.question = document.forms["myForm"]["form-q"].value;
    this.first = document.forms["myForm"]["form-1"].value;
    this.last = document.forms["myForm"]["form-2"].value;
    this.third = document.forms["myForm"]["form-3"].value;
    this.for = document.forms["myForm"]["form-4"].value;
    this.rightAnswer = document.getElementById("rightAnswer").value;

    rightAll[i] = this.rightAnswer;
   
    //איפוס השדות לקראת השאלה הבאה
    document.forms["myForm"]["form-q"].value = "";
    document.forms["myForm"]["form-1"].value = "";
    document.forms["myForm"]["form-2"].value = "";
    document.forms["myForm"]["form-3"].value = "";
    document.forms["myForm"]["form-4"].value = "";
    document.getElementById("rightAnswer").value = 0;
  
}
var j = 0;
document.getElementById("endQuestion").addEventListener("click", function () {

    //הדפסת רשימת השאלות
    if (j < questions.length) {
        htmlTest = "";
        htmlTest += "<div style='border: double; border-color: black; margin: auto 5%; margin-top:10%; background-color:lemonchiffon; color:blue; text-align:center; padding: 3%;' class=\'container'><form class=\'myform'><div class=\'form-group'>";
        htmlTest += "<h3>" + "question " + (j + 1) + ':</br>' + questions[j].question + "</h3>" + "</br>";
        htmlTest += "<input type=\'radio' value='first' name='question' onChange='point1();'>" + questions[j].first + "</br>"
            + "<input type=\'radio' value='last' name='question' onChange='point2();'>" + questions[j].last + "</br>"
            + "<input type=\'radio' value='third' name='question' onChange='point3();'>" + questions[j].third + "</br>"
            + "<input type=\'radio' value='for' name='question' onChange='point4();'>" + questions[j].for + "</br>";
        htmlTest += "</div>";
        htmlTest += "</form ><button class='btn btn- primary' id='next' onclick='next()'>Next Question</button></div >";

        document.write(htmlTest);
        j++;
    }
    else {
        alert("End Test\n" + "your grade is:\n" + tziun);
    }
    
});


function next() {
    if (j < questions.length) {
    htmlTest = "";
    htmlTest += "<div style='border: double; border-color: black; margin: auto 5%; margin-top:10%; background-color:lemonchiffon; color: blue; text-align:center; padding: 3%;' class=\'container'><form class=\'myform'><div class=\'form-group'>";
    htmlTest += "<h3>" + "question " + (j + 1) + ':</br>' + questions[j].question + "</h3>" + "</br>";
    htmlTest += "<input type=\'radio' value='first' name='question' onChange='point1();'>" + questions[j].first + "</br>"
        + "<input type=\'radio' value='last' name='question' onChange='point2();'>" + questions[j].last + "</br>"
        + "<input type=\'radio' value='third' name='question' onChange='point3();'>" + questions[j].third + "</br>"
        + "<input type=\'radio' value='for' name='question' onChange='point4();'>" + questions[j].for + "</br>";
    htmlTest += "</div>";
    htmlTest += "</form ><button class='btn btn- primary' id='next' onclick='next()'>Next Question</button></div >";

    document.body.innerHTML = htmlTest;
    j++;
    }
    else {
        alert("End Test\n" + "your grade is:\n" + tziun);
    }

};

//ציון
var tziun = 0;

var xQuestion = 0;

function point1() {
    var xRightAns = 1;
    if (questions[xQuestion].rightAnswer == xRightAns) {
        tziun = tziun + Math.round(100 / questions.length); 
    }
    xQuestion++;
    return tziun;
}
function point2() {
    var xRightAns = 2;
    if (questions[xQuestion].rightAnswer == xRightAns) {
        tziun = tziun + Math.round(100 / questions.length);
    }
    xQuestion++;
    return tziun;
}
function point3() {
    var xRightAns = 3;
    if (questions[xQuestion].rightAnswer == xRightAns) {
        tziun = tziun + Math.round(100 / questions.length);
    }
    xQuestion++;
    return tziun;
}
function point4() {
    var xRightAns = 4;
    if (questions[xQuestion].rightAnswer == xRightAns) {
        tziun = tziun + Math.round(100 / questions.length);
    }
    xQuestion++;
    return tziun;
}

