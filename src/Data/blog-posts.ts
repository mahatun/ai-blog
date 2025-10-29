import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

// Get the posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

// Function to load all markdown posts
function loadMarkdownPosts(): BlogPost[] {
    try {
        // Check if posts directory exists
        if (!fs.existsSync(postsDirectory)) {
            console.warn('Posts directory not found');
            return [];
        }

        // Read all files in posts directory
        const fileNames = fs.readdirSync(postsDirectory);

        const posts: BlogPost[] = fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map((fileName, index) => {
                const filePath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(filePath, 'utf8');

                // Parse frontmatter and content using gray-matter
                const { data, content } = matter(fileContents);

                return {
                    id: String(index + 1),
                    title: data.title || fileName.replace('.md', ''),
                    date: data.date || new Date().toISOString().split('T')[0],
                    excerpt: data.excerpt || '',
                    content: content,
                    tags: data.tags || [],
                };
            })
            // Sort by date (newest first)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return posts;
    } catch (error) {
        console.error('Error loading posts:', error);
        return [];
    }
}

// Load posts when the module is imported
export const blogPosts: BlogPost[] = loadMarkdownPosts();