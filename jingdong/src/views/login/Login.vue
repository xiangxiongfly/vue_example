<template>
    <div class="wrapper">
        <img class="wrapper__img" src="../../assets/images/user.png">
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="text" placeholder="用户名" v-model="username">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="请输入密码" v-model="password"
                autocomplete="new-password" />
        </div>
        <div class="wrapper__login__login" @click="handleLogin">登录</div>
        <div class="wrapper__login__register" @click="handleToRegister">立即注册</div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
import Toast, { useToastEffect } from "../../components/Toast.vue"

// 登录逻辑
const useLoginEffect = (showToast) => {
    const router = useRouter()
    const data = reactive({ username: "", password: "" })
    const handleLogin = () => {
        if (data.username === "abc" && data.password === "123456") {
            showToast("登录成功")
            localStorage.isLogin = true
            setTimeout(() => {
                router.push({ name: "home" })
            }, 1000)
        } else {
            showToast("登录失败")
        }
    }
    const { username, password } = toRefs(data)
    return { username, password, handleLogin }
}

// 注册逻辑
const useRegisterEffect = () => {
    const router = useRouter()
    const handleToRegister = () => {
        router.push({ name: "register" })
    }
    return { handleToRegister }
}

export default {
    name: "Login",
    components: { Toast },
    setup() {
        const { show, toastMessage, showToast } = useToastEffect()
        const { username, password, handleLogin } = useLoginEffect(showToast)
        const { handleToRegister } = useRegisterEffect()
        return { show, toastMessage, username, password, handleLogin, handleToRegister }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    &__img {
        display: block;
        margin: 0 auto .4rem auto;
        width: 0.66rem;
        height: 0.66rem;
    }

    &__input {
        height: 0.48rem;
        margin: 0 0.4rem 0.16rem 0.4rem;
        padding: 0 0.16rem;
        background-color: #f9f9f9;
        border: 0.01rem solid rgba(0, 0, 0, 0.1);
        border-radius: 0.06rem;

        &__content {
            width: 100%;
            margin-top: 0.12rem;
            line-height: 0.22rem;
            border: none;
            outline: none;
            background: none;
            font-size: 0.16rem;
            color: $input-color;

            &::placeholder {
                color: $hint-color;
            }
        }
    }

    &__login__login {
        margin: 0.32rem 0.4rem 0.16rem 0.4rem;
        line-height: 0.48rem;
        background-color: $btn-bgColor;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
        border-radius: 0.04rem;
        color: $btn-color;
        font-size: 0.16rem;
        text-align: center;
    }

    &__login__register {
        text-align: center;
        font-size: 0.14rem;
        color: $btn-notice-color;
    }
}
</style>