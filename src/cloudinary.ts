import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const cld = new Cloudinary({
  cloud: {
    cloudName: "yachujoshi2",
  },
});

export const getImageURL = (publicID: string) => {
  const image = cld.image(publicID);
  const originalURL = image.toURL();
  image.resize(fill().width(293).height(293).gravity(focusOn(FocusOn.faces())));
  const resizedURL = image.toURL();
  return { originalURL, resizedURL };
};
