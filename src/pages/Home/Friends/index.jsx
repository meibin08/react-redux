/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description： 示例 - 列表 模块
 */

import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { Link ,browserHistory } from 'react-router';
import {Panel,Modal,Button,Icon,Cell,Input} from 'dragon-mobile-ui';
import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import format from "src/utils/format";
import dia from "src/utils/dia";
import actions from "src/actions";
import Empty from 'src/components/common/Empty';
import './Index.scss';


class Friends extends Component{
	constructor(props){
		super(props);
    	this.state = {
    	};
	}

	render(){
		return ( 
			<section className="i-home"><br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<Empty message="异步加载功能，已经在 '首页' 示例代码中体现"/>
			</section>
		);
	}
};

function mapStateToProps(state){
	const {homeIndex} = state;//
	return {
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Friends);