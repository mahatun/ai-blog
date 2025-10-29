import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blog-posts';

interface BlogListProps {
    posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div className="space-y-6">
            {posts.map(post => (
                <Link key={post.id} to={`/post/${post.id}`}>
                    <div className="border-b pb-6 hover:shadow-md transition p-4 cursor-pointer">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-gray-500">{post.date}</p>
                        <p className="text-lg text-gray-700 mt-2">{post.excerpt}</p>
                        <div className="mt-3 flex gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;