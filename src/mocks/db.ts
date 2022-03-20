import { factory, primaryKey } from '@mswjs/data';

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
