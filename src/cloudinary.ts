import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "yachujoshi2",
  },
});

export const getImageURL = (publicID: string) => {
  const image = cld.image(publicID);
  return image.toURL();
};
