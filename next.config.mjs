/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fdxb1-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "image.dnevnik.hr",
      },
      {
        protocol: "https",
        hostname: "www.mundodeportivo.com",
      },
      {
        protocol: "https",
        hostname: "tn.com.ar",
      }
      ,
      {
        protocol: "https",
        hostname: "album.mediaset.es",
      }
      ,{
        protocol:'https',
        hostname:"shikimori.one"
      }
    ],
  },
};

export default nextConfig;
