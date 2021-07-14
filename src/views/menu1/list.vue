<template>
    <div class='yun-page'>
        <div class='yun-page-title'>事件管理系统</div>
        <div class='yun-table-filter'>
            <el-form :inline="true" size="small">
                <el-form-item label="搜索">
                    <el-input v-model="filterData.keyword" placeholder="请输入关键词查询" clearable>
                         <i slot="suffix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="事件来源">
                    <el-select v-model="filterData.eventSource" placeholder="全部" clearable>
                        <el-option 
                        v-for='(item,index) in sourceList' 
                        :key='index'
                        :label="item.label" 
                        :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="承办单位">
                    <el-select v-model="filterData.contract" placeholder="全部" clearable>
                         <el-option 
                        v-for='(item,index) in contractList' 
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
                    prop="event"
                    label="事件名称"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="source"
                    label="事件来源"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="eventType"
                    label="事件分类"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="ofUnit"
                    label="承办单位"
                    >
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="事件时间">
                </el-table-column>
                <el-table-column
                    prop="eventInfo"
                    label="事件详情">
                </el-table-column>
                 <el-table-column
                    label="操作"
                    align='center'
                    >
                    <template slot-scope="scope">
                         <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
                eventSource:'',
                contract:''
            },
            sourceList:[
                {
                    label:"接诉即办",
                    value:1
                },
                {
                    label:"大城管",
                    value:2
                },
                {
                    label:"应急指挥",
                    value:3
                }
            ],
            contractList:[
                {
                    label:'方正',
                    value:1
                },
                {
                    label:'蓝山',
                    value:2
                }
            ],
            pageIndex:1,
            pageSize:10,
            tableData: [
                {
                    event: '夜间扰民',
                    source: '接诉即办',
                    createTime: '2016-05-04',
                    eventInfo: '延庆区小营冰城主题串吧烧烤店营业到晚上打扰到附近居民…',
                    eventType:"扰民",
                    ofUnit:"区生态环境局;区市场监管局;区城管执法局;延庆公安分局;延庆区消防支队;"
                },
                {
                    event: '夜间扰民',
                    source: '接诉即办',
                    createTime: '2016-05-04',
                    eventInfo: '延庆区小营冰城主题串吧烧烤店营业到晚上打扰到附近居民…',
                     eventType:"扰民",
                    ofUnit:"区生态环境局;区市场监管局;区城管执法局;延庆公安分局;延庆区消防支队;"
                },
                {
                    event: '夜间扰民',
                    source: '接诉即办',
                    createTime: '2016-05-04',
                    eventInfo: '延庆区小营冰城主题串吧烧烤店营业到晚上打扰到附近居民…',
                     eventType:"扰民",
                    ofUnit:"区生态环境局;区市场监管局;区城管执法局;延庆公安分局;延庆区消防支队;"
                }
            ]
        }
    },
    methods:{
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