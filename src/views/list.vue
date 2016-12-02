<template>
	<div>
		<title-bar :titleBar="title" :second="second" @listenTitleBar="movieSort"></title-bar>
		<div class="movie">
			<ul>
				<li v-for="item in items" class="clearfix">
					<router-link :to="{name: 'details', params: {id: item.id}}">
						<img :src="item.images.large" />
						<div class="info vue-boxf1">
							<h3>{{ item.title }}</h3>
							<div class="score">
								<span>观众<i>{{ item.rating.average }}</i></span>
								<span>专业<i>{{ item.rating.min }}</i></span>
							</div>
							<p>主演：
								<span v-for="cast in item.casts">
									<router-link :to="{name: 'celebrity', params: {id: cast.id}}">{{ cast.name }}</router-link>
								</span>
							</p>
							<p>类型：<span v-for="genre in item.genres">{{ genre }}</span></p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			title: '电影',
			items: '',
			nav: 'in_theaters',
			second: true
		}
	},
	methods: {
		movieSort(sort){
			this.nav = sort;
			this.getMovieList(this.nav);
		},
		getMovieList(params){
			this.$http.jsonp('https://api.douban.com/v2/movie/'+params+'?count=40').then(res => {
				this.items = res.data.subjects;
				//console.log(res.data);
			})
		}
	},
	watch: {
		nav(n, o){
			console.log(n, o);
		}
	},
	mounted(){
		let nav = this.nav;
		this.getMovieList(nav);
		console.log('测试');
	},
	components: {
		'title-bar': require('./../components/title-bar.vue')
	}
}
</script>
