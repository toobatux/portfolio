import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Links from "@/app/(projects)/projects/[projectSlug]/components/backblog/Links";
import Tools from "@/app/(projects)/projects/[projectSlug]/components/Tools";
import ImageCap from "@/app/(projects)/projects/[projectSlug]/components/ImageCap";
import GoyangiLinks from "@/app/(projects)/projects/[projectSlug]/components/goyangi/GoyangiLinks";
import WTLinks from "@/app/(projects)/projects/[projectSlug]/components/watchtower/WTLinks";
import ShowMeLink from "@/app/(projects)/projects/[projectSlug]/components/showme/ShowMeLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Links,
    Tools,
    ImageCap,
    GoyangiLinks,
    WTLinks,
    ShowMeLink,
    ...components,
  }
}