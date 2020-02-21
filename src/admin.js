import React from "react";
import ZSide from "./layout/side";
// import EqTabs from './layout/tabs';
import "./style/layout.less";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Layout, Icon, Tabs, Button } from "antd";

import Home from './pages/home'
import User from './pages/user'
const { TabPane } = Tabs;
const { Sider, Content } = Layout;

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: this.props.children, key: "/home" },
      { title: "Tab 2", content: this.props.children, key: "/user" }
    ];
    this.state = {
      collapsed: false,
      mode: "top",
      activeKey: panes[0].key,
      panes
    };
  }
  
  onChange = activeKey => {
    this.setState({ activeKey });
    console.log(activeKey)
    //this.props.history.push(activeKey);
    // this.props.history.replace({pathname:'/' + activeKey, state:{
    //     tabKey: activeKey
    // }});
    // this.props.history.replace('/' + activeKey);
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  // state = {
  //     collapsed: false,
  // };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content:this.props.children, key: activeKey });
    this.setState({ panes, activeKey });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <ZSide />
          <div className="sideTools">
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "10px",
              padding: 10,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Router>
              <div>
                <div style={{ marginBottom: 16 }}>
                  <Button onClick={this.add}>ADD</Button>
                </div>
                <Tabs
                  hideAdd
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
                  className="eq-tabs"
                >
                  {this.state.panes.map(pane => (
                    // <TabPane tab={<link to={pane.key}>{pane}</link>} key={pane.key}></TabPane>
                    <TabPane
                      tab={<Link to={pane.key}>{pane.title}</Link>}
                      key={pane.key}
                    >
                        {pane.content}
                      {/* {pane.content}
                      {this.props.children}  */}
                      {/* {this.props.children} */}
                        {/* <Switch>
                            <Route path={pane.key} exact /> 
                        </Switch> */}
                    </TabPane>
                  ))}
                </Tabs>
              </div>
            </Router>
            {/* {this.props.children} */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
