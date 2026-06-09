import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // Optionally, add any other Next.js config below
  transpilePackages: ['next-mdx-remote'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here if you use them (e.g., remarkGfm)
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
