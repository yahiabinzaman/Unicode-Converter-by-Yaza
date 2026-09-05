(function () {
    var csInterface = new CSInterface();
    var btnConvert = document.getElementById("btnConvert");
    var statusMsg = document.getElementById("statusMsg");
    var targetFontSelect = document.getElementById("targetFontSelect");
    var authorLink = document.getElementById("authorLink");

    // Open GitHub link in default OS browser
    if (authorLink) {
        authorLink.addEventListener("click", function (e) {
            e.preventDefault();
            var githubUrl = "https://github.com/yahiabinzaman";
            try {
                if (window.cep && window.cep.util && window.cep.util.openURLInDefaultBrowser) {
                    window.cep.util.openURLInDefaultBrowser(githubUrl);
                } else if (csInterface && csInterface.openURLInDefaultBrowser) {
                    csInterface.openURLInDefaultBrowser(githubUrl);
                } else {
                    window.open(githubUrl, "_blank");
                }
            } catch (err) {
                window.open(githubUrl, "_blank");
            }
        });
    }

    function updateRadioClasses(name) {
        var radios = document.querySelectorAll('input[name="' + name + '"]');
        radios.forEach(function (r) {
            var item = r.closest(".radio-item");
            if (item) {
                if (r.checked) item.classList.add("active");
                else item.classList.remove("active");
            }
        });
    }

    document.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener("change", function () {
            updateRadioClasses(this.name);
        });
    });

    function showStatus(text, isSuccess) {
        statusMsg.textContent = text;
        statusMsg.className = "status-msg " + (isSuccess ? "success" : "error");
        setTimeout(function () {
            statusMsg.style.display = "none";
        }, 6000);
    }

    btnConvert.addEventListener("click", function () {
        var scope = document.querySelector('input[name="scope"]:checked').value;
        var version = document.querySelector('input[name="version"]:checked').value;
        var targetFont = targetFontSelect.value;

        btnConvert.disabled = true;
        btnConvert.textContent = "Converting...";

        var scriptCall = 'convertDocText(' + JSON.stringify(scope) + ', ' + JSON.stringify(version) + ', ' + JSON.stringify(targetFont) + ')';

        csInterface.evalScript(scriptCall, function (result) {
            btnConvert.disabled = false;
            btnConvert.textContent = "Convert Document";

            if (result && result.indexOf("SUCCESS:") === 0) {
                var count = result.replace("SUCCESS:", "");
                showStatus("Converted " + count + " text frame(s) successfully!", true);
            } else if (result && result.indexOf("ERROR:") === 0) {
                showStatus(result.replace("ERROR:", "").trim(), false);
            } else {
                showStatus(result || "Conversion finished.", true);
            }
        });
    });
})();
