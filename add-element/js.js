var frm;
//add form
function myFunctionTwo() {

    var form = document.createElement("FORM"); //create form
    form.setAttribute("id", "myForm"); // id de  form 
    document.body.appendChild(form); //body ===> form 
    frm = document.getElementById("myForm"); // id de form est myfom ligne 6 
}

function myFunction() {

    var lbl = document.getElementById('lbl').value;
    var label = document.createElement("LABEL");
    var t = document.createTextNode(lbl);
    label.setAttribute("for", lbl);
    label.setAttribute("class", "labels");
    label.appendChild(t);
    frm.insertBefore(label, document.getElementById(lbl));

    var Elem = document.getElementById('Elem').value;
    var y = document.getElementById('txt').value;
    var x = document.createElement(Elem);
    x.setAttribute("value", "Bonjour");
    x.setAttribute("type", y);
    x.setAttribute("class", "inp");
    frm.appendChild(x);

}



function json() {
    var label = document.getElementsByClassName('labels');
    var inp = document.getElementsByClassName('inp');
    var arr = [];
    var arr1 = [];

    //let myobj = {};
    for (var i = 0; i < inp.length; i++) {

        arr1.push(inp[i].value);
        arr1.push(inp[i].type);

    }
    for (var i = 0; i < label.length; i++) {

        arr.push(label[i].innerHTML);

    }

    //myobj = { input: arr1, label: arr };
    var obj = new Object();
    obj.input = arr1;
    obj.label = arr;




    let json = JSON.stringify(obj);
    console.log(json);

    document.getElementById('aff').innerHTML = json;
    //var exp = JSON.stringify(arr, null, 2);
}