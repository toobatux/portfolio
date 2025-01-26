import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-white text-2xl md:text-4xl font-semibold transition-transform py-4 md:my-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-medium text-white/90 mb-6 mt-12">
        {children}
      </h2>
    ),
    h6: ({ children }) => <h6 className="text-white/50">{children}</h6>,
    p: ({ children }) => <p className="text-white/55 mb-4">{children}</p>,
    strong: ({ children }) => (
      <strong className="text-white">{children}</strong>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        target="_blank"
        className="text-white hover:underline"
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ ...props }) => (
      //   <div className="w-full max-h-[25rem] bg-white">
      <Image
        width={1000}
        height={1000}
        {...(props as ImageProps)}
        className="w-full my-10 object-contain rounded-xl"
      />
      //   </div>
    ),
    ...components,
  };
}
