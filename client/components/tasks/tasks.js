Template.tasksList.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('tasks');
	});
});

Template.tasksList.helpers({
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

Template.tasksList.events({
	'submit #add-task-form': function (event) {
		event.preventDefault();

		Meteor.call('task.add');
	}
});
