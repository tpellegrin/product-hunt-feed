import React, { useState, useRef, useCallback } from 'react';

import { Card, Container, Loading } from './Elements';
import Service from '../../../service/productHuntService';

interface Props {
  orderBy: string;
}

interface Post {
  name: string;
  tagline: string;
  votesCount: string;
  thumbnail: {
    url: string;
  }
}

function Posts(props: Props) {
  const queryString = useCallback((cursor: string = '') => {
    return (`
      query { 
        posts(order: ${props.orderBy}, after: "${cursor}") {
          edges {
            node {
              name
              tagline
              votesCount
              thumbnail {
                url
              }
            }
          }
          pageInfo {
            endCursor
          }
        }
      }`)
  }, [props])

  const [query, setQuery] = useState(queryString());

  const { 
    loading,
    error,
    posts,
    cursor 
  } = Service(query);

  const observer = useRef<any>();

  const lastPost = useCallback(post => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setQuery(queryString(cursor));
      }
    });

    if (post) observer.current.observe(post);
  }, [loading, queryString, cursor]);

  return (
    <>
      <Container>
        {posts.map((post: Post, index) => {
          if (posts.length === index + 1) {
            return <div ref={lastPost}>
              <Card
                title={post.name}
                desc={post.tagline}
                imgUrl={post.thumbnail.url}
                upvote={post.votesCount}
              />
            </div>
          } else {
            return <Card
              title={post.name}
              desc={post.tagline}
              imgUrl={post.thumbnail.url}
              upvote={post.votesCount}
            />
          }
        })}

        {loading && <Loading />}
        {error && 'Error!'}
      </Container>
    </>
  );
}

export default Posts;
