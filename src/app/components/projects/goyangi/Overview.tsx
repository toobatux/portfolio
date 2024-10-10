const Overview = () => {
  return (
    <div className="text-gray-200 w-full">
      <div className="w-full h-full bg-white/5 p-5 rounded-xl text-gray-300">
        <div className="block text-2xl font-semibold text-gray-200 mb-2">
          Overview
        </div>
        <p className="block my-4">
          Goyangi is a <b> social network website for cat photos</b>!
        </p>
        <p className="block my-4">
          This website aims to create a fun place for users to share photos of
          their cats.
        </p>
        <p className="block mb-1 text-lg font-semibold">Users can:</p>
        <ul className="list-disc ps-5">
          <li>Create an account</li>
          <li>Customize their profile</li>
          <li>Upload photos</li>
          <li>Follow friends</li>
          <li>Like, comment, or save posts</li>
          <li>
            Discover new posts through the <em>Explore</em> page
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
