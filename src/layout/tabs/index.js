import React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom'
import { Tabs, Button } from 'antd';
import Home from './../../pages/home'
import User from './../../pages/user'

const { TabPane } = Tabs;

 
class EqTabs extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content:<Home/>, key: '/home' },
      { title: 'Tab 2', content: <User/>, key: '/user' },
    ];
    this.state = {
         mode: 'top',
      activeKey: panes[0].key,
      panes,
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

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
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
            <TabPane tab={ <Link to={pane.key}>{pane.title}</Link>} key={pane.key}>
               
              {pane.content}
              {/* {this.props.children} 
              <Switch>
                <Route path={pane.key} exact /> 
              </Switch> */}
            </TabPane>
          ))}
        </Tabs>
      </div>
      </Router>
    );
  }
}
export default EqTabs;
// ReactDOM.render(<Demo />, mountNode);