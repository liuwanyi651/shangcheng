<template>
<div class="all">
    <div class="bg">
        <div class="box">
            <div class="fs24 pd20">登录 / 注册</div>
            <van-form @submit="onSubmit" class="form">
                <!--用户名-->
                <van-field v-model="username" name="用户名" placeholder="USERNAME" :rules="[{ required: true, message: '请填写用户名' }]" />
                <!--密码-->
                <van-field v-model="password" type="password" name="密码" placeholder="PASSWORD" :rules="[{ required: true, message: '请填写密码' }]" />
                <!--手机号-->
                <van-field v-model="tel" type="tel" label="手机号码" placeholder="仅注册需要" :rules="[{ required: true, message: '请填写手机号码' }]" />
                <!--短信验证-->
                <div class="flex a-center">
                    <van-field v-model="note" type="note" label="短信验证" placeholder="仅注册需要" :rules="[{ required: true, message: '请填写短信验证' }]" />
                    <van-button type="primary" class="note_butn">发送验证码</van-button>
                </div>
                <!--验证码-->
                <div class="flex a-center">
                    <van-field v-model="code_auth" type="code_auth" label="验证码" placeholder="请输入验证码" :rules="[{ required: true, message: '请填写验证码' }]" />
                    <div style="width: 190px;margin-left: 10px;" v-html="yzm" @click="clickYzm"></div>
                </div>
                <!--登录-->
                <van-button type="primary" class="but-login">登录</van-button>
                <!--注册-->
                <van-button type="danger" class="but-res" @>注册</van-button>
            </van-form>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    props: {},
    data() {
        return {
            username: '',
            password: '',
            tel: '',
            note: '',
            code_auth: '',
            yzm: ''
        }
    },
    components: {},
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        getData() {
            // 获取验证码
            this.$api.getCode().then(res => {
                // console.log(res); 打印的全部验证码
                this.yzm = res
            }).catch(err => {
                console.log(err);
            })
        },
        clickYzm() {
            this.getData();
        },
        // 点击注册
        signIn() {
            this.$api.registerShop({
                    nickname: this.username, //用户名参数nickname
                    password: this.password, //密码参数password
                    verify: this.code_auth //验证码参数verify
                }).then((res) => {
                    if (res.data.code === 200) {
                        this.$Toast.success(res.data.message)
                        this.$router.push("/")
                        console.log(res.data.message);
                    } else if (res.data.code === 1) {
                        this.$message.warning(res.data.message)
                        this.loginForm.username = ""
                        this.loginForm.password = ""
                        this.loginForm.checkPass = ""
                    }
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        } else {
            console.log("验证错误！！！")
            return false;
        }
    },
    mounted() {
        this.getData();
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 667px;
    background-image: url(../../assets/login.jpg);
    // position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 93%;
    height: 80%;
    background: white;
    margin-top: 50px;
}

.note_butn {
    width: 145px;
    height: 38px;
    margin-right: 10px;
}

.but-login {
    margin-top: 20px;
    width: 80px;
    margin-left: 12px;
}

.but-res {
    width: 80px;
    margin-left: 12px;

}
</style>
