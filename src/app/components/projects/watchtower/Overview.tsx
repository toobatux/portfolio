const Overview = () => {
  return (
    <div className="h-full bg-white/5 p-5 rounded-xl text-neutral-300">
      <div className="text-2xl font-semibold text-neutral-200 mb-2">
        Overview
      </div>
      <p className="block my-4">
        WatchTower is a <b> security camera livestreaming website</b> that logs
        motion events.
      </p>
      <p className="block my-4">
        This website enables property owners to remotely monitor a physical
        space and keep track of when motion occurs.
      </p>
      <p className="block mb-1 text-lg font-semibold">Users can:</p>
      <ul className="list-disc ps-5">
        <li>Watch a video livestream from the device hosting the website</li>
        <li>View a log of timestamps that records when motion has occurred</li>
      </ul>
    </div>
  );
};

export default Overview;
