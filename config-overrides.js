const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
  // 配置 antd-mobile 样式
      //  fixBabelImports('import', {
      //    libraryName: 'antd-mobile',
      //    style: 'css',
      //  }),
  // 项目中使用less 开发  
       addLessLoader({
        lessOptions:{
          javascriptEnabled:true
        },
        
      })
     );