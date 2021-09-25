let counter = 0;
document.getElementById("dec").addEventListener("click", function(){
    counter--;
    document.getElementById("counter-val-1").innerHTML = counter;
});
document.getElementById("inc").addEventListener("click", function(){
    counter++;
    document.getElementById("counter-val-1").innerHTML = counter;
});
