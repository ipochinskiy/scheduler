Template.tasks.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('tasks');
	});
});

Template.tasks.helpers({
	tasks: function () {
		var i = 0;
		return Tasks.fetch().map(function(entry) {
			return {
				index: i++,
				message: entry.message,
				targetDate: entry.targetDate
			}
		});
	}
});

Template.tasks.events({
	'submit #add-task-form': function (event) {
		event.preventDefault();

		// Meteor.call('task.add', ...);
	}
});
