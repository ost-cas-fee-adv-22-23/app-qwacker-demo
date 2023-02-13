import { FC, ImgHTMLAttributes } from "react";

type Props<T> = {
  imageComponent?: FC<T>;
} & T;

export function Image<T = ImgHTMLAttributes<HTMLImageElement>>({
  imageComponent,
  ...props
}: Omit<Props<T>, "className">) {
  const ImageComponent = imageComponent || "img";

  return <ImageComponent {...(props as any)} className="rounded" />;
}
