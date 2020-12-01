import { Utilities } from './utilities.js';

Utilities.observe( ( root ) => {
    var elements = document.evaluate( "//a", root, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    for ( let i = 0, length = elements.snapshotLength; i < length; ++i ) {
        var element = elements.snapshotItem( i );
        if (element.hasAttribute( "href" ) &&
            element.getAttribute( "href" ).startsWith("http") &&
            element.target != "_blank" ) {
            element.target="_blank";
        }
    }
});
