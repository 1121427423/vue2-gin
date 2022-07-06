import Vue from 'vue'
//导入全部组件，亦可按需引入 见官网（https://element.eleme.cn/#/zh-CN/component/quickstart）
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import store from '@/store'
import router from '@/router'
import App from './App.vue'
import request from "@/utils/request";

Vue.prototype.request = request  //全局注册request，其他文件可通过this.request使用分装好的axios实例

//关闭生产环境提示信息
Vue.config.productionTip = false

//注册组件，全局配置参数 size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.use(ElementUI, {size: 'small', zIndex: 3000});
//使用自带国际化
Vue.use(ElementUI, {locale})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
