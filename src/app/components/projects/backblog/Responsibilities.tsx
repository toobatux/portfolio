const Responsibilities = () => {
  return (
    <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
      <div className="text-2xl font-semibold text-gray-200">
        My Responsibilities
      </div>
      <p className="block mt-4">
        As the lead UI/UX designer and developer, I was responsible for
        designing prototypes of the user interface and navigation flow, as well
        as directly developing the front end of the applications.
      </p>
      <p className="block mt-4">
        I chose Figma as the design tool for its generous free plan and
        straightforward collaboration features. The Figma mobile app also
        enabled our group to conduct user tests easily, as the presentation tool
        creates the illusion of the prototype being an actual application on the
        device.
      </p>
      <p className="block mt-4">
        Since development time was quite short, I chose Jetpack Compose for
        Android and SwiftUI for iOS. These declarative UI frameworks made
        development faster and more intuitive. Both enable the creation of
        reusable UI components in a manner similar to how React does.
      </p>
      <p className="block mt-4">
        I created the front end of both applications by defining reusable
        components for each page and connecting them to our API for dynamic
        data. I also occasionally provided the backend developers with insight
        as to how any given function of the app should behave to assist in their
        work.
      </p>
    </div>
  );
};

export default Responsibilities;
