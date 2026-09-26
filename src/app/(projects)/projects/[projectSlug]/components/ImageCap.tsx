import Image from "next/image";

interface ImageCapProps {
  src: string;
  bgColor: string;
  caption: string;
  hasBorder: boolean;
  hasCaption: boolean;
}

const ImageCap = ({
  src,
  bgColor,
  caption,
  hasBorder,
  hasCaption,
}: ImageCapProps) => {
  return (
    <div className="my-8">
      <div
        className={`relative w-full justify-center p-1 backdrop-blur bg-foreground/5`}
      >
        <Image
          src={src}
          alt={caption}
          width={1920}
          height={1440}
          className="object-contain w-full"
        />
      </div>
      {hasCaption && (
        <div className="flex w-full justify-center mt-2 text-sm text-foreground/60">
          <h5>{caption}</h5>
        </div>
      )}
    </div>
  );
};

export default ImageCap;
