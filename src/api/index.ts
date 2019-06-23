export interface IArticle {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
}

export const fakeData: IArticle[] = [
  {
    id: 1,
    title: 'typescript',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 2,
    title: 'react',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 3,
    title: 'redux',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
];

/*
const setDelay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async (id?: number) => {
  const result = await setDelay(2000).then(() => {
    return id ? fakeData.filter(data => data.id === id) : fakeData;
  });
  return result;
};
*/
