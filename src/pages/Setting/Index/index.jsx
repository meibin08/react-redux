/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description： 示例 - 首页 模块
 */

import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { Link ,browserHistory } from 'react-router';
import {Panel,Modal,Button,Icon,Cell,Input,Switch} from 'dragon-mobile-ui';
import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import format from "src/utils/format";
import dia from "src/utils/dia";
import actions from "src/actions";
import './Index.scss';


class Setting extends Component{
	constructor(props){
		super(props);
    	this.state = {
			isLoading:false,
			alert:false,
			disable:true,
			disableTips:""
    	};
	}
	componentDidMount(){
		dia(this);
		let {ACTIONS}=this.props;
	}
	render(){
		
		return ( 
			<section className="i-setting">
				<div className="cell-page">
					<Cell title="个人资料" type="link"/>
				</div>
				<div className="cell-page">
					<Cell title="开放定位"  description={<Switch theme="success" onChange={(v)=>{console.log(v)}}/>}/>
					<Cell title="附近好友"  description={<Switch theme="success" onChange={(v)=>{console.log(v)}}/>}/>
					<Cell title="接收消息"  description={<Switch theme="success" onChange={(v)=>{console.log(v)}}/>}/>
				</div>
				<div className="cell-page">
					<Cell title="邀请好友" type="link"/>
					<Cell title="关于众安" type="link"/>
				</div>
				<div className="cell-page">
					<Cell className="log-out" title="退出登录"/>
				</div>
			</section>
		);
	}
};

const SVGICON = (props)=>(
	<svg className="i-svg">
		<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={require('./images/icon.svg')+"#svg-i0"} />
	</svg>
);
function mapStateToProps(state){
	// console.log(state)
	const {classList,wave,loadOver} = state.homeIndex;
	return {};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Setting);