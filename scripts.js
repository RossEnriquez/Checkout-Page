let count0 = document.getElementById("counter-val-1");
let count1 = document.getElementById("counter-val-2");

document.getElementById("dec0").addEventListener("click", function(){
    let counter = count0.value;
    if (count0-1 >= 0){
        count0.innerHTML = counter--;
        count0.value = counter;
    }
});
document.getElementById("inc0").addEventListener("click", function(){
    let counter = count0.value;
    count0.innerHTML = counter++;
    count0.value = counter;
});

document.getElementById("dec1").addEventListener("click", function(){
    let counter = count1.value;
    if (count1-1 >= 0){
        count1.innerHTML = counter--;
        count1.value = counter;
    }
});
document.getElementById("inc1").addEventListener("click", function(){
    let counter = count1.value;
    count0.innerHTML = counter++;
    count0.value = counter;
});


