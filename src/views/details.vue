<template>
	<div>
		<title-bar :titleBar="datas.title" :second="second"></title-bar>
		<div class="details">
			<div class="banner vue-box" v-if="dimg">
				<img :src="datas.images.medium" />
				<div class="vue-boxf1">
					<h4>{{ datas.title }}</h4>
					<h5>{{ datas.original_title }}</h5>
					<div class="num"><span>想看人数：<i>{{ datas.wish_count }}</i></span><span>看过人数：<i>{{ datas.collect_count }}</i></span></div>
					<ul class="clearfix">
						<li>想看</li>
						<li>评价</li>
					</ul>
				</div>
			</div>
			<div class="info">
				<p>{{ datas.summary }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			datas: '',
			dimg: false,
			second: false
		}
	},
	mounted(){
		this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id).then(res => {
			this.datas = res.data
			console.log(this.datas.images.medium);
			this.dimg = !this.dimg;
		})
	},
	components: {
		'title-bar': require('./../components/title-bar.vue')
	}
}
</script>
