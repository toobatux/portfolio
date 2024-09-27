import Image from "next/image";
import Place from "@mui/icons-material/Place";
import Batman from "/public/batman.jpg";

interface ProfileProps {
  isOpenToWork: boolean;
  location: string;
}

const ProfileCard = ({ isOpenToWork, location }: ProfileProps) => {
  return (
    <>
      <div className="w-full bg-white/5 backdrop-blur-lg rounded-xl mb-4 py-6 px-4">
        <div className="flex items-center">
          <div className="relative w-[8vw] h-[8vw] max-w-24 max-h-24 min-w-16 min-h-16 rounded-full overflow-hidden me-4">
            <Image
              src={Batman}
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="block text-xl lg:text-4xl text-white font-bold mb-1">
              Tom Krusinski
            </h1>
            <div className="flex items-center">
              <p className="lg:text-lg text-white">Front-end Developer</p>
            </div>

            {/* <div className="flex items-center text-gray-300 mt-3">
              <Place /> Pittsburgh, Pennsylvania
            </div> */}
            {/* <p className="block text-lg text-gray-400">
              Pittsburgh, Pennsylvania
            </p> */}
          </div>
        </div>
        <div className="flex items-center mt-4 flex-wrap">
          <div className="flex items-center rounded-full bg-white/10 bg-opacity-40 p-1.5 ps-2 pe-4 text-gray-300 me-3">
            <Place fontSize="small" className="me-1" />
            {location}
          </div>

          {/* <div className="relative rounded-full bg-green-600 bg-opacity-60 p-1.5 px-3 text-gray-200 font-semibold mt-2 animate-pulse">
            Open for work!
          </div> */}
          {isOpenToWork && (
            <div className="relative flex items-center">
              <span className="absolute w-[4.6rem] h-6 rounded-full bg-green-600 opacity-75 animate-ping ms-[1.5rem] z-0"></span>

              <div className="relative rounded-full bg-green-600 bg-opacity-40 p-1.5 px-3 text-gray-200 font-semibold z-10">
                Open to work!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
