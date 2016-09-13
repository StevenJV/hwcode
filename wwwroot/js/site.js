// site.js
(function () {
    var ele = $("#username");
    ele.text("Grumpy Grandpa");
    var $sidebarAndWrapper = $("#sidebar,#wrapper"); //jQuery wrapped set
    $("#sidebarToggle").on("click", function() {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
})();
