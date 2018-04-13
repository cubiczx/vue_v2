new Vue({
	el: "#appVue",
	data: {
		lists: [
			{keep: 'one', completed: true},
			{keep: 'two', completed: false},
			{keep: 'three', completed: true},
		],
		newKeep: ''
	},
	methods: {
		addKeep: function() {
			this.lists.push({keep: this.newKeep, completed: false});
			this.newKeep = '';
		}
	}
});