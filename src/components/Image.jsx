import { IKImage } from "imagekitio-react";

export default function Image({ path, alt, className, width, height }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      className={className}
      path={path}
      transformation={[{ width, height }]}
      loading="lazy"
      alt={alt}
      lqip={{ active: true, quality: 20 }}
    />
  );
}
