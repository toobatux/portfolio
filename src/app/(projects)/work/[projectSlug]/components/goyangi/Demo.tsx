const Demo = () => {
  return (
    <>
      <section className="h-full">
        <div className="text-2xl font-medium text-white/90 mb-6">
          Demo Video
        </div>
        <div className="flex justify-center bg-black rounded-[18px] mt-4 h-[15rem] md:h-[20rem] lg:h-[25rem]">
          <iframe
            src="https://www.youtube.com/embed/e_2vPuBCfZU?si=Ly0CNI_CP9OFsIB8&vq=hd1080"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-[18px] border border-white/10"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Demo;
