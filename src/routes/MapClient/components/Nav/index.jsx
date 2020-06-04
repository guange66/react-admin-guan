
import React,{useState,useRef,useLayoutEffect,useEffect} from 'react'; 
import { Menu, Dropdown, Button  } from 'antd';
import Icon from 'components/Icon';
import $$ from 'cmn-utils';
import { connect } from 'dva';
import cx from 'classnames';


import '../index.less';

// @connect(({ global }) => ({ global }))
// export default class Nav extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     console.log(props) 
//   }

//   render() {
//     return <div>我是按钮252</div>;
//   }
// }

// @connect(({ global }) => ({ global }))
function Nav(props){ 
  console.log(props) 
  const {mapClient,dispatch}=props
  const firstUpdate = useRef(true);

  const fileMenu = (
    <Menu>
      <Menu.Item onClick={()=>{alert('222')}}>
        打开点云文件
      </Menu.Item>
      <Menu.Item>
      打开轨迹点文件
      </Menu.Item>
      <Menu.Item>
      打开自定义文件
      </Menu.Item>
    </Menu>
  );
  const toolMenu=(
  <Menu>
      <Menu.Item>
        地形计算工具
      </Menu.Item>
      <Menu.Item>
        点云切片工具
      </Menu.Item>
      <Menu.Item>
        曲线拟合工具
      </Menu.Item>
    </Menu>
  );
  const serveMenu=(
    <Menu>
        <Menu.Item>
          获取矿区列表
        </Menu.Item>
        <Menu.Item>
          获取地图版本列表
        </Menu.Item>
        <Menu.Item>
          获取适量数据列表
        </Menu.Item>
        <Menu.Item>
          发送地图发布消息
        </Menu.Item>
      </Menu>
    );
    const windowMenu=(
      <Menu>
          <Menu.Item onClick={()=>{
            dispatch({
              type: 'mapClient/toggleMap', // 如果在 model 外调用，需要添加 namespace
              payload:!mapClient.windowState.map, // 需要传递的信息
            }) 
          }}>
           { mapClient.windowState.map?(
            <Icon antd type="CheckOutlined" />
           ):''} 地图管理窗口
          </Menu.Item>
          <Menu.Item>
            属性显示窗口
          </Menu.Item>
          <Menu.Item onClick={()=>{
            dispatch({
              type: 'mapClient/toggleMap', // 如果在 model 外调用，需要添加 namespace
              payload:!mapClient.windowState.map, // 需要传递的信息
            }) 
          }}>
            日志输出窗口
          </Menu.Item> 
        </Menu>
      );
      
    const setMenu=(
      <Menu>
          <Menu.Item>
            参数设置
          </Menu.Item> 
        </Menu>
      );
      const countMenu=(
        <Menu>
            <Menu.Item>
              曲线平滑
            </Menu.Item> 
            <Menu.Item>
              曲线抽稀
            </Menu.Item> 
            <Menu.Item>
              360拟合
            </Menu.Item> 
            <Menu.Item>
              装载区时别边界更新
            </Menu.Item> 
            <Menu.Item>
              卸载区识别挡墙更新
            </Menu.Item> 
          </Menu>
        );
  useLayoutEffect(()=>{
    if (firstUpdate.current) {

      firstUpdate.current = false; 
      return;

    } 
  },[])
  return (
    <div className="nav-mapClient"> 
    <Dropdown overlay={fileMenu} placement="bottomLeft">
      <Button>文件</Button>
    </Dropdown>
    <Dropdown overlay={toolMenu} placement="bottomLeft">
      <Button>工具</Button>
    </Dropdown>
    <Dropdown overlay={serveMenu} placement="bottomLeft">
      <Button>服务</Button>
    </Dropdown>
    <Dropdown overlay={windowMenu} placement="bottomLeft">
      <Button>窗口</Button>
    </Dropdown>
    <Dropdown overlay={setMenu} placement="bottomLeft">
      <Button>设置</Button>
    </Dropdown>
    <Dropdown overlay={countMenu} placement="bottomLeft">
      <Button>算法</Button>
    </Dropdown>
    </div>
  )
}
export default connect( ({ mapClient }) => ({ mapClient }) )(Nav)