import Vue from 'vue'

/**
 * 存储传入的vue实例属性，通过initVueInstanceProps初始化
 */
let vueInstanceProps = {}

/**
 * initVueInstanceProps 用于初始化，可以传入store、i18n等
 * @param {Object} params vue实例对象属性,如store、i18n、router等
 */
export const initVueInstanceProps = params => {
  vueInstanceProps = params
}

/**
 * wrap用于将组件append到body节点
 * @param {Object} template 模板import进来的Vue模板对象
 * @param {Object} data 组件需要的props
 * @param {Object} options 配置项
 * @param {Number} options.unmountDelay 延迟销毁，解决可能出现的动画执行不完就被销毁的情况，单位ms
 * @param {Object} options.vueInstanceProps，用于自定义vue实例对象属性
 * @returns Promise
 */
export const wrap = (template, data, options = {}) => {
  // 声明实例对象变量
  let extendVm = null

  // 卸载销毁
  const unmountedNode = () => {
    setTimeout(() => {
      extendVm.$destroy()
      document.body.removeChild(extendVm.$el)
    }, options.unmountDelay || 0)
  }

  // 返回promise，根据vueInstanceProps传入vue实例对象属性，通过判断 options.vueInstanceProps可以自定义vue实例对象属性
  const p = new Promise((resolve, reject) => {
    const Instance = Vue.extend({
      render(h) {
        // 创建组件实例
        const props = {
          callbackResolve: resolve,
          callbackReject: reject,
          ...data,
        }
        return h(template, { props })
      },
      ...(options.vueInstanceProps ? options.vueInstanceProps : vueInstanceProps),
    })
    // 插入dom
    extendVm = new Instance().$mount()
    document.body.appendChild(extendVm.$el)
  })

  // 组件resolve回调
  const callbackResolve = val => {
    unmountedNode()
    return Promise.resolve(val)
  }

  // 组件reject回调
  const callbackReject = err => {
    unmountedNode()
    return Promise.reject(err)
  }
  return p.then(callbackResolve, callbackReject)
}
