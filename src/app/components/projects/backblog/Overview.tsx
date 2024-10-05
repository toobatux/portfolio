const Overview = () => {
  return (
    <div className="mb-6 lg:mb-8 text-gray-200">
      <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
        <div className="text-2xl font-semibold text-gray-200 mb-4">
          Overview
        </div>
        <p className="block mb-4">
          BackBlog is a{" "}
          <span className="text-blue-500 font-semibold">
            {" "}
            collaborative movie playlisting app
          </span>{" "}
          independently developed for both iOS and Android devices.
        </p>
        <p className="block mb-4">
          The app aims to make organizing movie watchlists easy and fun!
        </p>
        <p className="block mb-2 text-lg font-semibold">Users can:</p>
        <ul className="list-disc ps-5">
          <li>Create movie logs solo or with friends</li>
          <li>Search thousands of movies</li>
          <li>Keep track of which movies have been watched</li>
          <li>Generate random list orders to easily choose a movie</li>
          <li>Discover what friends are watching</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
