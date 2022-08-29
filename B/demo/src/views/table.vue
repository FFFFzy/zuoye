
<template>
  <div>
    <!-- 删除选中 -->
    <el-button type="primary" icon="el-icon-delete" @click="dels"
      >删除选中</el-button
    >
    <!-- 地址搜索 -->
    <el-select v-model="value" clearable placeholder="地址" @change="addsearch">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- 用户名搜索 -->
    <el-input
      v-model="search"
      placeholder="用户名"
      style="width: 200px"
      @input="searchchange"
    ></el-input>
    <!-- 表格 -->
    <el-table
      :data="tableData.slice((currentpage - 1) * pages, currentpage * pages)"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="60"> </el-table-column>
      <el-table-column prop="id" label="id" width="60"> </el-table-column>
      <el-table-column prop="name" label="用户名"> </el-table-column>
      <el-table-column prop="price" label="账号余额"></el-table-column>
      <el-table-column prop="img" label="头像(查看大图)">
        <template slot-scope="scope">
          <div class="demo-image__preview">
            <el-image
              style="width: 80px; height: 80px"
              :src="scope.row.img"
              :preview-src-list="[scope.row.img]"
            >
            </el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="small"
            plain
            v-if="scope.row.state != 1"
            >成功</el-button
          >
          <el-button type="danger" size="small" plain v-else>失败</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="create_time" label="时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentpage"
        :page-size="pages"
        layout="prev, pager, next, jumper"
        :total="length"
      >
      </el-pagination>
    </div>
    <!-- 对话框 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="emit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      pages: 5,
      currentpage: 1,
      length: 10,
      multipleSelection: "",
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
      },
      tableList: [],
      formLabelWidth: "120px",
      tableData: [],
      search: "",
      value: "",
      options: [
        {
          value: "河南",
          label: "河南",
        },
        {
          value: "广东",
          label: "广东",
        },
        {
          value: "湖南",
          label: "湖南",
        },
      ],
    };
  },
  created() {
    this.getdata();
  },
  mounted() {},
  methods: {
    // 搜索
    searchchange() {
      this.tableData = this.tableList.filter((item) =>
        item.name.includes(this.search)
      );
    },
    // 搜索地址
    addsearch() {
      this.tableData = this.tableList.filter((item) =>
        item.address.includes(this.value)
      );
    },
    // 选中删除
    dels() {
      this.tableData = this.tableData.filter(
        (item) => !this.multipleSelection.includes(item.id)
      );
    },
    // 选中
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.id);
    },
    // 编辑
    emit() {
      const item = this.form;
      this.tableData[item.index].name = item.name;
      this.tableData[item.index].address = item.address;
      this.dialogFormVisible = false;
    },
    // 编辑回填
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
      this.form = {
        name: row.name,
        address: row.address,
        index: index,
      };
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 获取表格数据
    getdata() {
      axios.get("/books.json").then((res) => {
        console.log(res.data);
        this.tableData = res.data;
        this.tableList = res.data;
        this.length = this.tableData.length;
      });
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pages = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentpage = val;
    },
  },
};
</script>
<style scoped lang='scss'>
.el-select {
  margin: 0 10px 20px 10px;
}
</style>
