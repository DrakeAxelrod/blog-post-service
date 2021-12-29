import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps, ImageLoader } from "next/image";

export type NextChakraImageProps = Omit<BoxProps, "as"> & ImageProps;
// src: string | StaticImport;
// width?: number | string;
// height?: number | string;
// layout?: LayoutValue;
// loader?: ImageLoader;
// quality?: number | string;
// priority?: boolean;
// loading?: LoadingValue;
// lazyBoundary?: string;
// placeholder?: PlaceholderValue;
// blurDataURL?: string;
// unoptimized?: boolean;
// objectFit?: ImgElementStyle['objectFit'];
// objectPosition?: ImgElementStyle['objectPosition'];
// onLoadingComplete?: OnLoadingComplete;

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#4f5666" offset="20%" />
      <stop stop-color="#3f4451" offset="50%" />
      <stop stop-color="#4f5666" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#4f5666" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const NextChakraImage = ({
  src,
  alt,
  quality,
  priority,
  loading,
  className,
  objectFit,
  loader,
  ...rest
}: NextChakraImageProps) => {
  return (
    <Box {...rest}>
      <NextImage
        objectFit={objectFit}
        className={className}
        layout="fill"
        loader={loader}
        src={src}
        alt={alt}
        quality={quality}
        placeholder="blur"
        priority={priority}
        loading={loading}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </Box>
  );
};

export default NextChakraImage;
