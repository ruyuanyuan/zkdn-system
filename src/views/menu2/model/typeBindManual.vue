<template>
  <div class='yun-alert'>
      <div class='yun-alert-cont'>
          <div class='yun-alert-head'>
              手动绑定
          </div>
          <div class='yun-alert-body'>
              <el-form :model="ruleForm" ref="ruleForm" label-width="110px">
                    <el-tabs  type="card">
                        <el-tab-pane label="大城管" >
                            <div class='yun-pane'>
                                <div class='yun-pane-tree'>
                                    <el-input
                                    placeholder="输入关键字进行过滤"
                                    size="small"
                                    v-model="dcgfilterText"
                                    class='yun-pane-input'
                                    >
                                    </el-input>
                                    <el-tree
                                    class="yun-tree"
                                    ref="dcgtree"
                                    :data="dcgdata"
                                    node-key="id"
                                    show-checkbox
                                    :check-strictly='true'
                                    :filter-node-method="dcgfilterNode"
                                    :check-on-click-node='true'
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    @check-change='dcgcheckchangeEvent'
                                    >
                                    </el-tree>    
                                </div>
                                <div class='yun-result'>
                                    <div class='yun-result-title'>已选择</div>
                                    <div class='yun-result-content'>
                                        <el-tag 
                                        v-for='(item,index) in ruleForm.dcgChecked' 
                                        size="mini"
                                        :key='index'
                                        >{{item.label}}</el-tag>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="12345" >
                            <div class='yun-pane'>
                                <div class='yun-pane-tree'>
                                    <el-input
                                    placeholder="输入关键字进行过滤"
                                    size="small"
                                    v-model="jsjbfilterText"
                                    class='yun-pane-input'
                                    >
                                    </el-input>
                                    <el-tree
                                    class="yun-tree"
                                    ref="jsjbtree"
                                    :data="jsjbdata"
                                    node-key="id"
                                    show-checkbox
                                    :check-strictly='true'
                                    :filter-node-method="jsjbfilterNode"
                                    :check-on-click-node='true'
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    @check-change='jsjbcheckchangeEvent'
                                    >
                                    </el-tree>    
                                </div>
                                <div class='yun-result'>
                                    <div class='yun-result-title'>已选择</div>
                                    <div class='yun-result-content'>
                                        <el-tag 
                                        v-for='(item,index) in ruleForm.jsjbChecked' 
                                        size="mini"
                                        :key='index'
                                        >{{item.label}}</el-tag>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="应急指挥" >
                            <div class='yun-pane'>
                                <div class='yun-pane-tree'>
                                    <el-input
                                    placeholder="输入关键字进行过滤"
                                    size="small"
                                    v-model="yjzhfilterText"
                                    class='yun-pane-input'
                                    >
                                    </el-input>
                                    <el-tree
                                    class="yun-tree"
                                    ref="yjzhtree"
                                    :data="dcgdata"
                                    node-key="id"
                                    show-checkbox
                                    :check-strictly='true'
                                    :filter-node-method="yjzhfilterNode"
                                    :check-on-click-node='true'
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    @check-change='yjzhcheckchangeEvent'
                                    >
                                    </el-tree>    
                                </div>
                                <div class='yun-result'>
                                    <div class='yun-result-title'>已选择</div>
                                    <div class='yun-result-content'>
                                        <el-tag 
                                        v-for='(item,index) in ruleForm.yjzhChecked' 
                                        size="mini"
                                        :key='index'
                                        >{{item.label}}</el-tag>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
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
const data = [{
        id: 1,
        label: '全部分类',
        children: [{
          id: 2,
          label: '地震灾害',
          children: [{
            id: 29,
            label: '一级地震'
          }, {
            id: 28,
            label: '二级地震'
          }]
        },
        {
          id: 3,
          label: '气象灾害',
          children: [{
            id: 37,
            label: '一级风暴'
          }, {
            id: 38,
            label: '二级风暴'
          }]
        },
        {
          id: 4,
          label: '水旱灾害',
          children: [{
            id: 41,
            label: '洪水',
            children: [{
              id: 42,
              label: '裂缝',
            },{
              id: 43,
              label: '决口',
            },
            {
              id: 44,
              label: '垮坝',
            },
            {
              id: 45,
              label: '垮坝',
            }
            ]
          }]
        }
 ]}]
let id=100
export default {
    props:['typeInfo'],
    data(){
        return {
           dcgfilterText:'',
           yjzhfilterText:'',
           jsjbfilterText:'',
           ruleForm:{
               dcgChecked:[],
               yjzhChecked:[],
               jsjbChecked:[]
           },
           dcgdata: JSON.parse(JSON.stringify(data)),
            yjzhdata: JSON.parse(JSON.stringify(data)),
            jsjbdata: JSON.parse(JSON.stringify(data)),
        }
    },
     watch: {
      dcgfilterText(val) {
        this.$refs.dcgtree.filter(val);
      },
      yjzhfilterText(val) {
        this.$refs.yjzhtree.filter(val);
      },
      jsjbfilterText(val) {
        this.$refs.jsjbtree.filter(val);
      }
    },
    created(){
         if(this.typeInfo){
            this.ruleForm.typeName = this.typeInfo.label
        }
    },
    methods:{
        dcgcheckchangeEvent(data,chekced,has){
           let checkedList = this.$refs.dcgtree.getCheckedNodes()
           this.ruleForm.dcgChecked = checkedList
        },
        dcgfilterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        yjzhcheckchangeEvent(data,chekced,has){
           let checkedList = this.$refs.yjzhtree.getCheckedNodes()
           this.ruleForm.yjzhChecked = checkedList
        },
       yjzhfilterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        jsjbcheckchangeEvent(data,chekced,has){
           let checkedList = this.$refs.jsjbtree.getCheckedNodes()
           this.ruleForm.jsjbChecked = checkedList
        },
        jsjbfilterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
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
            .yun-pane{
                width:600px;
                display: flex;
                .yun-pane-tree{
                    width:360px;
                    height:300px;
                    position: relative;
                    padding-top:40px;
                    .yun-pane-input{
                        position: absolute;
                        top:0;
                    }
                    .yun-tree{
                        max-height:260px;
                        overflow-y: auto;
                    }
                }
                .yun-result{
                    flex: 1;
                    margin-left:20px;
                    .yun-result-title{
                        text-align: center;
                        font-size: 14px;
                        color:#666;
                        line-height: 30px;
                    }
                    .yun-result-content{
                        height: calc(100% - 30px);
                        padding:10px;
                        border:1px solid #ddd;
                        .el-tag{
                            margin:0 5px 5px 0;
                        }
                    }
                }
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
                    margin-top:15px;
                }
            }
        }
        
    }
</style>