new Vue({
	el: '#main',
	data: {
		people: ['Xavi', 'Ana', 'Marta']
	},
	name: '',
	methods: {
		addName: function(){
			this.people.push(this.name);
			this.name = '';
		}
	}
});