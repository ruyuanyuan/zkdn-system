<template>
  <div class="yun-page">
    <div class="yun-card">
      <div class="yun-page-title">XXXX</div>
      <div class="yun-table-filter">
        <el-form :inline="true" size="small">
          <el-form-item label="资源名称:">
            <el-input
              v-model="filterData.keyword"
              placeholder="请输入关键词查询"
              clearable
            >
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="公式状态:">
            <el-select
              v-model="filterData.stattus"
              placeholder="请选择公式状态"
              clearable
            >
              <el-option
                v-for="(item, index) in stattusList"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :inline="true" size="small">
          <el-form-item label="考核科室:">
            <el-select
               class='examineUnit'
              v-model="filterData.examineUnit"
              placeholder="请选择考核科室"
              clearable
              multiple
             
            >
              <el-option
                v-for="(item, index) in unitList"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm">重置</el-button>
            <el-button type="primary" @click="searchEvent">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="yun-card">
      <div class="yun-card-title">选择数据向</div>
      <div class="yun-card-content">
        <div class="yun-collapse">
          <el-collapse v-model="activePlatform" accordion>
            <el-collapse-item
              v-for="(item, index) in platformList"
              :key="index"
              :title="item.name"
              :name="item.value"
            >
              <el-checkbox-group v-model="item.checkedItems">
                <div v-for="(unit, index) in item.examineItems" :key="index">
                  <el-checkbox
                    :value="unit.vlaue"
                    :label="unit.label"
                  ></el-checkbox>
                </div>
              </el-checkbox-group>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="yun-model">
          <div class="yun-model-title">设置公式</div>
          <div class="yun-model-content">
            <div class="yun-model-btns">
              <el-button type="primary" size="small">删除</el-button>
              <el-button type="primary" size="small">重置</el-button>
            </div>
            <div class="yun-model-row">
              <el-form :inline="true" size="small">
                <el-form-item>
                  <el-input
                    v-model="filterData.keyword"
                    placeholder="请输入数据项或输入数字"
                    clearable
                  >
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-select
                    v-model="filterData.stattus"
                    placeholder="请选择方式"
                    clearable
                  >
                    <el-option
                      v-for="(item, index) in stattusList"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="filterData.keyword"
                    placeholder="请输入数据项或输入数字"
                    clearable
                  >
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div class="yun-submit">
        <el-button size="small" @click="back">返回</el-button>
        <el-button type="primary" size="small">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterData: {
        keyword: "",
        status: 1,
        examineUnit: [],
      },
      unitList: [
        {
          label: "西区办",
          value: 1,
        },
        {
          label: "东区办",
          value: 2,
        },
        {
          label: "综合办",
          value: 3,
        },
      ],
      stattusList: [
        {
          label: "启用",
          value: 1,
        },
        {
          label: "停用",
          value: 2,
        },
      ],
      activePlatform: "jsjb",
      platformList: [
        {
          name: "接诉即办",
          value: "jsjb",
          checkedItems: [],
          examineItems: [
            {
              label: "事件总数",
              value: "eventNum",
            },
            {
              label: "事件解决数",
              value: "eventRejectNum",
            },
            {
              label: "事件办结数",
              value: "eventOverNum",
            },
          ],
        },
        {
          name: "大城管",
          value: "dcg",
          checkedItems: [],
          examineItems: [
            {
              label: "事件总数",
              value: "eventNum",
            },
            {
              label: "事件解决数",
              value: "eventRejectNum",
            },
            {
              label: "事件办结数",
              value: "eventOverNum",
            },
          ],
        },
        {
          name: "12345",
          value: "12345",
          checkedItems: [],
          examineItems: [
            {
              label: "事件总数",
              value: "eventNum",
            },
            {
              label: "事件解决数",
              value: "eventRejectNum",
            },
            {
              label: "事件办结数",
              value: "eventOverNum",
            },
          ],
        },
      ],
    };
  },
  methods: {
    resetForm() {},
    searchEvent() {},
    handleClick(row) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    back(){
        this.$router.go('-1')
    }
  },
};
</script>
<style lang="scss" scoped>
.yun-page {
  border-radius: 8px;

  .yun-page-title {
    font-size: 20px;
    color: #1d212d;
    font-weight: bold;
  }
  .yun-card {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    & + .yun-card {
      margin-top: 24px;
    }
    .yun-card-title {
      font-size: 16px;
      color: #484d5e;
    }
    .yun-card-content {
      display: flex;
      margin-top: 24px;
      .yun-collapse {
        width: 30%;
        margin-right: 24px;
      }
      .yun-model {
        flex: 1;
        border: 1px solid #dcdfe6;
        background: #fff;
        border-radius: 4px;
        min-height: 300px;
        .yun-model-title {
          height: 32px;
          font-size: 12px;
          color: #484d5e;
          padding: 6px 25px;
          border-bottom: 1px solid #dcdfe6;
        }
        .yun-model-content {
          padding: 25px;
          .yun-model-row {
            margin-top: 20px;
          }
        }
      }
    }
  }
  .yun-table-filter {
    margin-top: 30px;
    .el-form-item {
      margin-right: 40px;
    }
  }
  .yun-submit {
    margin-top: 40px;
    text-align: center;
  }
 /deep/ .examineUnit{
      .el-input{
           width:650px;
      }
     
  }
}
</style>