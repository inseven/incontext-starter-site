var Utilities = {

    observe: function( callback ) {
        const observer = new MutationObserver( function( mutations, observer ) {
            mutations.forEach( function( mutation ) {
                for ( let i = 0; i < mutation.addedNodes.length; i++ ) {
                    callback( mutation.addedNodes[i] );
                }
            } );
        } );
        observer.observe( document.body, { attributes: true, childList: true, subtree: true } );
        callback( document.body );
    },

}

export { Utilities };
