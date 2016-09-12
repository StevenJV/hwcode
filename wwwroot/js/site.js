// site.js
(function () {
    var ele = $("#username");
    ele.text("Grumpy Grandpa");

    var main = $("#main");
    main.on("mouseenter", function () {
        main.css("background-color", "#888" );
    });

    main.on("mouseleave", function () {
        main.css("background-color", "#eee" );
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function() {
        var me = $(this);
        alert(me.text());
    });
})();
