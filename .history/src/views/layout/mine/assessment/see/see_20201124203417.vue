<template>
  <div>
     <!--导航返回部分 使用NavBar导航栏组件 left-arrow 是否显示左侧箭头-->
    <div >
        <van-nav-bar left-text="返回"  title="评价详情" left-arrow @click-left="onClickLeft" fixed />
    </div>
    <div class="mt50"></div>
    <div class="flex h50 ">
        <div class="w-20">
            <div class="picc">
                <img src="../../../../../assets/login.jpg" alt="">
            </div>
        </div>
        <div class="w-40">kakakk</div>
        <div class="w-40"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
      //返回至 我的-评价
        onClickLeft() {
            this.$router.push("/assessment")
        },
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.picc{
    width: 80px;
    height: 80px;
    border-radius:50%;
    background: rgb(88, 49, 49);
    img{
        width: 100%;
    }
}
</style>