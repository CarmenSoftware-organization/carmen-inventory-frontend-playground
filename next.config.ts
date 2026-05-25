import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    // Pin Turbopack's workspace root to THIS project.
    //
    // Without this, Next walks up the directory tree looking for a lockfile and
    // finds ~/package-lock.json (intentional, for dotenvx) — mis-detecting the
    // home directory as the root. Turbopack then indexes/watches all of $HOME,
    // which freezes the machine and floods the console with worker warnings.
    //
    // process.cwd() is always defined (npm runs scripts from the project root),
    // so it never falls back to auto-detection. See:
    // node_modules/next/dist/docs/.../next-config-js/turbopack.md → "Root directory".
    root: process.cwd(),
  },
}

export default nextConfig
