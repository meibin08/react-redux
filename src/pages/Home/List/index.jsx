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


class List extends Component{
	constructor(props){
		super(props);
    	this.state = {
    	};
	}
	componentDidMount(){
		let {ACTIONS} = this.props;
		ACTIONS.get_list();
	}
	render(){
		let {_list}=this.props;
		let odd=[],even=[];
		{
		_list.map((item,i)=>{
			let html =(
				<div className="item-data" key={i}>
					<img src={item.preview} alt={item.id}/>
					<p>{item.title}</p>
				</div>
			);
			if(i%2 == 0){
				even.push(html);
			}else{
				odd.push(html);
			}
		});
		}
		return ( 
			<section className="i-list">
				<ul className="main-list">
					<li className="li">

						<div className="item-data">
							<img src="http://s8.mogucdn.com/b7/pic/140813/laq5z_ieydomtegvswgnlbmiytambqmmyde_700x1050.jpg_225x999.jpg" alt=""/>
							<p>仙死你的连衣裙，今年最最流行的镂空面料，</p>
						</div>
						{odd}
					</li>
					<li className="li">
						<div className="item-data">
							<img src="http://s8.mogucdn.com/b7/pic/140813/laq5z_ieydomtegvswgnlbmiytambqmmyde_700x1050.jpg_225x999.jpg" alt=""/>
							<p>仙死你的连衣裙，今年最最流行的镂空面料，但是裙子又里衬所以完全不透，非常甜美，适合穿着约会或者参加朋友婚礼什么的，炒鸡美腻呢</p>
						</div>
						{even}
					</li>
				</ul>
				<Empty message="暂无数据"/>
			</section>
		);
	}
};

function mapStateToProps(state){
	const {list} = state.homeList;//
	return {
		_list:list
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(List);