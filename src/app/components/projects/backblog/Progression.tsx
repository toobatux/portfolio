// import Image from "next/image";
// import FirstIter from "/public/FirstIter.png";
// import SecondIter from "/public/SecondIter.png";
// import FinalIter from "/public/FinalIter.png";

// const Progression = () => {
//   return (
//     <>
//       <div className="h-full bg-white/5 p-5 rounded-xl text-neutral-300">
//         <div className="text-neutral-200">
//           <div className="text-2xl font-semibold">Progression</div>
//           <p className="block mt-4">
//             This straightforward design was not immediate and required several
//             rounds of user testing and revisions. The first prototype merely
//             served as a collection of rough ideas, while the final prototype is
//             much more refined and better supports the needs of users.
//           </p>
//         </div>
//         <div className="text-neutral-200 mt-10">
//           <div className="text-xl font-semibold">First Iteration</div>
//           <p className="block mt-4">
//             The first iteration consists of only a few pages and allowed our
//             group to experiment with how certain features of the app could be
//             visualized. This example features two home pages, with the first
//             showing a large &quot;Up Next...&quot; movie image and overlapping
//             text. I later decided to separate these elements, as seen in the
//             second home page, since the movie image was also clickable and
//             redirects to a movie information page. With each part of this
//             section separated, we can minimize accidental clicks.
//           </p>
//           <div className="my-8">
//             <Image
//               src={FirstIter}
//               alt="First Iteration"
//               placeholder="blur"
//               loading="eager"
//             />
//           </div>
//         </div>
//         <div className="text-neutral-200 mt-10">
//           <div className="text-xl font-semibold">Second Iteration</div>
//           <p className="block mt-4">
//             The second iteration features several improvements over the last.
//             The &quot;Up Next...&quot; section now has larger buttons and a
//             clear separation between title, date, and rating. Each log now also
//             includes profile pictures for each user in the log, allowing users
//             to easily distinguish logs. These pictures were also added within
//             each log, indicating which user added each movie. A movie detail
//             page was added, giving users additional information such as plot
//             summaries, genres, directors, actors, etc.
//           </p>
//           <div className="my-8">
//             <Image
//               src={SecondIter}
//               alt="Second Iteration"
//               placeholder="blur"
//               loading="eager"
//             />
//           </div>
//           <p className="block">
//             It is also noteable that the logs in both the first and second
//             prototypes can be scrolled horizontally to show all of their
//             entries. The log page can also be accessed by clicking their titles,
//             which gives users control over the log. This is convenient for
//             users, as it allows them to quickly see the contents of each log.
//           </p>
//         </div>
//         <div className="text-neutral-200 mt-10">
//           <div className="text-xl font-semibold">Final Iteration</div>
//           <p className="block mt-4">
//             The third and final iteration is a great improvement upon the last
//             two prototypes. Although horizontal scrolling on the home page
//             enabled users to quickly see the contents of their logs, there was
//             no simple way to include log features (marking a movie as watched,
//             shuffling the list, removing movies, etc.) without it becoming
//             overwhelming. Thus, I opted for simple tiles that redirect to the
//             log page where these actions can be performed. These tiles are
//             draggable, and whichever tile occupies the top-left position will
//             have its first movie shown in the &quot;What&apos;s Next?&quot;
//             section. Indicating this to users was quite difficult, so a small
//             subtitle, &quot;From (Log Name)&quot; was added underneath the
//             heading.
//           </p>
//           <p className="block mt-4">
//             All buttons were changed to a bright blue color, which creates
//             contrast with the background and makes them easy to recognize.
//             Additionally, the check buttons were removed from movie entries in a
//             log and replaced with a swiping feature. Users can simply swipe left
//             on a movie to mark it as complete, moving it to the bottom of the
//             page in a &quot;Watched&quot; section.
//           </p>
//           <div className="my-8">
//             <Image
//               src={FinalIter}
//               alt="Final Iteration"
//               placeholder="blur"
//               loading="eager"
//             />
//           </div>
//           <p>
//             The movie detail page also received an overhaul, now featuring a
//             movie poster and background image as well as streaming providers for
//             the film.
//           </p>
//           <p className="block mt-4">
//             There are many more pages in this final iteration that I could write
//             about indefinitely, but overall I am very proud of the final
//             product! I learned so much about UI design and front end development
//             during this project, and user test results greatly improved with
//             each iteration, which was our ultimate goal.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Progression;

import Image from "next/image";
import { JSXElementConstructor, memo, ReactNode } from "react";
import FirstIter from "/public/FirstIter.png";
import SecondIter from "/public/SecondIter.png";
import FinalIter from "/public/FinalIter.png";
import { StaticImageData } from "next/image";

type ImageBlockProps = {
  src: StaticImageData;
  alt: string;
};

type SectionProps = {
  title: string;
  children: ReactNode;
};

const ImageBlock = ({ src, alt }: ImageBlockProps) => (
  <div className="my-8">
    <Image src={src} alt={alt} placeholder="blur" priority />
  </div>
);

const Section = ({ title, children }: SectionProps) => (
  <section className="text-neutral-200 mt-10">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
);

const Progression = () => (
  <article className="h-full">
    <header className="">
      <h1 className="text-2xl font-medium text-white/90">Progression</h1>
      <p className="mt-4">
        This straightforward design was not immediate and required several
        rounds of user testing and revisions. The first prototype merely served
        as a collection of rough ideas, while the final prototype is much more
        refined and better supports the needs of users.
      </p>
    </header>

    <Section title="First Iteration">
      <p className="text-white/55">
        The first iteration consists of only a few pages and allowed our group
        to experiment with how certain features of the app could be visualized.
        This example features two home pages, with the first showing a large
        &quot;Up Next...&quot; movie image and overlapping text. I later decided
        to separate these elements, as seen in the second home page, since the
        movie image was also clickable and redirects to a movie information
        page. With each part of this section separated, we can minimize
        accidental clicks.
      </p>
      <ImageBlock src={FirstIter} alt="First Iteration" />
    </Section>

    <Section title="Second Iteration">
      <p className="text-white/55">
        The second iteration features several improvements over the last. The
        &quot;Up Next...&quot; section now has larger buttons and a clear
        separation between title, date, and rating. Each log now also includes
        profile pictures for each user in the log, allowing users to easily
        distinguish logs.
      </p>
      <ImageBlock src={SecondIter} alt="Second Iteration" />
      <p className="text-white/55">
        The logs in both prototypes can be scrolled horizontally to show all
        their entries. The log page can also be accessed by clicking their
        titles, giving users control over the log and making it easier to see
        its contents.
      </p>
    </Section>

    <Section title="Final Iteration">
      <p className="text-white/55">
        The final iteration is a significant improvement upon the previous ones.
        Although horizontal scrolling on the home page enabled users to view log
        contents quickly, there was no simple way to include log features
        without it becoming overwhelming. Therefore, I opted for simple tiles
        that redirect to the log page for feature interactions. These tiles are
        draggable, with the top-left tile influencing the &quot;What&apos;s
        Next?&quot; section.
      </p>
      <p className="text-white/55">
        All buttons were changed to a bright blue color, creating contrast with
        the background. A swiping feature replaced check buttons, allowing users
        to swipe left on a movie to mark it as complete, moving it to a
        &quot;Watched&quot; section.
      </p>
      <ImageBlock src={FinalIter} alt="Final Iteration" />
      <p className="text-white/55">
        The movie detail page also received an overhaul, now featuring a movie
        poster, background image, and streaming providers. While many more pages
        could be discussed, I am proud of the final product. User test results
        improved with each iteration, which was our ultimate goal.
      </p>
    </Section>
  </article>
);

export default memo(Progression);
