import Chance from 'chance';

const chance = new Chance();

const date = chance.date().toString();

type Overrides = Record<string, any>;

export const bookmarksGenerator = (overrides?: Overrides) => ({
  id: chance.guid(),
  title: chance.sentence({ words: 3 }),
  description: chance.paragraph({ sentences: 3 }),
  link: chance.domain(),
  createdAt: date,
  updatedAt: date,
  ...overrides,
});
