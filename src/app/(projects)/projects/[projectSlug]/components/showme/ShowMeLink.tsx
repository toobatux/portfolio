import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

export default function ShowMeLink() {
  return (
    <section className="h-full">
      <Link
        href="https://photo-app-delta-ashen.vercel.app/profile/toobatux"
        target="_blank"
        prefetch={false}
      >
        <div className="border border-foreground/10 backdrop-blur-lg p-2 hover:bg-foreground/5 transition-colors">
          <div className="flex p-3">
            <div className="flex flex-col gap-1">
              <div className="text-foreground/90 text-sm">showMe</div>
              <div className="text-foreground/55 text-xs">
                A client-proofing web app made with React and Django
              </div>
            </div>
            <div className="text-foreground/90 ml-auto">
              <ArrowOutward/>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
