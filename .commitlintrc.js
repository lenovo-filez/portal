module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'type-enum': [
    // 	2,
    // 	'always',
    // 	[
    // 		'feat',         // 新功能（feature）
    // 		'fix',          // bugfix
    // 		'docs',         // 文档
    // 		'style',        // 不影响代码运行效果的代码格式调整
    // 		'refactor',     // 重构
    // 		'perf',         // 性能优化
    // 		'test',         // 测试
    // 		'chore',        // 构建、编译等杂事
    // 		'improvement',  // 改进
    // 		'revert',       // 回滚
    // 		'build',        // 编译构建相关
    // 		'ci',           // CI流程相关
    // 	]
    // ]
    // <scope> 不能为空
    // 'scope-empty': [2, 'never'],
  },
}
