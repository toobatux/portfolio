const Overview = () => {
  return (
    <section className="h-full">
      <div className="text-2xl font-medium text-white/90 mb-6">Overview</div>
      <div className="space-y-4">
        <p className="block my-4">
          WatchTower is a{" "}
          <b className="text-white/90">security camera livestreaming website</b>{" "}
          that logs motion events. This website enables property owners to
          remotely monitor a physical space and keep track of when motion
          occurs.
        </p>
        <p>
          Watch a video livestream from the device hosting the website along
          with a log of timestamps that records when motion has occurred.
        </p>
      </div>
    </section>
  );
};

export default Overview;
