<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>这是count:{{$store.state.count}} </h2>
    <h3>这里是吗m1中的con:{{$store.state.m2.con}}</h3>
    <!-- 列表部分 -->
                <!-- <el-table @sort-change="sortChange"
                  ref="multipleSelection" border :data="valueDryGoodTableData" style="width: 100%">
                    <el-table-column align="left"
                      prop="title" label="标题" min-width="80%" sortable="custom">
                        <template slot-scope="scope">
                            <a target="_blank"
                              :class="scope.row.titleClicked?'titleClicked':''"
                              class="hoverHand bluetext" v-html="scope.row.title"
                              @click="titleClick(scope.row.articleUrl,scope.$index)">
                            </a>
                        </template>
                    </el-table-column>
                    <el-table-column align="left"
                      prop="releaseTime" label="发布日期"
                      min-width="11%" sortable="custom">
                    </el-table-column>
                    <el-table-column align="center" label="操作" min-width="9%">
                        <template slot-scope="scope">
                            <span class="operatoryTools">
                                <i title="取消收藏" v-if="scope.row.isFavour"
                                  @click="favoriteOperating(scope.row.id, scope.$index)"
                                  class="hoverHand iconStyle el-icon-star-on"></i>
                                <i title="收藏" v-else
                                  @click="favoriteOperating(scope.row.id, scope.$index)"
                                  class="hoverHand iconStyle el-icon-star-off"></i>
                                <i title="分享" @click.stop="showShareOperation(scope.$index)"
                                  class="shareTarg iconfont">&#xe678;</i>
                                <div class="share" v-if="scope.row.showShare">
                                    <img class="hoverHand shareItem" title="分享到微博"
                                      @click="shareItem('sina',$event);" src="../assets/logo.png">
                                    <img class="hoverHand shareItem" title="分享到微信"
                                      @click.stop="shareItem('wx',$event);"
                                      src="../assets/logo.png">
                                    <img class="hoverHand shareItem" title="分享到QQ"
                                      @click="shareItem('qq',$event);" src="../assets/logo.png">
                                </div>
                                <div v-show="scope.row.erweimaShare" class="erweima_share"></div>
                                <div v-show="scope.row.erweimaShare1" class="erweima_share1"></div>
                            </span>
                        </template>
                    </el-table-column>
                </el-table> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueDryGoodTableData: '',
    };
  },
  methods: {
    // 点击清空条件，调用该方法
    emptyAndSearch() { // 清空条件方法
      // 清空树选中状态
      this.clearTreeNodeCheck(['tree']);
      // 清除排序
      this.$refs.multipleSelection.clearSort();
      // 设置分页参数
      this.queryParam = {
        startRow: 1,
        pageSize: 20,
        condition: {
        },
      };
      // 分页查询调用
      this.confirmSearch('statistics');
      // 设置清空条件为false
      this.$store.commit('valueDryGoodDatas/SET_CLEAR_ALL', false);
    },
  },
};
</script>
