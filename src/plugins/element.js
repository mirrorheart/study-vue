import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem, Input } from 'element-ui'
// 导入弹框提示组件
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.prototype.$message = Message
