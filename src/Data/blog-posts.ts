// @ts-ignore
import frontmatter from 'front-matter';

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

// Manual list of posts (we'll add them as we create markdown files)
const postFiles = [
    { name: 'dopamine', path: '/posts/dopamine.md' },
    { name: 'transformers', path: '/posts/transformers.md' },
    // Add more posts here as you create them
];

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const posts: BlogPost[] = [];

        // Fetch each markdown file
        for (const postFile of postFiles) {
            try {
                console.log(`Fetching ${postFile.path}...`);
                const response = await fetch(postFile.path);
                console.log(`Fetch response for ${postFile.path}:`, response.status, response.statusText);
                if (!response.ok) {
                    console.warn(`Could not fetch ${postFile.name}:`, response.status, response.statusText);
                    continue;
                }

                const fileContents = await response.text();
                console.log(`File contents for ${postFile.name}:`, fileContents.substring(0, 100) + '...');
                const parsed = frontmatter(fileContents);
                console.log(`Parsed frontmatter for ${postFile.name}:`, parsed.attributes);
                const metadata = parsed.attributes as Record<string, unknown>;

                // Ensure date is properly formatted as string
                const date = metadata.date
                    ? new Date(metadata.date as string).toISOString().split('T')[0]
                    : new Date().toISOString().split('T')[0];

                const post: BlogPost = {
                    id: String(posts.length + 1),
                    title: (metadata.title as string) || postFile.name,
                    date: date,
                    excerpt: (metadata.excerpt as string) || '',
                    content: parsed.body || '',
                    tags: (Array.isArray(metadata.tags) ? metadata.tags : []) as string[],
                };

                posts.push(post);
            } catch (error) {
                console.error(`Error loading ${postFile.name}:`, error);
            }
        }

        // Sort by date (newest first)
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        console.log(`Loaded ${posts.length} blog posts`);
        return posts;
    } catch (error) {
        console.error('Error loading posts:', error);
        return [];
    }
}