Router.route('/', { name: 'hello' });

HelloController = RouteController.extend({
	action: function() {
		this.render();
	}
});