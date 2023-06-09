import React from "react";
import {
  BlogCard,
  PrimaryButton,
  Section,
  SpringyText,
} from "../../components";
import Link from "next/link";

const mockup = [
  {
    id: 3,
    imgType: "webm",
    link: "https://blog.alicalimli.com/windows-10-calendar-hover-effect-a-step-by-step-tutorial",
    image: "/blog/win10calendar.webm",
    title: "Windows 10 Calendar Hover Effect: A Step By Step Tutorial",
    description:
      "Learn how to achieve this awesome windows 10 calendar like border hover effect that you can use in your website",
  },
  {
    id: 3,
    imgType: "webm",
    link: "https://blog.alicalimli.com/cool-button-hover-effect-a-step-by-step-tutorial",
    image: "/blog/buttonfill.webm",
    title: "Cool Button Hover Effect: A Step By Step Tutorial",
    description:
      "Learn how to make a hover effect that fills a button with color from bottom to top on hover, and fills out from bottom to top on hover out",
  },
  {
    id: 3,
    imgType: "webm",
    link: "https://blog.alicalimli.com/learn-how-to-create-this-awesome-border-hover-effect",
    image: "/blog/gradientborder.webm",
    title: "Learn How to Create this Gradient Border Hover Effect",
    description:
      "In this blog you'll be able to learn how to achieve this awesome gradient border effect that circles in an element on hover",
  },
];

interface BlogsProps {}

const Blogs = ({}: BlogsProps) => {
  const featuredBlogs = mockup.map((blog) => (
    <li key={blog.title}>
      <BlogCard blog={blog} />
    </li>
  ));

  return (
    <Section className="flex flex-col gap-16">
      <SpringyText className="justify-center" text="Blogs" />

      <main
        className="
          flex 
          flex-col 
          gap-8 
        "
      >
        <ul
          className="
            grid 
            grid-cols-1 
            gap-x-6
            gap-y-12
            sm:grid-cols-3 
          "
        >
          {featuredBlogs}
        </ul>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://blog.alicalimli.com/"
          className="mx-auto mt-8"
        >
          {" "}
          <PrimaryButton name="Blogs Archive" />
        </a>
      </main>
    </Section>
  );
};

export default Blogs;
