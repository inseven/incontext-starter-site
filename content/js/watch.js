(function() {

    function getLastModified(element) {
        return document.evaluate("//meta[contains(@http-equiv, 'last-modified')]",
                                 element,
                                 null,
                                 XPathResult.FIRST_ORDERED_NODE_TYPE,
                                 null).singleNodeValue.content;
    }

    var lastModified = getLastModified(document);

    function checkForUpdate() {
        fetch(window.location.href, {cache: "no-cache"})
        .then(response => response.text())
        .then(function(text) {
            var html = document.createElement( 'html' );
            html.innerHTML = text;
            let updatedLastModified = getLastModified(html)
            if (updatedLastModified != lastModified) {
                location.reload();
            }
        });
    }

    setInterval(checkForUpdate, 5000);

})();
