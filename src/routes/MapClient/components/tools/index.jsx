import React  from 'react'; 
import {   Button  } from 'antd'; 
import { connect } from 'dva'; 
import cx from 'classnames';
import { createFromIconfontCN } from '@ant-design/icons'; 

const IconFont = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_1585387_wz3psnbt8t.js'
});
 

function Nav(props){  
  
  return (
    <div className={cx('tools-mapClient')}> 
     <Button><IconFont type="icon-zongyunju" className={cx('f15')} /><br/>编辑道路</Button>
     <Button><IconFont type="icon-bianji" className={cx('f15')} /><br/>编辑路口</Button>
     <Button><IconFont type="icon-zhuangzaiqu" className={cx('f15')} /><br/>编辑装载区</Button>
     <Button><IconFont type="icon-xiezaiqu" className={cx('f15')} /><br/>编辑卸载区</Button>
     <Button><IconFont type="icon-bianji" className={cx('f15')} /><br/>编辑对象</Button>
     <Button><IconFont type="icon-icon-test" className={cx('f15')} /><br/>添加对象</Button>
     <Button><IconFont type="icon-shishijiankong" className={cx('f15')} /><br/>标记定位</Button>
     <Button><IconFont type="icon-ceju" className={cx('f15')} /><br/>测量距离</Button>
     <Button><IconFont type="icon-sousuo" className={cx('f15')} /><br/>要素查找</Button>
     <Button><IconFont type="icon-click" className={cx('f15')} /><br/>点选查询</Button>
     <Button><IconFont type="icon-zuzhijigou" className={cx('f15')} /><br/>拓扑工具</Button>
     <Button><IconFont type="icon-link" className={cx('f15')} /><br/>关联工具</Button>
     <Button><IconFont type="icon-baowenchaxun" className={cx('f15')} /><br/>所属工具</Button>
    </div>
  )
}
export default connect()(Nav)