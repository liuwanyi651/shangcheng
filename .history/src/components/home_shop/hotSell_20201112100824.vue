<template>
<div>
    <div class="t-center m10 cr">热销商品</div>
    <!--采用vant的Grid宫格组件 一行2个-->
    <van-grid :border="false" :column-num="2" class="">
        <van-grid-item v-for="(item,index) in hotGoods" :key="index" class="hot" @click="goto(item.id)">
            <!--绑定一个事件 路由传参-->
            <!--相应的图片-->
            <div>
                <van-image :src="item.image" />
            </div>
            <!--商品的名字--->
            <div class="name fs14 t-center">{{item.name}}</div>
            <!--商品的价格--->
            <div class="flex">
                <!--现价-->
                <div class="t-center">￥{{item.price}}</div>
                <!--原价-->
                <div class="mall cr fs12 txd-l">￥{{item.mallPrice}}</div>
            </div>
        </van-grid-item>
    </van-grid>
    <!--空盒子-->
    <div style=" height: 50px;"></div>
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
                    // console.log(res);
                    // 获取首页热销商品的数据
                    this.hotGoods = res.data.hotGoods
                    // console.log(res.data);

                }
            }).catch(res => {
                console.log(err);
            })
        },
        //路由传参
        goto(item) {
            //push还可以传入一个对象 对象可以传入path属性 也可以传入name属性 name是路由配置的name 不是组件内部的name
            this.$router.push({
                name: 'detail', //路由跳转到detail详情页面
                //query传参  query又是一个对象
                query: ''
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

.mall {
    padding: 4px 0;
}
</style>
