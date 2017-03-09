var eResults;
var eForm;
var resultsVisible;

// display a string in the output div
function output( s ) {
    console.log("output(" + s + ")");
    if (s.length != 0) {
    eResults.innerHTML += '<p>' + s + '</p>';
    } else {
        eResults.innerHTML += '';
    }
}

// clear the output div
function clearOutput() {
    console.log("clearOutput()");
    eResults.innerHTML = '';
}

// return the display value of a form element
function dispValue( e ) {
    console.log("dispValue(" + e.name + ")");
    v = function(s) { 
        if ((e.name.length != 0) && (s.length != 0)) {
            return e.name + ': ' + s;
        }
        else {
            return '';
        }
    }
    return v(e.value);
}

// display all the form elements
function display() {
    console.log("display() started");
    clearOutput();

    for( var i = 0; i < eForm.length; ++i ) {
        var e = eForm.elements[i];
        var name = e.name;
        output(dispValue(e));
        console.log("display(element("+i+"))");
    }
    
    console.log("eResults.innerHTML: " + eResults.innerHTML);
    
    if (eResults.innerHTML === '') {
        eResults.setAttribute("style", "display: none");
    } else {
        eResults.setAttribute("style", "display: auto");
    }
    
    return false;
}

function init() {
    // initialize elements
    eResults = document.getElementById('results');
    eForm = document.getElementById('f1');
    console.log("Init started.")
    eResults.setAttribute("style", "display: none");
}

window.onload = init;