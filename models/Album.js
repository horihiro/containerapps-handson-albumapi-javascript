const albums = [
  {
    id: 1,
    title: "You, Me and an App ID",
    artist: "Daprize",
    price: 56.99,
    image_url: "https://aka.ms/albums-daprlogo",
  }
];

const getAlbums = async () => {
  return Promise.resolve(albums);
};

exports.getAlbums = getAlbums;
