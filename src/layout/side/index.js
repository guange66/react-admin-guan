import React from "react";
import { Menu , Icon  } from "antd"; 
import {  HashRouter ,  NavLink  } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig.js';
const { SubMenu } = Menu;

class zSide extends React.Component {
 
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
  })
  }
  // 菜单渲染
  renderMenu =(data)=>{
    return data.map((item)=>{
        if(item.children){
            return (
                <SubMenu title={item.title} key={item.key}>
                    { this.renderMenu(item.children)}
                </SubMenu>
            )
        }
        return <Menu.Item title={item.title} key={item.key}>
            <Icon type="appstore" />
            <span>
            <NavLink to={item.key}>{item.title}</NavLink>
            </span>
           
        </Menu.Item>
    })
}
menuClick = (item)=>{
  console.log(this)
  this.props.history.replace(item.key);
}
  
  render() {
    return (
      <HashRouter>
      <div className="menuContainer" >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark" 
          // onClick={ this.menuClick }
        > 
         { this.state.menuTreeNode }
        </Menu> 
      </div>
      </HashRouter>
    );
  }
}
export default zSide;
