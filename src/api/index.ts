interface article {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

const fakeData: article[] = [
  {
    id: 1,
    title: 'typescript',
    author: 'shin',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: 'react',
    author: 'kim',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'redux',
    author: 'seong',
    content: 'lorem ipsum',
    createdAt: new Date().toLocaleDateString(),
  },
];

const setDelay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async (id?: number) => {
  const result = await setDelay(2000).then(() => {
    return id ? fakeData.filter(data => data.id === id) : fakeData;
  });
  return result;
};

export default fetchData;
