<template>
    <div>
        <title-bar :titleBar="datas.title" :second="second"></title-bar>
        <div class="celebrity" v-if="dimg">
            <div class="bg">
                <div class="clb-pic">
                    <img :src="datas.avatars.medium" class="img-adapt" />
                </div>
                <div class="clb-name">
                    <h3>{{ datas.name }}</h3>
                    <h5>{{ datas.name_en }}</h5>
                    <span>关注</span>
                </div>
            </div>
            <ul class="clb-de vue-box">
                <li class="vue-boxf1">
                    <i>120</i>
                    <span>影人综合排名</span>
                </li>
                <li class="vue-boxf1">
                    <i>815</i>
                    <span>粉丝</span>
                </li>
                <li class="vue-boxf1">
                    <i>19.1亿</i>
                    <span>主要作品票房</span>
                </li>
            </ul>
            <div class="clb-info">
                <h4>导演|演员</h4>
                <ul>
                    <li>出生地：{{ datas.born_place }}</li>
                    <li>简介：暂无数据...</li>
                </ul>
            </div>
            <div class="clb-works">
                <h4>作品</h4>
                <ul>
                    <li v-for="work in works" class="vue-box">
                        <img :src="work.subject.images.medium">
                        <div class="vue-boxf1">
                            <h4>片名：{{ work.subject.title }}</h4>
                            <p>主演：
								<span v-for="cast in work.subject.casts">
									{{ cast.name }}
								</span>
                            </p>
                            <p>类型：<span v-for="genre in work.subject.genres">{{ genre }}</span></p>
                            <h5>上映时间：{{ work.subject.year }}</h5>
                        </div>
                    </li>
                </ul>
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
			second: false,
			works: '',
		}
	},
	mounted(){
		this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/'+this.$route.params.id).then(res => {
			this.datas = res.data;
			this.works = res.data.works;
			this.dimg = !this.dimg;
			console.log(this.works);
		})
	},
	components: {
		'title-bar': require('./../components/title-bar.vue')
	}
}
</script>
