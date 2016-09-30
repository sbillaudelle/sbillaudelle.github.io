window.addEvent('domready', function(img) {
	$$('article img').each(function(img) {
		new Image(img);
	});
});

var Image = new Class({
	initialize: function(original) {
		this.original = original;
		
		console.log(original.src);

		var wrapper = new Element('div.image-wrapper');
		if(original.hasClass('half')) {
			wrapper.addClass('half');
		}
		if(original.hasClass('right')) {
			wrapper.addClass('right');
		}
		wrapper.wraps(original);

		var label = new Element('div.image-label');
		label.set('text', original.get('alt'));
		label.inject(wrapper);

		// set up zoom window
		var shade = new Element('div.image-shade');
		shade.fade('hide');
		
		var dialog = new Element('div.image-dialog');
		dialog.inject(shade);

		var fatty = original.clone();
		fatty.inject(dialog);

		var caption = new Element('span.image-label');
		caption.set('text', original.get('alt'));
		var dummy = new Element('div.image-label-container');
		caption.inject(dummy);
		dummy.inject(dialog);

		shade.inject($(document.body));

		shade.set('tween', {duration: 100});

		original.addEvent('click', function() {
			shade.fade('in');
		});

		shade.addEvent('click', function() {
			shade.fade('out');
		});

		caption.addEvent('click', function() {
			shade.fade('out');
		});

		label.addEvent('click', function() {
			shade.fade('in');
		});

		fatty.addEvent('click', function() {
			shade.fade('out');
		});
	}
});
