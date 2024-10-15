const Demo = () => {
  return (
    <>
      <div className="text-gray-200 w-full">
        <div className="w-full h-full bg-white/5 p-5 rounded-xl text-gray-300">
          <div className="block text-2xl font-semibold text-gray-200 mb-2">
            Demo Video
          </div>
          <div className="flex justify-center bg-black rounded-lg mt-4 h-[15rem] md:h-[20rem] lg:h-[25rem]">
            <iframe
              src="https://www.youtube.com/embed/icirgAQjVHE?si=6n3RObycDm9H1foP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
