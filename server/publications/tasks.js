Meteor.publish('tasks', function(limit) {
	var projection = { fields: {
			message: 1,
			targetDate: 1
	} };
	return Tasks.find({ ownerId: this.userId }, projection);
});