<template>
    <div class='yun-page'>
        <div class='yun-page-title'>个人设置</div>
        <div class='yun-user-head'>
            <img class='yun-head-img' src="@/assets/img/header.png" alt="">
            <div class='yun-head-info'>
                <p class='yun-nick-name'>Jay.Liu</p>
                <p class='yun-company-name'>中关村科学城城市大脑</p>
            </div>
        </div>
        <div class='yun-card'>
            <div class='yun-card-title'>个人信息</div>
            <div class='yun-card-content'>
                <el-form :model="userForm" ref="userForm" label-width="100px" size='small' >
                    <el-form-item class='is-required' label="用户名称:">
                        <el-input v-model="userForm.userName" placeholder="默认"></el-input>
                    </el-form-item>
                    <el-form-item class='is-required' label="所属机构:">
                        <el-input v-model="userForm.ofUnit" placeholder="默认"></el-input>
                    </el-form-item>
                     <el-form-item label="真实姓名:">
                        无名
                    </el-form-item>
                     <el-form-item label="电话:">
                        13536263233
                    </el-form-item>
                     <el-form-item >
                        <el-button type='primary'>保存修改</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class='yun-card'>
            <div class='yun-card-title'>个人密码修改</div>
            <div class='yun-card-content'>
                <el-form :model="passForm" ref="passForm" label-width="100px"  size='small' >
                    <el-form-item class='is-required' label="旧密码">
                        <el-input v-model="passForm.password" placeholder="默认"></el-input>
                    </el-form-item>
                    <el-form-item class='is-required' label="新密码">
                        <el-input v-model="passForm.newPassword" placeholder="默认"></el-input>
                    </el-form-item>
                    <el-form-item class='is-required' label="新密码">
                        <el-input v-model="passForm.newPasswordAgin" placeholder="默认"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button type='primary'>保存修改</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>              
    </div>
</template>
<script>
export default {
    data(){
        return {
            userForm:{
                userName:'',
                ofUnit:''
            },
            passForm:{
                password:'',
                newPassword:"",
                newPasswordAgin:''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .yun-page{
        background: #fff;
        border-radius: 8px;
        padding:30px;     
        .yun-page-title{
            font-size:20px;
            color:#1D212D;
            font-weight: bold;
        }
        .yun-user-head{
            display: flex;
            align-items: center;
            margin-top:30px;
            margin-bottom:45px;
            .yun-head-img{
                width:100px;
                height:100px;
                margin-right:30px;
            }
            .yun-head-info{
                .yun-nick-name{
                    font-size:18px;
                    color:#1D212D;
                    font-weight: bold;
                }
                .yun-company-name{
                    font-size:18px;
                    color:#484D5E;
                    margin-top:15px;
                }
            }
        }
        .yun-card{
            margin-bottom:30px;
            .yun-card-title{
                border-left:4px solid #2B66F0;
                padding-left:8px;
                font-size:16px;
                color:#1D212D;
                font-weight: bold;
            }
            .yun-card-content{
                margin-top:30px;
            }
        }
    }
</style>

