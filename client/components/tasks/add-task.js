Template.addTask.onCreated(function () {
	var self = this;
	self.autorun(function () {
	});
});

Template.addTask.onRendered(function () {
	Session.set('showAddTaskForm', undefined);
});

Template.addTask.helpers({
	showAddForm: function() {
		return Wallets.find({ active: true }).count() > 0;
	}
});

Template.addTask.events({
	'click button.add-task': function() {
		Session.set('showAddTaskForm', true);
	}
});