const routerList = [
    {
        "label": "官方网站",
        "value": "https://www.gin-vue-admin.com"
    },
    {
        "label": "仪表盘",
        "value": "dashboard"
    },
    {
        "label": "字典详情",
        "value": "dictionaryDetail"
    },
    {
        "label": "角色管理",
        "value": "authority"
    },
    {
        "label": "菜单管理",
        "value": "menu"
    },
    {
        "label": "api管理",
        "value": "api"
    },
    {
        "label": "用户管理",
        "value": "user"
    },
    {
        "label": "字典管理",
        "value": "dictionary"
    },
    {
        "label": "操作历史",
        "value": "operation"
    },
    {
        "label": "个人信息",
        "value": "person"
    },
    {
        "label": "自动化package",
        "value": "autoPkg"
    },
    {
        "label": "自动化代码（复用）",
        "value": "autoCodeEdit"
    },
    {
        "label": "代码生成器",
        "value": "autoCode"
    },
    {
        "label": "自动化代码管理",
        "value": "autoCodeAdmin"
    },
    {
        "label": "表单生成器",
        "value": "formCreate"
    },
    {
        "label": "系统配置",
        "value": "system"
    },
    {
        "label": "自动化插件模板",
        "value": "autoPlug"
    },
    {
        "label": "服务器状态",
        "value": "state"
    },
    {
        "label": "excel导入导出",
        "value": "excel"
    },
    {
        "label": "媒体库（上传下载）",
        "value": "upload"
    },
    {
        "label": "断点续传",
        "value": "breakpoint"
    },
    {
        "label": "客户列表（资源示例）",
        "value": "customer"
    },
    {
        "label": "关于我们",
        "value": "about"
    }
]

export const router = {

    //解决命名冲突
    namespaced: true,
    state: {
        routerList: routerList,
    },
    mutations: {},
    actions: {},
    getters: {
        routerList(state) {
            return state.routerList
        },
    }
}