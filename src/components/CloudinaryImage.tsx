import { cloudinary } from "../cloudinary";
import {
  AdvancedImage,
  lazyload,
  accessibility,
  placeholder,
} from "@cloudinary/react";

type CloudinaryImageProps = React.ComponentProps<typeof AdvancedImage> & {
  publicId: string;
};

export const CloudinaryImage = (props: CloudinaryImageProps) => {
  const image = cloudinary.image(props.publicId);
  const plugins = [lazyload(), accessibility(), placeholder()];

  return <AdvancedImage {...props} cldImg={image} plugins={plugins} />;
};
