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

function arr (b,c,e,f,g,fn1,fn2){
	var xMax = b,yMax= c;
	var x = 0,y=0;
	var _G = g || 0;
	var end = e,num=0;
	var W = document.documentElement.clientWidth|| document.body.clientWidth;
	var H =(document.documentElement.clientHeight|| document.body.clientHeight);
	var time = null;
	var ar = [];
	time = setInterval(()=>{
		if(x >= xMax){
			x = 0;
			y = y>= yMax ? 0 :y+=1;
		};
		var item = (W * -x -_G +"px ")+(-y* H+"px");
		ar.push(item);
		fn1&&fn1(item);
		x+=1;
		num++;
		num >= end && (clearInterval(time),fn2&&fn2(ar),console.log(ar));
	},f);
}

class Start extends Component{
	constructor(props){
		super(props);
		this.touchNum = 0;
    	this.state = {
    		touch_a:"",
    		touch_b:"",
    		touch_c:"",
    		touch_d:"",
    		circle_a:true,
    		circle_b:true,
    		circle_c:true,
    		circle_d:true,
    	};
	}
	componentDidMount(){
		
		console.log(this.state);
	}
	MaskPosition(key,attach){
		this.setState({
			[`circle_${key}`]:false
		});
		arr (4, 3, 12, 60,(attach||0),(item)=>{
			this.setState({
				[`touch_${key}`]:item
			});
		},()=>{
			this.touchNum+=1;
			if(this.touchNum>=3){
				arr (4, 5, 20, 80,0,(s)=>{
					this.setState({
						touch_d:s
					});
				});
			}
			console.log(this.touchNum);
		});
	}
	render(){
		let {touch_a,touch_b,touch_c,touch_d,
			circle_a,circle_b,circle_c,circle_d}=this.state;
		return (
			<section className="i-start" style={{"transition":"none","transform":"none"}}>
				<div className="page-content">
					<div className="m-mask">
						<p className={classnames("mask-circle mc1",{"hide":!circle_a})} onClick={(e)=>{this.MaskPosition("a");}}><i></i></p>
						<p className={classnames("mask-circle mc2",{"hide":!circle_b})} onClick={(e)=>{this.MaskPosition("b");}}><i></i></p>
						<p className={classnames("mask-circle mc3",{"hide":!circle_c})} onClick={(e)=>{this.MaskPosition("c",20);}}><i></i></p>
						<div className="mask-img">
							<div className="front"></div>
							<div className="back t4" style={{"WebkitMaskPosition":touch_d}}></div>
							<div className="touch t1" style={{"WebkitMaskPosition":touch_a}}></div>
							<div className="touch t2" style={{"WebkitMaskPosition":touch_b}}></div>
							<div className="touch t3" style={{"WebkitMaskPosition":touch_c}}></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

function mapStateToProps(state){
	const {homeStart} = state;//
	return {
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Start);