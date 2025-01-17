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
      <section className="w-full">
        {isOpenToWork && (
          <div className="inline-block">
            <div className="flex items-center border border-white/15 bg-gradient-to-br from-white/5 to-transparent rounded-full py-1.5 px-3 gap-2 text-sm">
              <div className="relative">
                <span className="absolute w-3 h-3 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <div className="text-white/80">Open to work</div>
            </div>
          </div>
        )}
        <div className="flex w-full items-center">
          {/* <div className="relative w-[8vw] h-[8vw] max-w-24 max-h-24 min-w-16 min-h-16 rounded-full overflow-hidden me-4">
            <Image
              src={Batman}
              alt="Profile Image"
              fill
              sizes="(max-width: 96px)"
              className="object-cover"
              priority
            />
          </div> */}
          <div className="mt-8">
            <h1 className="block text-3xl md:text-4xl text-neutral-100 font-bold mb-1">
              Tom Krusinski
            </h1>
            <div className="flex items-center mb-8">
              <p className="text-xl md:text-2xl text-white/55">
                Software Engineer
              </p>
            </div>
            <p className="text-white/55">
              BSc in Information Systems. Working in the JS ecosystem.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center mt-4 flex-wrap">
          <div className="flex items-center rounded-full bg-white/10 bg-opacity-40 p-1.5 ps-2 pe-4 text-neutral-300 me-3">
            <Place fontSize="small" className="me-1" />
            {location}
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ProfileCard;
