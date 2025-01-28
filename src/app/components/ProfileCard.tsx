import Image from "next/image";
import Place from "@mui/icons-material/Place";
import Batman from "/public/batman.jpg";

interface ProfileProps {
  isOpenToWork: boolean;
}

const ProfileCard = ({ isOpenToWork }: ProfileProps) => {
  return (
    <>
      <section className="w-full">
        {isOpenToWork && (
          <div className="inline-block">
            <div className="flex items-center border border-white/15 bg-gradient-to-br from-white/5 to-transparent rounded-full py-1.5 px-3 gap-2 text-sm">
              <div className="relative">
                <span className="absolute w-3 h-3 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div className="text-white/80 me-1">Available</div>
            </div>
          </div>
        )}
        <div className="flex w-full items-center">
          <div className="mt-8">
            <h1 className="block text-3xl md:text-4xl text-white font-bold mb-1">
              Tom Krusinski
            </h1>
            <div className="flex items-center mb-8">
              <p className="text-xl md:text-2xl text-white/55 font-medium">
                Software Engineer
              </p>
            </div>
            <p className="text-white/55 profile">
              BSc in Information Systems. Working in the JS ecosystem.
            </p>
            {/* <p className="text-white/55 mt-2">- Pittsburgh, PA</p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
