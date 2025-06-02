import BlogCard from "../components/BlogCard";
import SecP from "../components/SecP";
import SecT from "../components/SecT";

const Blog = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center">
        <SecT label="Blog" />
      </div>
      <SecP label="Latest Blogs & Articles" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[30px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
