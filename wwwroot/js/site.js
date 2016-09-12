// site.js
(function () {
    var ele = $("#username");
    ele.text("Grumpy Grandpa");

    var main = $("#main");
    main.on("mouseenter", function () {
        $( this ).css( "background-color", "#888" );
        // not sure why this syntax does not work for me.
        // main.style = "background-color: #888;";
    });

    main.on("mouseleave", function () {
        $( this ).css( "background-color", "#eee" );
    });

})();
