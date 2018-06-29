
  // 把Greeter模块返回的节点插入页面
  //const greeter = require('./Greeter.js');
  //document.querySelector("#root").appendChild(greeter());

  import React from 'react';
  import {render} from 'react-dom';
  // 导入Greeter
  import Greeter from './Greeter';
  // // 导入css
  // import './main.css'
  
  // 渲染组件到页面
  render(<Greeter/>, document.getElementById('root'));
