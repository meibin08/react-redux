/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description： 示例 - 基础介绍 模块
 */

import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { Link ,browserHistory } from 'react-router';
import { Modal,Panel, Icon, Cell} from 'dragon-mobile-ui';
import { fetchJson } from 'src/utils/fetch';
import StaticToast from 'src/components/common/Toast';
import format from "src/utils/format";
import dia from "src/utils/dia";
import actions from "src/actions";
import './Index.scss';




class Index extends Component{
	constructor(props){
		super(props);
    	this.state = {
			
    	};
	}
	componentDidMount(){
		dia(this);
		//this.GetInit();
		let {ACTIONS}=this.props;
		ACTIONS.introInit();

	}

	render(){
		let {_introList,ACTIONS}=this.props;
		return ( 
			<section className="i-introduction">
				<header className="hd">
					<p className="message">Hi, 以下是Redux的基<br/>本理念介绍</p>
					<p className="logo">
						<img src={require('./images/logo.svg')} />
					</p>
				</header>
				<div className="list">
					<h2 className="tit">其实我也是瞎掰的，哈哈~~</h2>
					{
					_introList.map((item,index)=>{
						return (
							<section id={item.id} className={classnames("faq-row",{"active":item.status})} key={"abc"+item.id}>
								<Cell type="link" title={item.title} onClick={()=>ACTIONS.toggle(item.id)} icon={<SVG herf={require('./images/icon.svg')+"#svg-contact1"} />} />
								<ul className="row-list">
									{
									item.children.map((rows,i)=>{
										return (
											<li className="item" key={rows.id}>
												{rows.title!=''?(<h3 className="row-title">{rows.title}</h3>):null}
												<div className="content">{rows.content}</div>
											</li>
										);
									})
									}
								</ul>
							</section>
						);
					})
					}
				</div>
			</section>
		);
	}
};

const SVG=(props)=>(
	<svg className={classnames("contact-svg",{[`${props.className}`]:(props.className?true:false)})}>
		<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={props.herf} />
	</svg>
);
function mapStateToProps(state){
	// console.log(state);
	const {introIndex} = state;//
	return {
		_introList:introIndex.introList
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Index);