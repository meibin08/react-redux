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

class Start extends Component{
	constructor(props){
		super(props);
		this.touchNum = 0;
    	this.state = {
    	};
	}
	render(){
		let {_transition,ACTIONS,_hideStart}=this.props;
		return (
			<section className={classnames("i-start",{"transition-hide":_hideStart})} >
				<div className="page-content">
					<div className="m-mask">
					{
					_transition.map((circle,i)=>{
						return (i>2?null:(<p key={'circle'+i} className={classnames("mask-circle",{[`mc${(i+1)}`]:true,"hide":!circle.status})} onClick={()=>ACTIONS.dotHandler(circle,(_transition[_transition.length-1]))}><i></i></p>));
					})
					}

						<div className="mask-img">
							<div className="front"></div>
							{
							_transition.map((item,i)=>{
								return (
									<div key={'touch'+i} className={classnames({"touch":(i<3),"back":(i>2),[`th${(i+1)}`]:true})} style={{"WebkitMaskPosition":item.maskPosition}}></div>
								);
							})
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
};

function mapStateToProps(state){
	const {transition,hideStart} = state.homeStart;//
	return {
		_transition:transition,
		_hideStart:hideStart
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Start);