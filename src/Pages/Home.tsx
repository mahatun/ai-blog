import React from 'react';
import BlogList from '../components/BlogList';
import { blogPosts } from '../data/blog-posts';

const Home: React.FC = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
            <BlogList posts={blogPosts} />
        </div>
    );
};

export default Home;