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
        className={`relative w-full justify-center bg-white/10 p-1 rounded-2xl ${
          hasBorder ? "border border-white/10" : ""
        }`}
      >
        <Image
          src={src}
          alt={caption}
          width={1920}
          height={1440}
          className="object-cover md:object-contain rounded-lg w-full"
        />
      </div>
      {hasCaption && (
        <div className="flex w-full justify-center mt-2 text-sm text-white/60">
          <h5>{caption}</h5>
        </div>
      )}
    </div>
  );
};

export default ImageCap;
