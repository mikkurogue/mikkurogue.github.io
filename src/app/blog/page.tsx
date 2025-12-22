import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function fetchPosts() {
	const postsDirectory = path.join(process.cwd(), "src/content/posts");
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames
		.filter((filename) => filename.endsWith(".mdx"))
		.map((filename) => {
			const filePath = path.join(postsDirectory, filename);
			const fileContents = fs.readFileSync(filePath, "utf8");
			const { data } = matter(fileContents);

			return {
				slug: filename.replace(/\.mdx$/, ""),
				title: data.title,
				date: data.date,
				description: data.description,
			};
		});

	return posts;
}

export default async function Blog() {
	const posts = await fetchPosts();

	return (
		<div>
			<h1>Blog</h1>

			<ul style={{ listStyleType: "none", padding: 0 }}>
				{posts.map((post) => (
					<li key={post.slug}>
						<a className="nav-link" href={`/blog/${post.slug}`}>
							{post.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
