<template>
  <div>
  <!--详情页导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div>
        <van-nav-bar left-text="返回" title="订单结算" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="mt40">
    <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit"/>
    <div >
        <div class="bbs flex">
            <div class="pic">
                <img :src="this.list.img" alt="">
            </div>
            <div class="cr fs14">
                <div>
                {{this.list.name}}
                </div>
                <div>
                 ￥{{this.list.price}}
                </div>
            </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
         currentContact: {
            name: '张三',
            tel: '13000000000', 
      },
       orderpay:{},
            list:{}
    }
  },
  components: {},
  methods: {
       //顶部导航返回 点击返回到上一页
        onClickLeft() {
            window.history.go(-1)
        },
         onEdit(){
      this.$toast('编辑');
    },
     getOrder(){
        // console.log(this.$route); 
        let orderpay = this.$route.query.data || this.$route.params.data
        // console.log(orderpay);//打印 query 获取的东西
        this.list = JSON.parse(orderpay) //把字符串转换成对象 赋给 this.list
        console.log( this.list);


     }
  },
  mounted() {
          this.getOrder()
  },
  computed: {
     
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.pic{
    width: 100px;
    height: 100px;
    border: 1px solid #EEE;
    img{
        width: 100%;
    }
}
</style>