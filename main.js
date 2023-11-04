document.addEventListener("DOMContentLoaded", function stop(){

    const sub = document.querySelector("#submit");
    const tex = document.querySelector("#text");

    sub.disabled = true;

    tex.onkeyup = function() {
        if(tex.value.length >= 5){
            sub.disabled = false;
        } else {
            sub.disabled = true;
        }
    }
        
});

document.querySelector("form").onsubmit = function() {

    var info = document.querySelector("#text").value;

    var Li = document.createElement("li");

    document.querySelector("#infor").appendChild(Li);

    Li.innerHTML = info;


    document.querySelector("#text").value = '';
    document.querySelector("#submit").disabled = true;

    return false;

};

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("li").remove();
}

);






// edit on element H1 

document.querySelector("#edit").addEventListener("click", () => {
    document.querySelector("#fifteen").innerHTML = "This is task 15";
}

);