Meteor.methods({
	'task.add': function(message, targetDate) {
		check(message, String);
		check(targetDate, Match.Optional(Date));

		var setQuery = { message: message };
		if (targetDate) { setQuery.targetDate = targetDate; }

		Tasks.insert(setQuery);
	}
});