let count0 = document.getElementById("counter-val-0");
let count1 = document.getElementById("counter-val-1");
let counter = 0;
console.log(typeof parseInt(count0.innerHTML));

document.getElementById("dec0").addEventListener("click", function(){
    counter = parseInt(count0.innerHTML);
    if (counter > 0)
        count0.innerHTML = --counter;
});
document.getElementById("inc0").addEventListener("click", function(){
    counter = parseInt(count0.innerHTML);
    count0.innerHTML = ++counter;
});

document.getElementById("dec1").addEventListener("click", function(){
    counter = parseInt(count1.innerHTML);
    if (counter > 0)
        count1.innerHTML = --counter;
});
document.getElementById("inc1").addEventListener("click", function(){
    counter = parseInt(count1.innerHTML);
    count1.innerHTML = ++counter;
});

//toggles visibility of the dropdown menu
function dropIt(){
    var menu = document.getElementById("drop-content");
    if (menu.style.display == "inline-block")
        menu.style.display = "none";
    else
        menu.style.display = "inline-block";
}

//filters the list of countries by the entered text
function filterCountry(){
    var input, filter, ul, li, a, i;
    input = document.getElementById("input-country"); //input
    filter = input.value.toUpperCase(); //entered keyword
    div = document.getElementById("dropdown");
    a = document.getElementsByTagName("a");
    for (i in a){
        txt = a[i].textContent || a[i].innerText;
        if (txt.toUpperCase().indexOf(filter) > -1) //if the keyword exists in any element
            a[i].style.display = "";
        else
            a[i].style.display = "none"; //make the element disappear
    }
};


