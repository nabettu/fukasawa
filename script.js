document.body.appendChild(document.createElement("script")).src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";

setTimeout(function() {
    $.ajax({
        url: "//nabettu.github.io/fukasawa/adjective.csv",
        dataType: "json",
        success: function(data) {
            var regExp = new RegExp(data.join("|"), "g");
            document.body.innerHTML = document.body.innerHTML.replace(regExp, "ヤバい")
        }
    });
}, 1000);
