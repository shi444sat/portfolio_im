import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/cv.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Shivesh_Kumar_Satyam_CV.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
