 const prettier = require('prettier')

 function nextPlugin() {
  // 这里是插件的初始化代码，可以处理 options 参数

  // 返回一个对象，包含插件的钩子函数
  return {
    name: 'my-next-plugin', // 插件名称

    // 示例：修改构建输出的代码
    generateBundle(outputOptions, bundle) {
      return prettier.format(bundle, {
        parser: 'html',
        printWidth: 1000
      })
    },
  };
}

module.exports = nextPlugin;
