/**
 * 将组件调用函数化
 */
import temp from './template.vue'
import { wrap } from '../../dist/portal.esm'
/**
 * 提供给使用者的接口
 * @param temp组件模板
 * @param data 组件props
 * @param options 配置项
 */
export default (data, options = {}) => {
  return wrap(temp, data, { unmountDelay: 0, ...options })
}
