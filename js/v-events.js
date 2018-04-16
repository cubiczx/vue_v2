new Vue({
	el: '#main',
	data: {
		people: ['Xavier', 'Paco', 'Miguel'],
		name: '',
		num: 0,
	},
	methods: {
		addName:  function(){
			this.people.unshift(this.name);
			this.people.push(this.name);
			this.name = '';
		}
	}
});