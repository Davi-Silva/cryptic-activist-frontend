import React, { useEffect, useState } from 'react';

import {
  Div,
  SeeAll,
  PostListTitleDiv,
  PostListTitle,
  Card,
  Cover,
  BackgroundWrapper,
  PublishedOn,
  PostInfoDiv,
  Title,
  CategoryDiv,
  Category,
} from '../../../styled-components/blog-posts-article.styled-components';

const Articles = () => {
  const [tutorialsState, setTutorialsState] = useState([]);

  useEffect(() => {
    const getTutorials = async () => {
      const response = await fetch('http://localhost:5000/blog/home/articles', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTutorialsState(data);
    };
    getTutorials();
  }, []);


  return (
    <>
      <Div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-6">
              <PostListTitleDiv>
                <PostListTitle>
                Article
                </PostListTitle>
              </PostListTitleDiv>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <SeeAll to="/blog/articles">
                See More
              </SeeAll>
            </div>
            {tutorialsState.map((post) => (
              <>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <Card
                    to={`/blog/${post.slug}`}
                    className="col-sm-6 col-12 p-0"
                    style={{ border: 'none' }}
                  >
                    <Cover
                      src={post.cover.url}
                      alt="React.js"
                      width="100%"
                      style={{
                        backgroundImage: `url(${post.cover.url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    >
                      <BackgroundWrapper />
                    </Cover>
                    <PostInfoDiv>
                      <PublishedOn>
                        {post.publishedOn}
                      </PublishedOn>
                      <Title>{post.title}</Title>
                      <CategoryDiv>
                        <Category>
                          {post.category}
                        </Category>
                      </CategoryDiv>
                    </PostInfoDiv>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </div>
      </Div>
    </>
  );
};

export default Articles;
