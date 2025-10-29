export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Understanding Transformers",
        date: "2025-01-15",
        excerpt: "A deep dive into transformer architecture and attention mechanisms.",
        content: `# Understanding Transformers\n\nTransformers have revolutionized...`,
        tags: ["AI", "Deep Learning", "Architecture"]
    },
    // Add more posts here
];