<template>
<div>
    <div class="t-center m10 cr">热销商品</div>
    <!--采用vant的Grid宫格组件 一行2个-->
    <van-grid :border="false" :column-num="2" class="">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index" class="hot">
            <div>
                <van-image :src="item.image" />
            </div>
            <!--商品的名字--->
            <div class="name fs14 t-center">{{item.name}}</div>
            <!--商品的价格--->
            <div class="flex">
                <!--现价-->
                <div class="t-center">￥{{item.price}}</div>
                <div>￥{{item.price}}</div>
            </div>
        </van-grid-item>

    </van-grid>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: '',
    props: {},
    data() {
        return {
            hotGoods: []
        }
    },
    components: {},
    methods: {
        getData() {
            //获取首页分类
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res);
                    this.hotGoods = res.data.hotGoods
                    // console.log(res.data);

                }
            }).catch(res => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getData()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.hot {
    border: 1px solid rgb(231, 225, 225);
}

.name {
    text-overflow: ellipsis; //ellipsis:表示对象文本溢出时显示省略标记，省略标记插入的位置是最后一个字符。
    white-space: nowrap; //强制文本在一行内显示
    overflow: hidden; //溢出内容为隐藏
    width: 169px; //设置一个宽度
}
</style>
