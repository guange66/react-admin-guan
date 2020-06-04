import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import Nav from './Nav/index.jsx';
import Tools from './tools/index.jsx';

import './index.less';

function MapClient(props) {
  const { mapClient} = props;
  return (
    <div className="mapClient">
      <Nav />
      <Tools />
      <Row>
        {mapClient.windowState.map ? <Col span={5}>col-5</Col> : ''} 
        <Col span={mapClient.windowState.map?14:19}>col-14</Col>
        <Col span={5}>col-5</Col>
      </Row>
    </div>
  );
}
export default connect(({ mapClient }) => ({ mapClient }))(MapClient);
 
