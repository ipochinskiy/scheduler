Tasks.attachSchema(new SimpleSchema({
	message: {
		type: String,
		label: 'Description of what actually the task is for'
	},
	targetDate: {
		type: Date,
		label: 'The date on that the task is to be accomplished'
	},
	ownerId: {
		type: String,
		label: 'Id of the user the task is owned by',
		autoValue: function() {
			if (this.isInsert) {
				return Meteor.userId();
			} else {
				this.unset();
			}
		},
		denyUpdate: true
	},
	creationDate: {
		type: Date,
		label: 'Date of creation the task',
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return { $setOnInsert: new Date() };
			} else {
				this.unset();
			}
		},
		denyUpdate: true
	},
	lastChange: {
		type: Date,
		label: 'Date of last modifying the task',
		autoValue: function() {
			return new Date();
		}
	}
}));