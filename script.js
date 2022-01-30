let input = [];

const btns = document.querySelectorAll('.btn')

const add = function(x, y) {
    return x + y;
}

const subtract = function(x,y) { 
    return x - y;
}

const divide = function(x,y) { 
    return x / y;
}

const multiply = function(x,y) { 
    return x * y;
}

for (const btn of btns) {
    btn.addEventListener("click", function() {
        input.push(this.value);
    });
}