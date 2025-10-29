import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blog-posts';

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div>
                <p className="text-xl text-gray-700">Post not found</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    ← Back to posts
                </Link>
            </div>
        );
    }

    return (
        <article className="max-w-2xl mx-auto">
            <Link to="/" className="text-blue-500 hover:underline mb-4 block">
                ← Back to posts
            </Link>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>

            <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                    components={{
                        img: ({ src, alt }) => (
                            <img
                                src={src}
                                alt={alt}
                                className="max-w-full h-auto rounded-lg my-4"
                            />
                        ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            <div className="mt-8 flex gap-2 flex-wrap">
                {post.tags.map(tag => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default Post;