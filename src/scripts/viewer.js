
// Folder listing for Viewer
fs.readdirSync(imgPath).forEach(file => {
    $("#sourcelist").append(
        $("<option>").attr("value", `${file}`).append(`${file}`)
    );  
});


(function() {
    $("#vButto").attr("disabled", "disabled");
    $("#viewerForm input").on("keyup change", function() {

        let empty = false;
        $("form input").each(function() {
            // Check if any input value is empty
            if ($(this).val() == "") {
                empty = true;
            }
        });

        if (empty) {
            $("#butto-kun").attr("disabled", "disabled");
        } else {
            $("#butto-kun").removeAttr("disabled");
        }
    });
})();