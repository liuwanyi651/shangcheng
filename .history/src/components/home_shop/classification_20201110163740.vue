<template>
<div>分类和内测期间</div>
</template>

<script>
import axios from "axios"
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {
        getData() {
            this.$api.getRecommend().then(res => {
                if (res.code === 200) {
                    console.log(res);
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

</style>
