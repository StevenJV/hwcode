// site.js
(function () {
    var ele = $("#username");
    ele.text("Grumpy Grandpa");

    var main = document.getElementById("main");
    main.onmouseenter = function () {
    main.style.backgroundColor = "#888";
    }

    main.onmouseleave = function () {
    main.style.backgroundColor = "";
    }
})();
