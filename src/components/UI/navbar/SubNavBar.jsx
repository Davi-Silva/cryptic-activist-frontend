
import React, { Component } from 'react';

import {
  Container,
  SubNavigatorBar,
  Ul,
  Li,
  Separator,
} from '../../../styled-components/subnavbar.styled-components';

export default class SubNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerClassName: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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

  render() {
    const {
      containerClassName,
    } = this.state;
    const { media, category, title } = this.props;
    let subNavMenu;
    if (title === '') {
      subNavMenu = (
        <>
          <Ul>
            <Li>{media}</Li>
          </Ul>
        </>
      );
    } else {
      subNavMenu = (
        <>
          <Ul>
            <Li>{media}</Li>
            {' '}
            <Separator>{'>'}</Separator>
            {' '}
            <Li>{category}</Li>
            {' '}
            <Separator>{'>'}</Separator>
            {' '}
            <Li style={{ color: '#000', fontWeight: '900' }}>{title}</Li>
          </Ul>
        </>
      );
    }
    return (
      <SubNavigatorBar className={containerClassName}>
        <Container className="container">
          <div className="row">
            <div className="col-12">
              {subNavMenu}
            </div>
          </div>
        </Container>
      </SubNavigatorBar>
    );
  }
}
