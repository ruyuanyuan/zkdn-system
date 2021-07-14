<template>
    <div class='yun-page'>
        <div class='yun-page-title'>
            <span>绩效考核系统</span>
             <el-button type="primary" size="small" @click="toAddExamineFormula">新建公式</el-button>
        </div>
        <div class='yun-table-filter'>
            <el-form :inline="true" size="small">
                <el-form-item label="资源名称">
                    <el-input v-model="filterData.keyword" placeholder="请输入关键词查询" clearable>
                         <i slot="suffix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="filterData.stattus" placeholder="请选择公式状态" clearable>
                        <el-option 
                        v-for='(item,index) in stattusList' 
                        :key='index'
                        :label="item.label" 
                        :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm">重置</el-button>
                    <el-button type="primary" @click="searchEvent">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class='yun-table'>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                type="index"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="公式名称"
                    width="240">
                </el-table-column>
                <el-table-column
                    prop="formula"
                    label="考核公式"
                    width="300"
                    >
                </el-table-column>
                <el-table-column
                    prop="examineUnit"
                    label="考核单位">
                </el-table-column>
                 <el-table-column
                    prop="createTime"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    prop="createUser"
                    label="创建人">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="公式状态">
                    <template slot-scope="scope">
                         <el-switch
                            :value="scope.row.status==1"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                         </el-switch>
                    </template>
                </el-table-column>
                 <el-table-column
                    label="操作"
                    align='center'
                    >
                    <template slot-scope="scope">
                         <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class='yun-pagination'>
             <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            filterData:{
                keyword:"",
                status :'',
            },
            stattusList:[
                {
                    label:"启用",
                    value:1
                },
                {
                    label:"停用          ",
                    value:2
                },                   
            ],
            pageIndex:1,
            pageSize:10,
            tableData: [
                {
                    name: '9月更新考核公式',
                    formula: '综合得分=疫情(含复工复产)得分*(疫情诉求数量(含复工复产诉求数量/疫情诉求数量(含复工复产诉求量)+垃圾分类诉求数量)',
                    examineUnit:"西区办；综合办；平安建设办",
                    createTime: '2020-12-19 15:00:30',
                    createUser: '张三',
                    status:1,
                },
            ]
        }
    },
    methods:{
        toAddExamineFormula(){
            this.$router.push('/menu3/add')
        },
        resetForm(){

        },
        searchEvent(){

        },
        handleClick(row){

        },
        handleSizeChange(val){
             console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val){
             console.log(`当前页: ${val}`);
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
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .yun-table-filter{
        margin-top:30px;
        .el-form-item{
            margin-right:40px;
        }
    }
    .yun-pagination{
        margin-top:30px;
    }  
}
</style>