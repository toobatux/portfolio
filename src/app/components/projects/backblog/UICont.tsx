import Image from "next/image";
import FirstIter from "/public/FirstIter.png";
import SecondIter from "/public/SecondIter.png";
import FinalIter from "/public/FinalIter.png";

const UICont = () => {
  return (
    <>
      <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
        <div className="text-2xl font-semibold text-gray-200 mb-2">
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
          to complete. Users are also given feedback via toast popups for
          success and error messages.
        </p>
        <div className="text-gray-200 mt-4">
          <div className="text-xl font-semibold">Progression</div>
          <p className="block mt-4">
            This straightforward design was not immediate and required several
            rounds of user testing and revisions. The first prototype merely
            served as a collection of rough ideas, while the final prototype is
            much more refined and better supports the needs of users.
          </p>
        </div>
        <div className="text-gray-200 mt-4">
          <div className="text-lg font-semibold">First Iteration</div>
          <p className="block mt-4">
            The first iteration consists of only a few pages and allowed our
            group to experiment with how certain features of the app could be
            visualized. This example features two home pages, with the first
            showing a large &quot;Up Next...&quot; movie image and overlapping
            text. I later decided to separate these elements, as seen in the
            second home page, since the movie image was also clickable and
            redirects to a movie information page. With each part of this
            section separated, we can minimize accidental clicks.
          </p>
          <div className="my-6">
            <Image src={FirstIter} alt="First Iteration" />
          </div>
        </div>
        <div className="text-gray-200">
          <div className="text-lg font-semibold">Second Iteration</div>
          <p className="block mt-4">
            The second iteration features several improvements over the last.
            The &quot;Up Next...&quot; section now has larger buttons and a
            clear separation between title, date, and rating. Each log now also
            includes profile pictures for each user in the log, allowing users
            to easily distinguish logs. These pictures were also added within
            each log, indicating which user added each movie. A movie detail
            page was added, giving users additional information such as plot
            summaries, genres, directors, actors, etc.
          </p>
          <div className="my-6">
            <Image src={SecondIter} alt="Second Iteration" />
          </div>
          <p className="block">
            It is also noteable that the logs in both the first and second
            prototypes can be scrolled horizontally to show all of their
            entries. The log page can also be accessed by clicking their titles,
            which gives users control over the log. This is convenient for
            users, as it allows them to quickly see the contents of each log.
          </p>
        </div>
        <div className="text-gray-200 mt-4">
          <div className="text-lg font-semibold">Final Iteration</div>
          <p className="block my-4">
            The third and final iteration is a great improvement upon the last
            two prototypes. Although horizontal scrolling on the home page
            enabled users to quickly see the contents of their logs, there was
            no simple way to include log features (marking a movie as watched,
            shuffling the list, removing movies, etc.) without it becoming
            overwhelming. Thus, I opted for simple tiles that redirect to the
            log page where these actions can be performed. These tiles are
            draggable, and whichever tile occupies the top-left position will
            have its first movie shown in the &quot;What&apos;s Next?&quot;
            section. Indicating this to users was quite difficult, so a small
            subtitle, &quot;From (Log Name)&quot; was added underneath the
            heading.
          </p>
          <p className="block mt-4">
            All buttons were changed to a bright blue color, which creates
            contrast with the background and makes them easy to recognize.
            Additionally, the check buttons were removed from movie entries in a
            log and replaced with a swiping feature. Users can simply swipe left
            on a movie to mark it as complete, moving it to the bottom of the
            page in a &quot;Watched&quot; section.
          </p>
          <div className="my-6">
            <Image src={FinalIter} alt="Final Iteration" />
          </div>
          <p>
            The movie detail page also received an overhaul, now featuring a
            movie poster and background image as well as streaming providers for
            the film.
          </p>
          <p className="block mt-4">
            There are many more pages in this final iteration that I could write
            about indefinitely, but overall I am very proud of the final
            product! User test results greatly improved with each iteration,
            which was our ultimate goal.
          </p>
        </div>
      </div>
    </>
  );
};

export default UICont;
