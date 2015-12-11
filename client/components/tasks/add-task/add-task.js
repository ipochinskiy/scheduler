Template.addTask.onCreated(function () {
	var self = this;
	self.autorun(function () {
	});
});

Template.addTask.onRendered(function () {
	Session.set('showAddTaskForm', undefined);
});

Template.addTask.helpers({
	showForm: function() {
		return Session.get('showAddTaskForm');
	}
});

Template.addTask.events({
	'click .add-task': function(event) {
		Session.set('showAddTaskForm', true);
	}
});

Template.addTaskForm.events({
	'click .window-overlay': function(event) {
		event.preventDefault();
		if (event.target.getAttribute('class') === 'window-overlay') {
			Session.set('showAddTaskForm', false);
		}
	}
});