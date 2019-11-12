/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import {
  SubNavigatorBar, Ul, Li, Separator,
} from '../../../styled-components/subnavbar.styled-components';

export default class SubNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerClassName: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  async componentDidMount() {
    const { media, category, title } = this.props;
    await this.setStateAsync({
      media, category, title,
    });
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async listenScrollEvent(e) {
    const container = window.document.body.children[1].children[2];
    if (window.scrollY >= 44) {
      console.log('container:', container);
      container.className = 'container fixedSubNavBarContainer';
      console.log('container:', container);
      await this.setStateAsync({ containerClassName: 'subNavBarFixed' });
      const { containerClassName } = this.state;
      // console.log(
      //   'this.state.containerClassName:',
      //   containerClassName,
      // );
    } else {
      console.log('container:', container);
      container.className = 'container relativeSubNavBarContainer';
      console.log('container:', container);
      await this.setStateAsync({ containerClassName: 'subNavBarRelative' });
      const { containerClassName } = this.state;
      // console.log(
      //   'this.state.containerClassName:',
      //   containerClassName,
      // );
    }
  }

  render() {
    const {
      containerClassName,
    } = this.state;
    const { media, category, title } = this.props;
    let subNavMenu;
    if (title === '') {
      subNavMenu = (
        <Ul>
          <Li>{media}</Li>
        </Ul>
      );
    } else {
      subNavMenu = (
        <Ul>
          <Li>{media}</Li>
          {' '}
          <Separator>{'>'}</Separator>
          {' '}
          <Li>{category}</Li>
          {' '}
          <Separator>{'>'}</Separator>
          {' '}
          <Li style={{ color: '#0058e4', fontWeight: '900' }}>{title}</Li>
        </Ul>
      );
    }
    return (
      <SubNavigatorBar className={containerClassName}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {subNavMenu}
            </div>
          </div>
        </div>
      </SubNavigatorBar>
    );
  }
}