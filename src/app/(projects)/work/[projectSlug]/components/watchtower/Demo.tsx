const Demo = () => {
  return (
    <>
      <section className="h-full">
        <div className="text-2xl font-medium text-white/90 mb-6">
          Demo Video
        </div>
        <div className="flex justify-center bg-black rounded-2xl mt-4 h-60 md:h-80 lg:h-100">
          <iframe
            src="https://www.youtube.com/embed/icirgAQjVHE?si=6n3RObycDm9H1foP"
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
