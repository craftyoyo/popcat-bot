var gg = new KeyboardEvent('keydown', {
	key: 'f',
	ctrlKey: true
});
var g = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});
var ggg = new KeyboardEvent('keydown', {
	key: 's',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(g);
		 //document.dispatchEvent(gg);
		 //document.dispatchEvent(ggg);

	}
}, 0);
