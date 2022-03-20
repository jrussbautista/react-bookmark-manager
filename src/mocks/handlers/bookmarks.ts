import { rest } from 'msw';
import { API_URL } from './../../constants/app';

// 1 second
const DELAY = 1000;

export const bookmarksHandlers = [
  rest.get(`${API_URL}bookmarks`, (req, res, ctx) => {
    return res(
      ctx.delay(DELAY),
      ctx.json({
        data: [
          {
            id: 1,
            title: 'Bookmark title',
            description: 'bookmark description',
            link: 'https://www.link.com',
            createdAt: '2022-03-20T08:52:33.303Z',
            updatedAt: '2022-03-20T08:52:33.303Z',
          },
        ],
      })
    );
  }),
];
