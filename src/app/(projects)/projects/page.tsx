import { promises as fs } from "fs";
import path from "path";
import WorkProject from "@/app/components/WorkProject";

export default async function Projects() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/projects")
  );

  // Filter out any non-mdx files just in case
  const mdxFiles = filenames.filter((file) => file.endsWith(".mdx"));

  // Map through and dynamically import the frontmatter from each file
  const projects = await Promise.all(
    mdxFiles.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      
      // Dynamically import the mdx module to get its named export 'frontmatter'
      const { frontmatter } = await import(`@/content/projects/${filename}`);

      return {
        filename,
        slug,
        title: frontmatter?.title || "",
        description: frontmatter?.description || "",
        date: frontmatter?.date || "",
        src: frontmatter?.src || "",
        bgColor: frontmatter?.bgColor || "",
        tools: frontmatter?.tools || [],
        isArticle: frontmatter?.isArticle || false,
      };
    })
  );

  projects.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA; // Descending: newest date minus older date
  });

  return (
    <>
      {/* <div className="absolute top-0 z-[-2] h-full w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="fixed inset-0 background"></div>

      <div className="flex flex-col w-full max-w-4xl min-h-[68vh] justify-center mx-auto px-8  transition-all">
        <div className="relative w-full">
          <div className="flex flex-col justify-between items-center">
            <WorkProject title="Projects" projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
