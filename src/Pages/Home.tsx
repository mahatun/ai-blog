import React from 'react';
import BlogList from '../Components/BlogList';
import { blogPosts } from '../Data/blog-posts';

const Home: React.FC = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
            <BlogList posts={blogPosts} />
        </div>
    );
};

export default Home;