<template>
    <div class='yun-page'>
        <video class='yun-video-bg' src="@/assets/img/login/login.mp4" autoplay muted loop></video>
        <div class='login-title'>
            XXXXX
        </div>
        <div class='login-form'>
            <img src="@/assets/img/login/form-bg.png" alt="">
            <div class='yun-form'>
                <div class='form-title'>用户登录</div>
                <div class='form-content'>
                    <div class='input-item input-item-user'>
                        <input type="text" placeholder="用户名">
                    </div>
                    <div class='input-item input-item-password'>
                        <input type="password" placeholder="密码">
                    </div>
                </div>
                <div class='yun-password'>
                    <el-checkbox class='passchecked' v-model="passchecked">记住密码</el-checkbox>
                    <a class='forgetpass' href="javascript:;">忘记密码</a>
                </div>
                <div class='submit-btn' @click="loginEvent">
                    登录
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            passchecked:false
        }
    },
    methods:{
        loginEvent(){
            this.$router.push('/menu1')
        }
    }
}
</script>
<style lang="scss" scoped>
.yun-page{
    width:100%;
    height:100%;
    vertical-align:bottom;
    position: relative;
    background:#000;
    overflow: hidden;
    .yun-video-bg{
        width:100%;
        height:auto;
    }
    .login-title{
        position: absolute;
        top:4%;
        left:4%;
        font-size:40px;
        color:#fff;
        font-weight: bold;
        letter-spacing: 6px;
        text-shadow: 2px 2px 4px #2596ff;
    }
    .login-form{
        position:absolute;
        top:50%;
        right:16%;
        transform: translateY(-50%);
        .yun-form{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            padding:60px;
            .form-title{
                width:100%;
                text-align: center;
                font-size:40px;
                color:#fff;
            }
            .form-content{
                margin-top:50px;
                .input-item{
                    width:100%;
                    height:70px;
                    margin-bottom:40px;
                    input{
                        display: block;
                        width:100%;
                        height:100%;
                        border-radius: 4px;
                        outline: none;
                        background: transparent;
                        border:1px solid #048cb5;
                        padding:10px 10px 10px 80px;
                        font-size:24px;
                        color:#fff;
                    }
                    input::placeholder{
                        color: #fff;
                    }
                    &.input-item-user{
                        input{
                            background-image: url('~@/assets/img/login/icon-user.png');
                            background-repeat: no-repeat;
                            background-position: 25px center;
                        }
                    }
                    &.input-item-password{
                        input{
                            background-image: url('~@/assets/img/login/icon-password.png');
                            background-repeat: no-repeat;
                            background-position: 25px center;
                        }
                    }
                }
            }
            .yun-password{
                display: flex;
                justify-content: space-between;
                .forgetpass{
                    font-size:18px;
                    color:#00b8ff;
                }
               /deep/ .el-checkbox{
                    .el-checkbox__input{
                        .el-checkbox__inner{
                            border: 1px solid #00b3fd;
                            background-color: transparent;
                            width:18px;
                            height:18px;
                            &::after{
                                width:6px;
                                height:10px;
                            }
                        }
                    }
                    .el-checkbox__label{
                        color:#fff;
                        font-size:18px;
                    }
                }
            }
            .submit-btn{
                width:100%;
                height:68px;
                cursor: pointer;
                margin-top:40px;
                text-align: center;
                line-height: 68px;
                font-size:32px;
                letter-spacing: 8px;
                color: #fff;
                border-radius: 4px;
                background: linear-gradient(to bottom,#00b5fe,#0178e5);
            }
        }
    }
}
</style>