import sharp from "sharp";

sharp("./public/mountains.jpg")
  .resize(1920)
  .jpeg({ quality: 80 })
  .toFile("./public/mountains-compressed.jpg")
  .then(() => console.log("Image compressed"))
  .catch((err) => console.error(err));
