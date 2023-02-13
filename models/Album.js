const albums = [
  {
    id: 1,
    title: "You, Me and an App ID",
    artist: "Daprize",
    price: 56.99,
    image_url: "https://aka.ms/albums-daprlogo",
  },
  {
    id: 2,
    title: "Seven Revision Army",
    artist: "The Blue-Green Stripes",
    price: 17.99,
    image_url: "https://aka.ms/albums-containerappslogo",
  }
];

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

const getAlbums = async () => {
  await sleep(1000);
  return Promise.resolve(albums);
};

exports.getAlbums = getAlbums;
