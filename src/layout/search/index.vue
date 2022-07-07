<template>
  <div class="search-component">
    <transition name="el-fade-in-linear">
      <div class="transition-box" style="display: inline-block; " v-show="show">
        <el-select ref="search-input" @change="changeRouter" @blur="hiddenSearch" v-model="value" filterable
                   placeholder="请选择">
          <el-option v-for="item in getRouters" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
    </transition>
    <div :style="{display:'inline-block',float:'right',width:'31px',textAlign:'left',fontSize:'16px',paddingTop:'2px'}"
         class="user-box">
      <i @click="$bus.$emit('reload')" :style="{cursor:'pointer'}" class="el-icon-refresh"/>
    </div>
    <div :style="{display:'inline-block',float:'right'}" class="user-box">
      <i :style="{cursor:'pointer'}" @click="showSearch()" class="el-icon-search search-icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "searchComponent",
  data() {
    return {
      value: "",
      show: false
    };
  },
  computed: {
    getRouters() {
      return this.$store.getters(["router/routerList"]);
    }
  },
  methods: {
    changeRouter() {
      this.$router.push({name: this.value});
      this.value = "";
    },
    hiddenSearch() {
      this.show = false;
    },
    showSearch() {
      this.show = true;
      this.$nextTick(() => {
        this.$refs["search-input"].focus();
      });
    }
  }
};
</script>
<style lang="scss">
</style>