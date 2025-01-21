import Image from "next/image";
import Link from "next/link";

import blog1 from "../../../public/blog1.png";
import calender from "../../../public/Calendar.png";
import Admin from "../../../public/Admin.png";

import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog3.png";
import blog4 from "../../../public/blog4.png";

const BlogPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="bg-cover bg-center h-64 flex items-center justify-center"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold">Blog List</h2>
                    <p className="mt-4">
                        <Link href="/" className="text-yellow-400">Home</Link> &gt; Blog List
                    </p>
                </div>
            </section>

            {/* Blog List Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="lg:w-3/4 space-y-8">
                        {/* Blog Post */}
                        {[blog1, blog2, blog3, blog4].map((blog, index) => (
                            <div key={index} className="border-b pb-8">
                                <Image src={blog} alt={`Blog ${index + 1}`} className="w-full h-auto rounded-md" />
                                <div className="flex items-center mt-4 text-sm text-gray-500">
                                    <Image src={calender} alt="Calendar" width={24} height={24} />
                                    <span className="ml-2">March 14, 2024</span>
                                    <Image src={Admin} alt="Admin" width={24} height={24} className="ml-4" />
                                    <span className="ml-2">Admin</span>
                                </div>
                                <h3 className="text-xl font-semibold mt-4">10 Reasons To Do A Digital Detox Challenge</h3>
                                <p className="text-gray-600 mt-2">
                                    Netus pretium tellus nulla commodo massa adipiscing in elementum magna...
                                </p>
                                <Link href="/blog-detail" className="text-yellow-400 mt-4 inline-block">
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/4 space-y-8">
                        {/* About the Author */}
                        <div className="p-6 bg-gray-100 rounded-md">
                            <h4 className="text-lg font-bold">About the Author</h4>
                            <Image
                                src="/author.jpg"
                                alt="Author"
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full mx-auto mt-4"
                            />
                            <p className="text-gray-600 text-center mt-4">
                                Passionate food blogger sharing delicious recipes for everyone.
                            </p>
                        </div>

                        {/* Filter by Menu */}
                        <div className="p-6 bg-gray-100 rounded-md">
                            <h4 className="text-lg font-bold">Filter by Menu</h4>
                            <ul className="mt-4 space-y-2">
                                {['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts'].map((menu, index) => (
                                    <li key={index} className="text-gray-600">
                                        {menu}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Tags */}
                        <div className="p-6 bg-gray-100 rounded-md">
                            <h4 className="text-lg font-bold">Popular Tags</h4>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {['Food', 'Healthy', 'Recipes', 'Tips', 'Lifestyle'].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-yellow-400 text-white px-3 py-1 text-sm rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="p-6 bg-gray-100 rounded-md">
                            <h4 className="text-lg font-bold">Photo Gallery</h4>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                {[blog1, blog2, blog3, blog4].map((photo, index) => (
                                    <Image
                                        key={index}
                                        src={photo}
                                        alt={`Photo ${index + 1}`}
                                        className="w-full h-auto rounded-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
