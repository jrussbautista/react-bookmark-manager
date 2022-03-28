import { rest } from 'msw';
import Change from 'chance';
import { API_URL } from './../../constants/app';
import { db } from '../db';

// 1 second
const DELAY = 1000;

const chance = new Change();

export const bookmarksHandlers = [
  rest.get(`${API_URL}bookmarks`, (req, res, ctx) => {
    const bookmarks = db.bookmarks.getAll();
    return res(
      ctx.delay(DELAY),
      ctx.json({
        data: bookmarks,
      })
    );
  }),

  rest.get(`${API_URL}bookmarks/:id`, (req, res, ctx) => {
    const id = req.params.id as string;
    const bookmark = db.bookmarks.findFirst({
      where: { id: { equals: id } },
    });
    if (!bookmark) {
      return res(
        ctx.delay(DELAY),
        ctx.status(404),
        ctx.json({ message: 'Bookmark not found.' })
      );
    }
    return res(ctx.delay(DELAY), ctx.json(bookmark));
  }),

  rest.post(`${API_URL}bookmarks`, (req, res, ctx) => {
    const id = chance.guid();
    const date = new Date().toISOString();
    const data = req.body as object;
    const newBookMark = {
      id,
      createAt: date,
      updatedAt: date,
      ...data,
    };
    const bookmark = db.bookmarks.create(newBookMark);
    return res(ctx.delay(DELAY), ctx.json(bookmark));
  }),

  rest.delete(`${API_URL}bookmarks/:id`, (req, res, ctx) => {
    const id = req.params.id as string;

    db.bookmarks.delete({ where: { id: { equals: id } } });
    return res(
      ctx.delay(DELAY),
      ctx.json({
        id,
      })
    );
  }),

  rest.put(`${API_URL}bookmarks/:id`, (req, res, ctx) => {
    const id = req.params.id as string;
    const data = req.body as {
      title: string;
      description: string;
      link: string;
    };

    const updatedBookmark = db.bookmarks.update({
      where: { id: { equals: id } },
      data,
    });

    return res(ctx.delay(DELAY), ctx.json(updatedBookmark));
  }),
];
