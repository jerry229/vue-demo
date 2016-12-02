<template>
	<header class="topBar">
		<input placeholder="搜索你想看的电影">
		<div>
			<a v-if="second" href="javascript:;" class="leftIcon" @click="openSort"></a>
			<a v-else  href="javascript:;" class="goBack" @click="goBack"></a>
			<div class="sideBar" v-show="item">
				<div class="icon">
					<img src="./../assets/img/logo.png" class="img-adapt">
					<div>豆瓣电影</div>
				</div>
				<ul>
					<li @click="getSort('in_theaters')">正在热映</li>
					<li @click="getSort('new_movies')">新片榜</li>
					<li @click="getSort('coming_soon')">即将上映</li>
					<li @click="getSort('us_box')">北美票房榜</li>
					<li @click="getSort('top250')">经典口碑</li>
				</ul>
			</div>
		</div>
		<!--遮罩层-->
		<div class="page-cover" v-if="showZ" @click="closeZ"></div>
	</header>
</template>
<script>
export default {
	data(){
		return {
			item: true,
			sortBar: true,
			showZ: false
		}
	},
	props: ['titleBar','second'],
	methods: {
		goBack(e){
			if(e.target.href === 'javascript:;'){
				history.go(-1);
			}
		},
		openSort(){
			this.showZ = !this.showZ;
			$('.sideBar').addClass('show');
		},
		getSort(m){
			this.$emit('listenTitleBar', m);
			this.showZ = !this.showZ;
			$('.sideBar').removeClass('show');
		},
		closeZ(){
			this.showZ = !this.showZ;
			$('.sideBar').removeClass('show');
		}
	},
	mounted(){
		this.sortBar = this.$route.path === '/list' ? true : false;
	}
}
</script>
