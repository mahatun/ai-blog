import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { BlogPost, fetchBlogPosts } from '../data/blog-posts';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const loadedPosts = await fetchBlogPosts();
                setPosts(loadedPosts);
            } catch (error) {
                console.error('Failed to load posts:', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) {
        return (
            <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-900">Latest Articles</h2>
                <p className="text-gray-500">Loading posts...</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Latest Articles</h2>
            {posts.length > 0 ? (
                <BlogList posts={posts} />
            ) : (
                <p className="text-gray-500">No blog posts found. Create some in the posts/ folder.</p>
            )}
        </div>
    );
};

export default Home;