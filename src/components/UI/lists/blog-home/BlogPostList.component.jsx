import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Cover,
  Title,
} from '../../../../styled-components/blog-posts.styled-components';

export default class BlogPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // publishedOn: null,
      slug: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const {
      type,
      imgSrc,
      title,
      category,
      publishedOn,
      slug,
    } = this.props;
    const typeLower = type.toLowerCase();
    const titleLower = title
      .toLowerCase()
      .split(' ')
      .join('-');
    const editTo = `/edit/${typeLower}/${titleLower}`;

    const dateFormatted = await this.parseDate(publishedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedDate = `${months[dateFormatted.getMonth()]
    } ${
      dateFormatted.getDate()
    } ${
      dateFormatted.getFullYear()}`;

    let tempTitle = title;
    if (title.length > 50) {
      tempTitle = `${title.substring(0, 50).trim()}...`;
    }

    await this.setStateAsync({
      type,
      title: tempTitle,
      category,
      publishedOn: formattedDate,
      slug,
      imgSrc,
      // audioFileUrl: path,
      // liID,
      editTo,
    });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title,
      imgSrc,
      slug,
    } = this.state;

    return (
      <>
        <Card
          to={`/blog/${slug}`}
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          style={{ border: 'none' }}
        >
          <Cover
            src={imgSrc}
            alt="React.js"
            width="100%"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <Title>{title}</Title>
        </Card>
      </>
    );
  }
}

BlogPostList.propTypes = {
  type: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
