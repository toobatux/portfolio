const Background = () => {
  return (
    <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
      <div className="text-2xl font-semibold text-gray-200 mb-2">
        Background
      </div>
      <p className="block">
        This project was created by a group of five students over the course of
        an academic year as a senior capstone project.
      </p>
      <p className="block mt-2">
        The first semester was dedicated to design. We spent this time planning
        the core functions of our app, prototyping the entire user interface
        with Figma, and making improvements based on feedback from user testing.
        I led my team through this design phase and created three iterations of
        UI prototypes.
      </p>
      <p className="block mt-2">
        The second semester was spent developing the apps. As both apps were to
        be developed independently on their native platforms, we decided to
        split our group into three teams: two on Android, two on iOS, and one
        working on the APIs. Our group held in-person standup meetings at least
        four times per week as well as a meeting with our professor once per
        week. Our tasks were divided and managed through Jira. User testing was
        also performed routinely throughout the semester to help us make
        improvements.
      </p>
    </div>
  );
};

export default Background;
