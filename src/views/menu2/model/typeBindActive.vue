<template>
  <div class='yun-alert'>
      <div class='yun-alert-cont'>
          <div class='yun-alert-head'>
              自动绑定
          </div>
          <div class='yun-alert-body'>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px">
                  <el-form-item label="业务分类名称:" prop="typeName">
                        <el-input type='text' disabled v-model="ruleForm.typeName" size="small" ></el-input>
                    </el-form-item>
                   <!-- <el-form-item label="事件级别管理:" prop="eventleve">
                        <el-select v-model="ruleForm.eventleve" placeholder="请选择事件级别" size="small" clearable>
                            <el-option v-for='item in eventleveList' :label='item.label' :value="item.value" :key='item.key'></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="接入系统:" prop="worksystem">
                        <el-select v-model="ruleForm.worksystem" multiple
    collapse-tags placeholder="请选择接入系统" size="small" clearable>
                            <el-option v-for='item in systemlist' :label='item.label' :value="item.value" :key='item.key'></el-option>
                        </el-select>
                    </el-form-item>
                    <div class='yun-row'>
                        <div>
                            <p class='yun-tip'>自动绑定关键词设置（请以'、'号分割每个关键词）</p>
                             <el-form-item label-width="0" prop="keyword">
                            <el-input type='textarea' v-model="ruleForm.keyword" size="small" rows="4"></el-input>
                             </el-form-item>
                        </div>          
                    </div>
                   <div class='yun-row yun-row-right'>
                        <el-button type='primary'  size="small" @click='saveEventData'>保存</el-button>
                        <el-button   size="small" @click='closeEventData'>关闭</el-button>
                  </div>
              </el-form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['typeInfo'],
    data(){
        return {
            ruleForm:{
                typeName:"",
                // eventleve:'',
                worksystem:'',
                keyword:'',
            },
            // eventleveList:[
            //     {label:'黑名单',value:1},
            //     {label:'一级',value:2},
            //     {label:'二级',value:3}
            // ],
            systemlist:[
                {label:'接诉即办',value:1},
                {label:'应急指挥',value:2},
                {label:'大城管',value:3}
            ],
            rules:{
                typeName: [
                    { required: true, message: '请输入业务分类名称', trigger: 'blur' },
                ],
                // eventleve: [
                //     { required: true, message: '请选择事件级别', trigger: ['blur','change'] },
                // ],
                worksystem: [
                    { required: true, message: '请选择接入系统', trigger: ['blur','change'] },
                ],
                keyword: [
                    { required: true, message: '请输入关键词', trigger: ['blur'] },
                ],
            }
        }
    },
    created(){
        if(this.typeInfo){
            this.ruleForm.typeName = this.typeInfo.label
        }
    },
    methods:{
        
        saveEventData(){
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm)
                    this.$message({
                        message: '提交成功',
                        type:'success'
                    })
                    this.$refs.ruleForm.resetFields();
                    this.$emit('close',false)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        },
        closeEventData(){
            this.$refs.ruleForm.resetFields();
            this.$emit('close',false)
        }
    }
}
</script>

<style lang='scss' scoped>
    .yun-alert{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgba(0,0,0,0.6);
        z-index: 10;
       
        .yun-alert-cont{
            padding:0 0 20px;
            background: #fff;
            border:1px solid #efefef;
            .yun-alert-head{
                width:100%;
                padding:10px 20px;
                font-size: 16px;
                color:#666;
                border-bottom:1px solid #efefef;
                margin-bottom:10px;
                font-weight: bold;
            }
            .yun-alert-body{
                padding:0 25px;
            }
            .yun-row{
                display: flex;
                justify-content: space-between;
                max-width:1000px;
                .yun-tip{
                    font-size:14px;
                    color:#999;
                    line-height: 40px;
                }
                .yun-col{
                    width:300px;
                    &:first-child{
                        margin-right:40px;
                    }
                }
                .longItem{
                    width:100%;
                }
                &.yun-row-right{
                    justify-content:center;
                }
            }
        }
        
    }
</style>