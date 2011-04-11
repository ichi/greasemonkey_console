var console = {
    print: function(level, arg){
	unsafeWindow.console[level].apply(unsafeWindow.console, Array.slice(arg));
    }
};
['log', 'info', 'error'].forEach(function(level){
    console[level] = function(){
        console.print(level, arguments);
    };
});
