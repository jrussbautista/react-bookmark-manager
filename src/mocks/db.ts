import { factory, primaryKey } from '@mswjs/data';
import { bookmarkGenerator } from './generator';

const model = {
  bookmarks: {
    id: primaryKey(String),
    title: String,
    description: String,
    link: String,
    createdAt: String,
    updatedAt: String,
  },
};

export const db = factory(model);

function seed() {
  const MAX_BOOKMARKS_COUNT = 20;
  Array(MAX_BOOKMARKS_COUNT)
    .fill(null)
    .forEach(() => {
      const bookmark = bookmarkGenerator();
      db.bookmarks.create(bookmark);
    });
}

seed();
