<style lang="less">
@import "./login.less";
</style>

<template>
<div class="preinit login" @keydown.enter="handleSubmit">
    <div class="login-con animated fadeInDown">
        <div class="login-con-logo">
            <img src="../images/logo/y_logo.png">
            <p>Sign in to Moonets</p>
        </div>
        <Card :bordered="true">
            <p slot="title">
                <Icon type="ios-ionitron-outline login-con-welcome" /> welcome
            </p>
            <div class="form-con">
                <Form ref="loginForm" :model="form">
                    <FormItem prop="userName">
                        <span class="form-con-title">Username</span>
                        <Input v-model="form.username" placeholder="username" style="width: 100%">
                        <Icon type="md-person" slot="prefix" />
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <span class="form-con-title">Password</span>
                        <Input type="password" v-model="form.password" placeholder="password" style="width: 100%">
                        <Icon type="md-lock" slot="prefix" />
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button @click="handleSubmit" type="primary" long class="sub-to">SIGN IN</Button>
                    </FormItem>
                </Form>
                <p class="login-tip">Moonets Modules V 1.0.0</p>
            </div>
        </Card>
        <p class="create-account-callout mt-3">
            Go to GitHub?
            <a data-ga-click="Sign in, switch to sign up" href="javascript:void(0)">See the project</a>.
        </p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: ""
            }
        }
    },
    mounted() {},
    methods: {}
};
</script>

<style>
</style>
