import React from "react";
import BlogAreaRightData from "./BlogAreaRightData"; // Assuming this remains unchanged
import { IoSearch } from "react-icons/io5";
import PopularPosts from "./PopularPosts"; // This can showcase relevant posts for Al Shams Honda Center
import { Link } from 'react-router-dom';

const categories = [
  "Motorbike Maintenance",
  "Motorbike Repair",
  "Parts & Accessories",
  "Customer Testimonials",
  "Service Updates",
];

const recentPosts = [
  "5 Essential Maintenance Tips for Your Motorbike",
  "How to Choose the Right Spare Parts for Your Bike",
  "Understanding Your Bike's Engine: A Beginner's Guide",
];

const archives = ["January 2024", "February 2024", "March 2024"];

const tags = [
  { name: "Motorbike Services", count: 10 },
  { name: "Repairs", count: 15 },
  { name: "Parts", count: 10 },
  { name: "Maintenance", count: 12 },
  { name: "Honda", count: 7 },
  { name: "Customer Care", count: 3 },
];

const BlogAreaRight = () => {
  return (
    <section className="blog-area pt-16 pb-24 px-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-2/3 w-full px-4">
            <BlogAreaRightData />
          </div>
          <div className="lg:w-1/3 w-full px-4 mt-8 lg:mt-0">
            <section className="widget widget_search mb-10">
              <div className="flex items-center border border-[#C32735] mt-4">
                <input
                  type="text"
                  placeholder="Search for Services..."
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-[#C32735] p-2 ">
                  <IoSearch className="text-white h-6 w-6" />
                </button>
              </div>
            </section>
            <PopularPosts /> {/* Adjust this to show popular posts related to motorbikes */}

            <section className="widget widget_categories mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4">
                Categories
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#C32735] h-[2px] rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
              <ul className="list-disc list-inside">
                {categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <Link to="/" className="hover:text-[#C32735]">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="widget widget_recent_entries mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4">
                Recent Posts
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#C32735] h-[2px] rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <ul>
                {recentPosts.map((post, index) => (
                  <li key={index} className="mb-2">
                    <Link to="/" className="hover:text-[#C32735]">
                      {post}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="widget widget_archive mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4">
                Archives
              </h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#C32735] h-[2px] rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <ul className="list-disc list-inside">
                {archives.map((archive, index) => (
                  <li key={index} className="mb-2">
                    <Link to="/" className="hover:text-[#C32735]">
                      {archive}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="widget widget_tag_cloud">
              <h3 className="widget-title text-2xl font-semibold mb-4">Tags</h3>
              <div className="bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#C32735] h-[2px] rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="tagcloud flex flex-wrap">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="border-2 border-[#C32735] hover:border-none py-1 px-2 mr-2 mb-2 hover:bg-[#C32735] hover:text-white"
                  >
                    {tag.name}
                    <span className="tag-link-count ml-1 hover:text-white">
                      ({tag.count})
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaRight;
