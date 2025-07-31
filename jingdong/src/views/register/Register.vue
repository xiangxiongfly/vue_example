<template>
    <div class="backup" @click="handleBackup">返回</div>
    <div class="wrapper">
        <img class="wrapper__img" src="../../assets/images/user.png">
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="text" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="请输入密码" autocomplete="new-password"
                v-model="password">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="确认密码" v-model="ensurement">
        </div>
        <div class="wrapper__register__btn" @click="handleRegister">注册</div>
        <div class="wrapper__register__link" @click="handleToLogin">已有账号去登录</div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>

<script>
import { useRouter } from "vue-router"
import { reactive, toRefs } from "vue"
import Toast, { useToastEffect } from "../../components/Toast.vue"

const useRegisterEffect = (showToast) => {
    const router = useRouter()
    const data = reactive({
        username: "",
        password: "",
        ensurement: ""
    })
    const handleRegister = () => {
        if (data.password !== data.ensurement) {
            showToast("两次密码不一样！")
            return
        }
        if (data.username === "abc" && data.password === "123456") {
            showToast("注册成功")
            setTimeout(() => {
                router.replace({ name: "login" })
            }, 1000)
        } else {
            showToast("注册失败")
        }
    }
    const { username, password, ensurement } = toRefs(data)
    return { username, password, ensurement, handleRegister }
}

const useLoginEffect = () => {
    const router = useRouter()
    const handleToLogin = () => {
        router.replace({ name: "login" })
    }
    return { handleToLogin }
}

export default {
    name: "Register",
    components: { Toast },

    setup() {
        const router = useRouter()
        function handleBackup() {
            router.back()
        }
        const { show, toastMessage, showToast } = useToastEffect();
        const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast)
        const { handleToLogin } = useLoginEffect();
        return { show, toastMessage, showToast, username, password, ensurement, handleRegister, handleToLogin, handleBackup }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

.backup {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    font-size: 0.2rem;
}

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    &__img {
        display: block;
        margin: 0 auto 0.4rem;
        width: 0.66rem;
        height: 0.66rem;
    }

    &__input {
        height: 0.48rem;
        padding: 0 0.16rem;
        margin: 0 0.4rem 0.16rem;
        background-color: #F9F9F9;
        border: 0.01rem solid rgba(0, 0, 0, 0.10);
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

    &__register__btn {
        margin: 0.32rem 0.4rem 0.16rem 0.4rem;
        line-height: 0.48rem;
        background-color: $btn-bgColor ;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
        border-radius: 0.04rem;
        color: $btn-color;
        font-size: 0.16rem;
        text-align: center;
    }

    &__register__link {
        text-align: center;
        font-size: 0.14rem;
        color: $btn-notice-color;
    }
}
</style>