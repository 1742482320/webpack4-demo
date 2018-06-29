// 声明react组件
import React, {Component} from 'react';
// 导入json数据
import config from './config.json';

// 一个简单的react组件
class Greeter extends Component{
  // 组件定义一个div保存json数据
  render(){
    return (
      <div>
        {config.greetText}
        <div>
          aaaaaaaaaaaaaaaa
        </div>
      </div>
      
    );
  }
}

// 导出组件
export default Greeter 
