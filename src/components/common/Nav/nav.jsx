import React, { Component, PropTypes } from 'react';
import {Link } from 'react-router';
import classnames from 'classnames';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible:props.visible||false,
    };
  }
  render() {
    const props = this.props;
    const { children, className,title, ...others } = props;

    return (
      <section className={"cm-nav-tit "+(className||'default')}>
        <div className={classnames("other",{"hide":!this.state.visible})}>
          { children ||(<a href="https://cdn.cnbj1.fds.api.mi-img.com/files/faq_mifi_insurance.html" className="nav-faq">常见问题</a>)}
        </div>
        <h3>{title||"精选推荐"}</h3>
      </section>
    )
  }
}

export default Nav
