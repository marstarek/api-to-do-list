//task 1
//1-get response from server
//2-pars(it)
//3-fillter it
//4-condition  if complet or not
//5-appand them to div with color style
var button = document.getElementById("searchTodo");
var select1 = document.getElementById("completed");
var select2 = document.getElementById("notcompleted");
var selector = document.getElementById("selector");
var reset = document.getElementById("reset");
var x = document.getElementById("selector").value;
var userselec = document.getElementById("testx");

let todo = new URL("https://jsonplaceholder.typicode.com/todos");
let xml = new XMLHttpRequest(); //new request
xml.open("GET", todo); //to open this request
button.addEventListener("click", function() {
    if (document.getElementById("myUL").getElementsByTagName("li").length < 1) {
        xml.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resulte = JSON.parse(this.responseText);
                for (let item of resulte) {
                    var myUL = document.getElementById("myUL");
                    if (item.completed == true) {
                        var li = document.createElement("li");
                        li.setAttribute("style", "background-color:#34ace0;");
                        li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;

                        myUL.appendChild(li)
                    } else if (item.completed !== true) {
                        var li = document.createElement("li");
                        li.setAttribute("style", "background-color:#ff5252;color:#fff");
                        li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;
                        myUL.appendChild(li);
                    }
                }
            }
        }
        xml.open("GET", todo, true);
        xml.send();
    } else { alert("you have load data before") }
});
reset.addEventListener("click", resetdata);

function resetdata() {
    var resetchild = document.getElementById("myUL");
    var reseftchild = resetchild.firstChild;
    while (reseftchild) {
        resetchild.removeChild(reseftchild);
        reseftchild = resetchild.firstChild;
    }
}
selector.addEventListener("change", selectcom);

function selectcom() {
    let xml2 = new XMLHttpRequest(); //new request
    xml2.open("GET", todo, true); //to open this reques
    xml2.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resulte2 = JSON.parse(this.responseText);
            var x = document.getElementById("selector").value;
            var myUL = document.getElementById("myUL");

            for (let item of resulte2) {
                if (item.completed == true && x == "completed") {
                    var li = document.createElement("li");
                    li.setAttribute("style", "background-color:#34ace0;");
                    li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;
                    myUL.appendChild(li);
                } else if (item.completed !== true && x == "notcompleted") {
                    var li = document.createElement("li");
                    li.setAttribute("style", "background-color:#ff5252;color:#fff");
                    li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;
                    myUL.appendChild(li);
                }
            }
        }
    };
    xml2.open("GET", todo, true);
    xml2.send();
    resetdata();
}
userselec.addEventListener("change", selectuser);

function selectuser() {
    resetdata();
    if (document.getElementById("myUL").getElementsByTagName("li").length < 1) {
        xml.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resulte = JSON.parse(this.responseText);
                var y = document.getElementById("testx").value;
                console.log(y);
                for (let item of resulte) {
                    var myUL = document.getElementById("myUL");
                    if (item.userId == y) {
                        if (item.completed == true) {
                            var li = document.createElement("li");
                            li.setAttribute("style", "background-color:#34ace0;");
                            li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;
                            myUL.appendChild(li);
                        } else if (item.completed !== true) {
                            var li = document.createElement("li");
                            li.setAttribute("style", "background-color:#ff5252;");
                            li.innerText = "this is id" + " ::" + item.id + " and title  " + item.title;
                            myUL.appendChild(li);
                        }
                    }
                }
            }
        }
        xml.open("GET", todo, true);
        xml.send();
    }
}