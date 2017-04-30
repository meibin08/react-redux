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
import {Panel,Modal,Button,Icon,Cell,Input} from 'dragon-mobile-ui';
import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import Nav from 'src/components/common/Nav';
import Empty from 'src/components/common/Empty';
import format from "src/utils/format";
import dia from "src/utils/dia";
import actions from "src/actions";
import './Index.scss';

class Items extends Component{
	render(){
		let {item,index,ACTIONS}=this.props;
		return (
			<li className="li-item ds-box">
				<p className="content cm-flex">{index+1}、{item.content}</p>
				<Button theme="info" size="xs" radius onClick={()=>ACTIONS.deleteHandle(item.id)}>删除</Button>
			</li>
		);
	}
};

class Handler extends Component{
	constructor(props){
		super(props);
    	this.state = {
			alert:false,
			alertTips:"",
			content:""
    	};
	}
	componentDidMount(){
		dia(this);
		let {ACTIONS}=this.props;
		ACTIONS.handlerInit();
	}
	addHandle(){
		let {ACTIONS}=this.props;
		let {content,alert,alertTips} = this.state;
		if(!content.trim()){
			this.setState({
				alert:true,
				alertTips:"请输入想要增加的内容"
			});
			return false;
		};
		ACTIONS.addHandle(content);
		this.setState({content:""});
	}

	render(){
		let {content,alert,alertTips} = this.state;
		let {_handlerList} = this.props;
		return ( 
			<section className="i-handle">
				<header className="hd">
					<p className="search">
						<Input placeholder="请输入要增加的内容" theme="info" value={content} onChange={(e)=>{this.setState({content:e.target.value})}} radius /> 
					</p>
					<Button theme="info" size="sm" radius onClick={()=>this.addHandle()}>增加</Button>
				</header>
				<Nav title="增删列表" visible={true}>
					<p>操作</p>
				</Nav>
				<ul className="add-del-list">
					{
					_handlerList.map((item,i)=>{
						return(<Items item={item} index={i} key={'row'+i} {...this.props}/>);
					})
					}
				</ul>
				<Alert alert={alert} alertTips={alertTips} close={this.close} {...this.props}/>
				{!_handlerList.length?(<Empty message="暂无数据，快点添加吧~~"/>):null}
			</section>
		);
	}
};
const Alert = (props)=>(
	<Modal {...props} visible={props.alert} radius>
      <Modal.Body>
        <p style={{textAlign:"center"}}>{props.alertTips}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button radius block bordered size="sm" onClick={() => props.close('alert')}>关闭</Button>
      </Modal.Footer>
    </Modal>
);
function mapStateToProps(state){
	const {handlerIndex} = state;//
	// console.log(handlerIndex.handlerList);
	return {
		_handlerList:handlerIndex.handlerList,
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Handler);