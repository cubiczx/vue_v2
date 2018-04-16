Vue.component('common-list', {
	props: ['lists'],
	template: `<ul class="list-group">
        <li v-for="item in lists" class="list-group-item">
            {{ item.title }}
        </li>
    </ul>`,
});

var urlPosts = "https://jsonplaceholder.typicode.com/posts";
var urlAlbums = "https://jsonplaceholder.typicode.com/albums";
var urlPhotos = "https://jsonplaceholder.typicode.com/photos";

new Vue({
	el: '#main',
	// Init
	created: function (){
		this.getPosts(),
		this.getAlbums(),
		this.getPhotos()
	},
	data: {
		posts: [],
		albums: [],
		photos: [],
		photosM: [
			{title: 'Photo 1'},
			{title: 'Photo 2'},
		]
	},
	methods: {
		getPosts: function(){
			axios.get(urlPosts).then(response => {
				this.posts = response.data
			});
		},
		getAlbums: function(){
			axios.get(urlAlbums).then(response => {
				this.albums = response.data
			});
		},
		getPhotos: function(){
			axios.get(urlPhotos).then(response => {
				this.photos = response.data
			});
		}
	}
});