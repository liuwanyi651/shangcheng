<template>
<div>
    <div class=" t-center bgc-w" style="height: 40px;line-height: 40px; border-bottom:1px solid rgb(231, 225, 225);">购物车</div>
    <div class="car ">
        <div class="car_yuan m bor-r">
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
    width: 100%;
    height: 150px;
    background-color: rosybrown;
}

.car_yuan {
    width: 180px;
    height: 180px;
    background: seagreen;
    overflow: hidden;

    img {
        width: 180px;
        height: auto;
    }
}
</style>
