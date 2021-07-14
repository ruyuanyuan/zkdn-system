<template>
  <div class="yun-page">
    <div class="yun-left">
      <div class="yun-left-head">
        <div class="yun-file">
          <img src="@/assets/img/icon/icon-delete.png" alt="">
          屏蔽
        </div>
        <div class="yun-file">
          <img src="@/assets/img/icon/icon-import.png" alt="">
          导入
        </div>
        <div class="yun-file">
          <img src="@/assets/img/icon/icon-output.png" alt="">
          导出
        </div>
      </div>
      <div class="yun-group-list">
        <el-input
          placeholder="输入关键词查询"
          size="small"
          v-model="filterText"
        >
         <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-tree
          class="yun-tree"
          ref="tree"
          :data="data"
          node-key="id"
          :check-strictly='true'
          :highlight-current='true'
          :filter-node-method="filterNode"
          :check-on-click-node='true'
          :props='{label:"label",children:"children"}'
          accordion
          :expand-on-click-node="false"
          :render-content="renderContent"
          @check-change='checkchangeEvent'
        >
        </el-tree>
      </div>
    </div>
    <div class="yun-right">
      <div class="yun-right-head">
        <div class="yun-right-title">{{(chekcedInfo&&chekcedInfo.label)||'分类'}}</div>
        <div class="yun-right-btns">
          <el-button type="primary" class='yun-auto-bind' size="small" @click="activeBind=true">运行自动绑定</el-button>
          <el-button type="warning" class='yun-manual-bind' size="small" @click="manualBind=true">手动绑定</el-button>
        </div>
      </div>
      <div class="yun-table">
          选择系统:
        <el-select
          class="systemSelect"
          v-model="filterData.system"
          placeholder="请选择"
          size="small"
        >
          <el-option
            v-for="item in systemList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" type="index" width="100">
          </el-table-column>
          <el-table-column prop="systemName" label="系统名称">
          </el-table-column>
          <el-table-column prop="typeNanme" label="类型名称"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="unbindEvent(scope.row)"
                >取消绑定</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="yun-pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40,50]"
          :page-size="filterData.pageSize"
          layout="prev, pager, next,total,jumper, sizes"
          :total="filterData.total"
        >
        </el-pagination>
      </div>
    </div>
    <typeBindActive v-if='activeBind' @close="hideEventAlert" :typeInfo='chekcedInfo'></typeBindActive>
    <typeBindManual v-if='manualBind' @close="hideEventAlert" :typeInfo='chekcedInfo'></typeBindManual>
  </div>
</template>

<script>
import typeBindActive from './model/typeBindActive'
import typeBindManual from './model/typeBindManual'
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
  components:{
    typeBindActive,
    typeBindManual
  },
  data(){
    return {
       activeBind:false,
       manualBind:false,
       data: JSON.parse(JSON.stringify(data)),
       filterText: '',
       tableData:[
         {  
           id:1,
           systemName:'12345',
           typeNanme:'供电设备故障',
         },
         {  
           id:1,
           systemName:'12345',
           typeNanme:'私接电线',
         },{  
           id:1,
           systemName:'12345',
           typeNanme:'临时电',
         },
         {  
           id:1,
           systemName:'大城管',
           typeNanme:'设备维护',
         },
         {  
           id:1,
           systemName:'大城管',
           typeNanme:'计划检修',
         },
         {  
           id:1,
           systemName:'大城管',
           typeNanme:'优惠电价',
         }
       ],
       systemList:[
         {
           label:"全部",
           value:'all'
         },
         {
           label:"接诉即办",
           value:'jsjb'
         },
         {
           label:'大城管',
           value:'dcg'
         },
         {
           label:'12345',
           value:"12345"
         },
         {
           label:'其他',
           value:"qt"
         }
       ],
       filterData:{
         system:'all',
         pageSize:10,
         total:1
       },
       chekcedInfo:null
    }
  },
  created(){
    this.getalldict()
  },
  methods:{
    checkchangeEvent(data,chekced,has){
      if(chekced){
        if(this.chekcedInfo){
          this.$refs.tree.setChecked(this.chekcedInfo, false)
        }
        this.chekcedInfo = data
      }else{
        if(this.chekcedInfo.dictId==data.dictId){
          this.chekcedInfo = null
        }
      }
      
    },
    hideEventAlert(){
          this.activeBind=false
          this.manualBind=false
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.dictName.indexOf(value) !== -1;
    },
    append(data) {
        this.$prompt('请输入分类名称', '添加', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          if(value){
            const newChild = { id: id++, label: value, children: [] };
            if (!data.children) {
              this.$set(data, 'children', []);
            }
            data.children.push(newChild);
            this.$message({
              type: 'success',
              message: '新增分类成功'
            });
          }else{
            this.$message({
              type: 'error',
              message: '分类名称不能为空'
            });
          }
         
        }).catch(() => {
        });
        
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      edit(node,data){
        console.log(node,data)
        this.$prompt('请输入分类名称', '编辑', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue:data.label
        }).then(({ value }) => {
          if(value){
            this.$set(data, 'dictName', value);
            this.$message({
              type: 'success',
              message: '编辑分类成功'
            });
          }else{
            this.$message({
              type: 'error',
              message: '分类名称不能为空'
            });
          }
         
        }).catch(() => {
        });
      },
      renderContent(h, { node, data, store }) {
        if(data.id==1){
          return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
          </span>);
        }else{
           return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span class='yun-tree-edit'>
              <i class='yun-tree-btn yun-tree-edit' on-click={ () => this.edit(node, data)}></i>
              <i class='yun-tree-btn yun-tree-add' on-click={ () => this.append(data) }></i>
            </span>
          </span>);
        }
      },
      unbindEvent(row){
        console.log(row)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //获取业务类型树
      async getalldict(){
        
      }
  },
   watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

}
</script>

<style lang='scss' scoped>
.yun-page {
  display: flex;
  .yun-left {
    width: 26%;
    background: #fff;
    border: 1px solid #efefef;
    margin-right: 24px;
    min-height: 400px;
    border-radius: 8px;
    .yun-left-head {
      display: flex;
      justify-content: space-around;
      padding:18px 0;
      background:#DCDFE6 ;
      border-radius:8px 8px 0 0;
      .yun-file {
        font-size: 14px;
        color: #606266;
        cursor: pointer;
        display: flex;
        align-items: center;

        img{
            margin-right:8px;
        }
      }
    }
    .yun-group-list {
      padding:18px 30px;
      .yun-tree {
        margin-top: 20px;
        font-size: 14px;
        /deep/.el-tree-node__content{
          height:32px;
          
          &:hover{
            .yun-tree-edit{
              display: inline-block;
            }
          }
          .yun-tree-edit{
            display: none;
            padding-left:20px;
            .yun-tree-btn{
             display: inline-block;
             width:16px;
             height:16px;
             margin-right:10px;
             background-repeat: no-repeat;
              &.yun-tree-edit{
                  background-image: url('~@/assets/img/icon/icon-edit.png');
              }
               &.yun-tree-add{
                   background-image: url('~@/assets/img/icon/icon-add.png');
              }
            }
          }
        }
        
      }
    }
  }
  .yun-right {
    width: 70%;
    height:auto;
    border: 1px solid #efefef;
    background: #fff;
    border-radius: 8px;
    .yun-right-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #ddd;
      .yun-right-title {
        font-size: 20px;
        color: #333;
      }
      .yun-right-btns{
          .yun-auto-bind{
              background: #3BD16C;
              border:1px solid #3BD16C;
          }
          .yun-manual-bind{
              background: #FEBA32;
              border:1px solid #FEBA32;
          }
      }
    }
    .yun-table {
      padding: 15px;
      .systemSelect {
        margin: 0 0 20px;
      }
      .yun-pagination {
        margin-top: 15px;
      }
    }
  }
}
/deep/.el-tree-node__content {
    display: flex;
    align-items: center;
}

/deep/.el-tree-node__expand-icon.expanded {
    transform: rotate(0deg);
    background-image: url('~@/assets/img/icon/icon-hide.png');
}

/deep/.el-icon-caret-right {
    width: 10px;
    height: 10px;
    background-image: url('~@/assets/img/icon/icon-open.png');
    background-repeat: no-repeat;
    margin-right: 4px;
}

/deep/.el-tree-node__expand-icon.is-leaf {
    background-image: none
}

/deep/.el-icon-caret-right:before {
    content: '';
}
</style>