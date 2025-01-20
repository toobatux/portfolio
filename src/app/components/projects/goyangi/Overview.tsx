const Overview = () => {
  return (
    <section className="h-full">
      <div className="text-2xl font-medium text-white/90 mb-6">Overview</div>
      <div className="space-y-4">
        <p className="my-4">
          Goyangi is a{" "}
          <b className="text-white/90">
            {" "}
            social network website for cat photos
          </b>
          . This website aims to create a fun place for users to share photos of
          their cats.
        </p>
        <p>
          Create an account, customize your profile, upload photos, and follow
          your friends! Users can also like, comment, and save posts. Discover
          new posts through the <em>Explore</em> page.
        </p>
      </div>
    </section>
  );
};

export default Overview;
