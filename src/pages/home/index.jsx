import React from 'react';
import {Dropdown} from 'element-react'
import * as Element from 'element-react';
import Number from '../../components/number/index'
import './index.scss'
export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        console.log(123)
    }
    componentDidMount(){
      console.log(2)
    }
    componentWillReceiveProps(){
      console.log(this.props)
      console.log(3)
    }
    shouldComponentUpdate(){
      console.log('更新了')
      return true
    }
    render(){
        console.log(Element)
        return (
            <div className='home cloud'>
                <div className="header">
                    <span className="title">中物互联数字消防云平台</span>
                    <ul className="clearfix">
                        <li className='l icon'>
                        <Dropdown menu={(
                            <Dropdown.Menu>
                               <Dropdown.Item>设置密码</Dropdown.Item>
                               <Dropdown.Item>退出登录</Dropdown.Item>
                             </Dropdown.Menu>
                             )}
                            >
                            <i className="iconfont icon-User"></i>
                        </Dropdown>
                        </li>
                        <li className="l user-name">张三</li>
                    </ul>
                </div>
                <div className='left-side l'>
                    <div className='side-header clearfix'>
                        <Number number='50'></Number>
                        <span>火警总数</span>
                    </div>
                    <div class="side-content">
                    </div>
                </div>
                <div className="right-side r">
                    <div className="side-header clearfix">
                        <Number number='150'></Number>
                        <span>预警总数</span>
                    </div>
                    <div class="side-content">
                    </div>
                </div>
                <div className='home-main'>
                    <ul className="home-main-header">
                        <li className='clearfix'>
                            <div className="l">
                                <p><i className="iconfont icon-Equipment"></i></p>
                                <p>项目数</p>
                            </div>
                            <p className="l">634</p>
                        </li>
                        <li className='clearfix'>
                            <div className="l">
                                <p><i className="iconfont icon-Equipment"></i></p>
                                <p>设备数</p>
                            </div>
                            <p className="l">634</p>
                        </li>
                        <li className='clearfix'>
                            <div className="l">
                                <p><i className="iconfont icon-Equipment"></i></p>
                                <p>故障数</p>
                            </div>
                            <p className="l">634</p>
                        </li>
                        <li className='clearfix'>
                            <div className="l">
                                <p><i className="iconfont icon-Equipment"></i></p>
                                <p>运维数</p>
                            </div>
                            <p className="l">634</p>
                        </li>
                    </ul>
                    <div id="map">

                    </div>
                    <div className='main-footer'>

                    </div>
                </div>
            </div>
        )
    } 
}