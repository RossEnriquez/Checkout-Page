let counter = 0;
document.getElementById("dec").addEventListener("click", function(){
    counter--;
    document.getElementById("counter-val").innerHTML = counter;
});
document.getElementById("inc").addEventListener("click", function(){
    counter++;
    document.getElementById("counter-val").innerHTML = counter;
});