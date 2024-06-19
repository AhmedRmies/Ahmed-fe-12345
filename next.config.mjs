/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    distDir:'dist',
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'image.tmdb.org',
                pathname:'**',
            },
        ],
        unoptimized:true,
    },
};

export default nextConfig;
