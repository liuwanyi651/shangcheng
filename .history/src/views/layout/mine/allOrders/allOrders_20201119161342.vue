<template>
<div>
    <!--使用NavBar 导航栏组件-->
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--使用Tab 标签页组件-->
    <van-tabs v-model="activeName">
        <van-tab title="全部" class="t-center mt30" name='a'>开发中，敬请期待</van-tab>
        <van-tab title="待支付" class="t-center mt30" name='b'>开发中，敬请期待</van-tab>
        <van-tab title="待发货" class="t-center mt30" name='c'>开发中，敬请期待</van-tab>
        <van-tab title="待收货" class="t-center mt30" name='d'>开发中，敬请期待</van-tab>
        <van-tab title="已完成" class="t-center mt10 bbsb" name='e'>
        <!--第一层循环 拿到不同的商品--->
            <div class="bbsb"></div>
            <div v-for="(item,index) in list" :key='index' class="mb10 bbsb">
             <!--第二层循环 拿到不同的商品 对应的价格 时间 数量等--->
                <div v-for="(item1,index) in item.order_list" :key='index' class="bbs">
                    <div class="fs14 t-left bbs pd1020">订单编号：{{item1.order_id}}
                        <span class="cy pdl50">交易完成</span>
                    </div>
                    <div class="flex bbs">
                        <div class="pic bs">
                            <img :src="item1.image_path" alt="">
                        </div>
                        <div class="pd10 fs14 flex" style="width: 176px;">
                            {{item1.name}}
                        </div>
                        <div>
                         <div class="cr pdt10">￥{{item1.present_price}}</div>
                         <div class="fs14 pdt20 c5 ">x {{item1.count}}</div>
                        </div>
                    </div>
                    <div class="cg fs14 pd5 t-end ">
                        创建时间：{{item.add_time}}
                    </div>
                    <div class="cg fs14 t-end pdlr10">
                        收货地址：{{item.address}}
                    </div>
                    <div class="cr fs14 t-end pdlr10 mt5">
                        合计：￥{{item.mallPrice}}元
                    </div>
                </div>
                    
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: "e" ,//默认是第一个
            list:[],
            
        }
    },
    components: {},
    methods: {
        // 返回至 我的
        onClickLeft() {
            this.$router.push("/Mine")
        },
        getFinish(){
            //订单查询(get)
            this.$api.getShopMyOrder().then(res =>{
                if(res.code===200){
                    console.log(res);
                    this.list = res.list
                    console.log(this.list);
                }
            }).catch(err =>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getFinish()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    width: 100px;
    height: 100px;
    margin: 10px;
    img{
        width: 100%;
    }
}
</style>
