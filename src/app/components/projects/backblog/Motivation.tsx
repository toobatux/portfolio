import Image from "next/image";
import Process from "/public/geniuses.png";

const Motivation = () => {
  return (
    <section className="h-full">
      <div className="text-2xl font-semibold text-white/90 mb-6">
        Motivation
      </div>

      <p>
        BackBlog was created by myself and four other students as a year-long
        senior project. We were tasked with solving any problem of our choosing,
        so we quickly began brainstorming. After several rounds of sharing
        ridiculous ideas, we had nothing. Naturally, the conversation shifted
        focus to which TV shows and movies were consuming our time outside of
        class... Great.
      </p>
      <div className="my-10">
        <div className="flex w-full justify-center bg-[#313338] rounded-xl">
          <Image
            src={Process}
            alt="The Create Process"
            className="rounded-xl"
          />
        </div>
        <p className="flex w-full items-center justify-center mt-2 text-white/40">
          The Creative Process
        </p>
      </div>
      <p className="mb-4">
        Through our seemingly trivial conversation about movies and TV shows, we
        eventually stumbled upon a shared dilemma:{" "}
        <b className="text-white/90">
          the challenge of deciding what to watch next!
        </b>{" "}
      </p>
      <p>
        As broke and bored college students, we often found ourselves watching
        movies together, both in-person and online. This led to the problem of
        keeping track of which movies we had already watched with each friend
        group, and figuring out which one should be next on the list. And so, we
        set out to solve this very problem.
      </p>
    </section>
  );
};

export default Motivation;
