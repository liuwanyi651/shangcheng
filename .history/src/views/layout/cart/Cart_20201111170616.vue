<template>
<div>
    <div class=" t-center bgc-w" style="height: 40px;line-height: 40px; border-bottom:1px solid rgb(231, 225, 225);">购物车</div>
    <div class="car m bor-r">
        <div class="car_yuan">
            <img src="../../../assets/shop.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.car {
    width: 60%;
    height: 150px;
}

.car_yuan {
    width: 100px;
    height: 100px;
    background: seagreen;
    overflow: hidden;

    .img {
        width: 100%;
    }
}
</style>
