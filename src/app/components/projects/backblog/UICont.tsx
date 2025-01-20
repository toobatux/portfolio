const UICont = () => {
  return (
    <>
      <div className="h-full">
        <div className="text-2xl font-medium text-white/90 mb-2">
          User Interface: Continued
        </div>
        <p className="block mt-4">
          I developed three major iterations of prototypes, refining each one
          based on feedback gathered from user testing. With each iteration, the
          design became increasingly complex. The first iteration featured about
          8 fully designed screens and menus, while the final iteration was
          expanded to over 20, reflecting the increased complexity and
          improvements made throughout the process.
        </p>
        <p className="block mt-4">
          Given the app&apos;s extensive feature set, it was essential to design
          it so that opportunities for confusion were minimized. I achieved this
          by maintaining consistency between pages and providing a clear visual
          hierarchy. Each page is structured into well-defined sections with
          appropriate headings in the same position on every page, ensuring a
          familiar navigation flow. Key functions on every page are behind
          buttons highlighted with a distinct light blue color, which contrasts
          with the background and makes them easy to recognize. It was also
          important that tasks and actions were streamlined so they can be done
          in as few steps as possible. Most tasks require no more than 3 clicks
          to complete. Users are given feedback via toast popups for success and
          error messages.
        </p>
      </div>
    </>
  );
};

export default UICont;
