
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../static/img/no-content-img.png';

import BlogPostList from '../../components/UI/lists/BlogPostList.component';
import SubNavBar from '../../components/UI/navbar/SubNavBar';
import NewsletterSide from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesBlogPost';

import {
  LoadingAllContent,
  InfinitePostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../styled-components/blog-posts.styled-components';


export default class BlogPostsByTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      tag: '',
      page: 1,
      hasMore: null,
      found: false,
    };
    this.getFirstPosts = this.getFirstPosts.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;

    this.setStateAsync({
      tag: slug,
    });
    const postsList = await this.getFirstPosts(slug);
    let more = true;
    if (!postsList.found) {
      this.setStateAsync({
        found: false,
      });
    }
    if (postsList.length > 0) {
      if (postsList.length < 10) {
        more = false;
      }
      await this.setStateAsync({
        posts: postsList,
        hasMore: more,
        found: true,
      });
    }
  }

  async getFirstPosts(tag) {
    const {
      page,
    } = this.state;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/get/tag/${tag}?page=${page}`, {
    // this.response = await fetch(`http://localhost:5000/blog/get/tag/${tag}?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async getMorePosts() {
    const {
      page,
      tag,
      posts,
    } = this.state;
    this.response = await fetch(`https://cryptic-activist-backend.herokuapp.com/blog/get/tag/${tag}?page=${page}`, {
    // this.response = await fetch(`http://localhost:5000/blog/get/tag/${tag}?page=${page}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await this.response.json();
    if (data.length < 10) {
      this.setStateAsync({
        posts: posts.concat(data),
      });
      setTimeout(() => {
        this.setStateAsync({
          hasMore: false,
        });
      }, 10);
    } else {
      this.setStateAsync({
        page: page + 1,
      });
      this.setStateAsync({
        podcasts: posts.concat(data),
      });
    }
  }

  render() {
    const {
      tag,
      posts,
      hasMore,
      found,
    } = this.state;
    let allPosts;
    if (!found) {
      allPosts = (
        <>
          <div className="row">
            <div className="col-12">
              <NoContentDiv>
                <NoContentImg src={BitcoinDoddle} />
                <NoContentP>
                  No blog posts has been found.
                </NoContentP>
              </NoContentDiv>
            </div>
          </div>
        </>
      );
    } else {
      allPosts = (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <InfinitePostList>
                <InfiniteScroll
                  dataLength={posts.length}
                  next={this.getMorePosts}
                  hasMore={hasMore}
                  loader={(
                    <>
                      <LoadingAllContent>
                        <FaSpinner />
                      </LoadingAllContent>
                    </>
                    )}
                  endMessage={(
                    <div />
                    )}
                >
                  <div className="row">
                    {posts.reverse().map((post, key) => (
                      <BlogPostList
                        key={key}
                        type="Blog"
                        slug={post.slug}
                        imgSrc={post.coverUrl}
                        title={post.title}
                        publishedOn={post.publishedOn}
                      />
                    ))}
                  </div>
                </InfiniteScroll>
              </InfinitePostList>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <StickyWrapper>
                <RecentCategories />
                <NewsletterSide />
              </StickyWrapper>
            </div>
          </div>
        </>
      );
    }


    return (
      <>
        <SubNavBar media="Blog" category="Tag" title={`${tag.replace(/^\w/, (c) => c.toUpperCase())}`} />
        <div className="container" style={{ margin: '25px auto' }}>
          {allPosts}
        </div>
      </>
    );
  }
}