<template>
<div class="all">首页
    <!--使用首页的组件们-->
    <!--头部定位-->
    <positioning></positioning>
    <!--轮播图-->
    <picture></picture>
    <!--商品分类加内测期间-->
    <classification></classification>
    <!--商品推荐-->
    <recommended></recommended>
    <!--1楼休闲食品-->
    <oneFoods></oneFoods>
    <!--2楼新鲜水果-->
    <twoFruit></twoFruit>
    <!--3楼营养奶品-->
    <threeMilk></threeMilk>
    <!--热销商品-->
    <hotSell></hotSell>
</div>
</template>

<script>
//引入首页的组件们
import positioning from "../../../components/home_shop/positioning" //头部定位
import picture from "../../../components/home_shop/picture" //轮播图
import classification from "../../../components/home_shop/classification" //商品分类加内测期间
import recommended from "../../../components/home_shop/recommended" //商品推荐
import oneFoods from "../../../components/home_shop/oneFoods" //1楼休闲食品
import twoFruit from "../../../components/home_shop/twoFruit" //2楼新鲜水果
import threeMilk from "../../../components/home_shop/threeMilk" //3楼营养奶品
import hotSell from "../../../components/home_shop/hotSell" //热销商品

export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    components: {
        //注册组件
        positioning, //定位
        picture, //轮播图
        classification, //商品分类加内测期间
        recommended, //商品推荐
        oneFoods, //1楼休闲食品
        twoFruit, //2楼新鲜水果
        threeMilk, //3楼营养奶品
        hotSell //热销商品
    },
    methods: {},
    mounted() {},
    computed: {},
    watch: {},
};
</script>

<style lang='scss' scoped>
</style>
