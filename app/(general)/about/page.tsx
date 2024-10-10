import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "SEO DESCRIPTION",
  keywords: ["About Page", "Kevin", "Informacion"],
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About Page</span>
  )
}