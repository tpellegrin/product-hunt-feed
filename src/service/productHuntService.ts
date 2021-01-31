import { useEffect, useState } from 'react';
import axios from 'axios';

function Service(query: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: 'POST',
      url: 'https://api.producthunt.com/v2/api/graphql',
      data: { query: query },
      headers: { Authorization: `Bearer ${process.env.REACT_APP_PRODUCT_HUNT_API_TOKEN}` }
    }).then(res => {
      setPosts((prevPosts): any => {
        return [...prevPosts, ...res.data.data.posts.edges.map((el: any) => el.node)]
      });
      setCursor(res.data.data.posts.pageInfo.endCursor);
      setLoading(false);
    }).catch(error => {
      setError(true);

      return;
    })
  }, [query]);

  return { loading, error, posts, cursor };
}

export default Service;
