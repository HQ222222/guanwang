<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  >查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>HQ</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="id" label="城市ID" width="140">
        </el-table-column>
        <el-table-column prop="name" label="城市名字">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>
<style scoped>

</style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  },

  .el-aside {
    color: #333;
  }
<script>
export default {
  data() {
    return {
      tableData: [{}, {}],
    };
  },
  methods: {

  },

  mounted() {
    this.axios
      .get()
      // eslint-disable-next-line no-return-assign
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        const { data: res } = response;
        // eslint-disable-next-line no-console
        console.log(res);
        // eslint-disable-next-line no-console
        console.log(12345);
        this.tableData = res;
      })
      .catch((error) => { // 请求失败处理
        // eslint-disable-next-line no-console
        console.log(error);
      });

    // const { data: res } = this.$http.get();
    // eslint-disable-next-line no-console
    // console.log(res);
  },

};
</script>
