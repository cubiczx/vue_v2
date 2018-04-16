new Vue({
	el: '#main',
	data: {
		lists: [],
		name: '',
	},
	methods: {
		getUsers: function(){
			var urlUsers = 'https://jsonplaceholder.typicode.com/users';
			axios.get(urlUsers).then(response => {
				this.lists = response.data
			});
		}
	},
	// Variables con logica aplicada
	computed: {
		searchUser: function () {
			return this.lists.filter((item) => item.name.includes(this.name));
		}
	}
});