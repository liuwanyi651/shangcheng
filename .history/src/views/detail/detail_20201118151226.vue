<template>
<div>
    <!--详情页导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div>
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="pd10 "></div>
    <!--详情图片-->
    <div class="pic bbs">
        <img :src="this.list.image" alt="">
    </div>
    <div class="pd5 mt10">
        ￥{{this.list.name}}
    </div>
    <!--价格-->
    <div class="cr pdl10 bbs pdb10">
        ￥{{this.list.orl_price}}
    </div>
    <!--运费 剩余 取消收藏-->
    <div class="flex j-betw fs14 pd10 bbs">
        <div class="c179">运费：{{this.list.__v}}</div>
        <div class="c179">剩余：{{this.list.amount}}</div>
        <!--判断是否收藏-->
            <!--点击收藏-->
        <div class="c179" v-if="flag" @click="clickCollect">点击收藏：
            <van-icon name="like-o" color="red" size="16px" />
        </div>
            <!--取消收藏-->
        <div class="c179" v-if="!flag" @click="cancelCollect">取消收藏：
            <van-icon name="like" color="red" size="16px" />
        </div>
    </div>
    <div class="pd10 bbs"></div>
    <!--有赞的店 进入店铺-->
    <div class="fs18 bbs">
        <!--cell单元格组件-->
        <van-cell icon="shop-o" is-link to="index" size="large" value="进入店铺">
            <!--使用插槽 把官方渲染出来-->
            <template #title>
                <span class="custom-title">有赞的店</span>
                <van-tag type="danger">官方</van-tag>
            </template>
        </van-cell>
    </div>
    <div class="pd10 bbs"></div>
    <!--最下面标签 客服 购物车等 使用 GoodsActionIcon 商品导航栏组件-->
    <div >
        <van-goods-action class="z">
            <van-goods-action-icon icon="chat-o" text="客服" color="#07c160"  />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <div>
            <!--判断是否收藏-->
            <!--点击收藏-->
            <van-goods-action-icon icon="star-o" text="收藏"  v-if="flag" @click="clickCollect"/>
            <!--点击取消收藏-->
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" v-if="!flag" @click="cancelCollect"/>
            </div>
            <van-goods-action-button type="warning" text="加入购物车" @click="checkLogin" />
            <van-goods-action-button type="danger" text="立即购买" @click="shopNow" />
            <van-popup v-model="show" position="bottom" closeable  close-icon="close" :style="{ height: '30%' }" >
                <div class="box bbs flex">
                    <div class="picture">
                        <img :src="this.list.image" alt="">
                    </div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </van-popup>
        </van-goods-action>
    </div>
    <!--使用标签页组件 分为商品详情 和 商品评论-->
    <div>
        <van-tabs style="">
            <!--这是商品详情的部分-->
            <van-tab title="商品详情" name="a">
                <div class="pic bbs">
                    <!--商品详情 用v-html渲染-->
                    <div v-html="this.list.detail"></div>
                    <div style="height: 60px;"></div>
                </div>
            </van-tab>
            <!--这是商品评论的部分-->
            <van-tab title="商品评论" name="b"></van-tab>
        </van-tabs>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            id: '',
            list: '',
            activeName: 'a', //这是商品详情部分 绑定的 v-model="activeName"
            flag:true,
            user:'',
            show: false,
        }
    },
    components: {},

    methods: {
        getDetail() {
            //mounted两个作用 1：数据初始化 2：发请求
            // console.log(this.$route); //$route 代表 当前路由对象
            this.id = this.$route.query.id //把接收过来的query.id参数 赋值给this.id
            // console.log(this.id); //得到id 068fe09cf2a849b4b8c7ce3fea734072

            //getGoods 单个商品详情
            this.$api.getGoods(this.id).then(res => {
                if (res.code === 200) {
                    // console.log(res);
                    this.list = res.goods.goodsOne //赋值 拿到较近的一层
                    console.log(this.list);
                    if (!res.goods.goodsOne) { //判断商品不存在
                        // console.log(111);
                        this.$toast("该商品不存在"); //不存在则提示
                        this.$router.push("/")
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        },
        //顶部导航返回 点击返回到上一页
        onClickLeft() {
            window.history.go(-1)
        },
        //点击收藏请求
        clickCollect(){
            // 判断 用户没登录的状态 点击收藏会提示
            if(this.user === null){
                this.$dialog.confirm({
                    title:'您当前没有登录',
                    message:'是否跳转到登录页面'
                }).then(()=>{
                    this.$router.push('/register')
                }).catch(()=>{
                    this.$toast('您取消了操作')
                })
            }else{
                this.$api.collect(this.list).then(res =>{
                // console.log(this.list);
                // console.log(res);
                this.flag = false
            }).catch(err =>{
                console.log(err);
            })
            }
        },
        //点击取消收藏
        cancelCollect(){
            this.flag = true
            this.$api.cancel(this.id).then(res =>{
                // console.log(res);
            }).catch(err =>{
                console.log(err);
            })
        },
        //查询商品是否已收藏(post) /isCollection 参数: id:商品的id
         isCollect(){
            //  console.log(111);
             this.$api.Collection(this.id).then(res =>{
                //  console.log(res);
                 if(res.isCollection === 1){  //收藏商品后 返回重新点击这个商品 依然是收藏状态
                     this.flag = false
                    //  console.log(this.flag); 
                 }
             }).catch(err =>{
                 console.log(err);
             })
         },
        // 登录判断 如果未登录点击加入购物车会提示
         checkLogin(){
             this.$checkLogin()
         },
           shopNow() {
      this.show = true;
    },

    },
    mounted() {
        //调用这个方法
        this.getDetail(), //详情页调用
        this.isCollect(),
        this.user = localStorage.getItem('user')

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.pic {
    width: 375px;
    height: 375px;

    img {
        width: 100%;
    }
}

// 官方的按钮样式
.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}
.box{
    height: 100px;
}
.picture{
    width: 80px;
    height: 80px;
    border: 1px solid #EEE;
    img{
        width: 100%;
    }
}
</style>
