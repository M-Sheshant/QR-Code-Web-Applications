const imageDownloader = require("image-downloader");

const options = {
  url:"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SheshantM",
  dest: "./output/photo.jpg",
  // will be saved to /path/to/dest/image.jpg
};

imageDownloader
  .image(options)
  .then(({ filename }) => {
    console.log("file saved" + filename);
  })
  .catch((err) => console.error(err));