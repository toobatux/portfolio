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
    <div className="my-10">
      <div
        className={`relative w-full justify-center ${bgColor} rounded-lg ${
          hasBorder ? "border border-white/10" : ""
        }`}
      >
        <Image
          src={src}
          alt={caption}
          width={1000}
          height={1000}
          className="object-contain rounded-lg w-full"
        />
      </div>
      {hasCaption && (
        <div className="flex w-full justify-center mt-4 text-white/40">
          <h5>{caption}</h5>
        </div>
      )}
    </div>
  );
};

export default ImageCap;
