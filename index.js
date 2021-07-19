document.querySelector("button").addEventListener("click", function () {
    let str = document.querySelector("textarea").value;
    document.querySelector(".stats").innerHTML = str.split(' ').length;
});

