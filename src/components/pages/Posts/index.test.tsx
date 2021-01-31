
import React from 'react';
import { render, screen } from '@testing-library/react';

import Posts from './index';
import { Card } from './Elements';

test('renders pages', () => {
  render(<Posts orderBy="NEWEST" />);
  render(<Posts orderBy="VOTE" />);
});

test('renders card', () => {
  render(
    <Card
      title={'Test'}
      desc={'Test'}
      imgUrl={'Test'}
      upvote={'Test'}
    />
  );
});
