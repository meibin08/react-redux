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
import StaticLoad from 'src/components/common/Loading';
import format from "src/utils/format";
import aMap from "src/plugins/aMap";
import dia from "src/utils/dia";
import actions from "src/actions";
import Empty from 'src/components/common/Empty';
import './Index.scss';


class Friends extends Component{
	constructor(props){
		super(props);
		this.map = null;
    	this.state = {
    		alert:false,
    		alertTips:""
    	};
	}
	componentDidMount(){
		dia(this);
		let {ACTIONS}=this.props;
		aMap.config((AMap)=>{
			this.map = new AMap.Map('container', {
			    resizeEnable: true,
			    zoom:11
			});
			ACTIONS.friends_location({
				map:this.map,
				success:(data)=>{
					StaticLoad.show("d");
					let {position}=data;
					AMap.service(["AMap.PlaceSearch"], ()=> {

						var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
				            pageSize: 30,
				            type: '休闲',
				            pageIndex: 1,
				            // map:this.map
				            panel: "panel"
				        });
				        
				        var cpoint = [position.lng,position.lat]; //中心点坐标
				        placeSearch.searchNearBy('', cpoint, 5000,(status, res)=>{
				        	if(status == "complete" && res.info =="OK"){

				        		let {pois} = res.poiList;
				        		ACTIONS.friends_sreach(pois);
				        		for(let i=0;i<pois.length;i++){
				        			((i)=>{
				        				let {lng,lat} = pois[i].location;

				        				let markers = new AMap.Marker({
				        					icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",
				        					map: this.map,
				        					position:[lng,lat],
				        					content:'<div class="amap-marker-content"><div class="amap_lib_placeSearch_poi">'+(i+1)+'</div></div>'
				        				});
				        				AMap.event.addListener(markers,"click",(e)=>{
				        					var _this = e;
				        					// 根据起终点经纬度规划驾车导航路线
				        					//console.log(72,e);
				        					this.setState({alert:true});
				        				},false);
				        				this.map.setFitView();
				        				//markers.setAnimation('AMAP_ANIMATION_BOUNCE');
				        				//markers.setMap(this.map);
				        			})(i)
				        		};
				        	}else{
				        		StaticToast.error("附近暂时没有共享位置的用户");
				        	};
				        	console.log(50,res);
				        	StaticLoad.remove("d");
				        });
				        
				    });
				}
			})
			
		});
	}

	render(){
		let {alert,alertTips} = this.state;
		return ( 
			<section className="i-friends">
				<div className="container" id="container" style={{height:screen.height+"px"}}></div>
				<Alert visible={alert} message={alertTips} close={this.close}/>
			</section>
		);
	}
};
const Alert = (props)=>(
	<Modal {...props} visible={props.visible} radius>
      <Modal.Body>
        <p style={{textAlign:"center"}}>{props.message||"该功能正在开发中，敬请期待！"}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button radius block bordered size="sm" onClick={() => props.close('alert')}>关闭</Button>
      </Modal.Footer>
    </Modal>
);

function mapStateToProps(state){
	const {userPosition} = state.homeFriends;//
	console.log(userPosition);
	return {
		_userPos:userPosition
	};
}; 

function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default  connect(mapStateToProps,mapDispatchToProps)(Friends);