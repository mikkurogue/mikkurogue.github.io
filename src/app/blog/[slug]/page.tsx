import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { AnchorHTMLAttributes, use } from "react";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import remarkBreaks from "remark-breaks";

type ArticleProps = {
	params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
	const postsDirectory = path.join(process.cwd(), "src/content/posts");
	const filePath = path.join(postsDirectory, `${slug}.mdx`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		frontmatter: data,
		content,
	};
}

export default function Article({ params }: ArticleProps) {
	const { slug } = use(params);
	const { frontmatter, content } = use(getPost(slug));

	return (
		<article>
			<h1>{frontmatter.title}</h1>
			<div>
				{frontmatter.date} -{" "}
				<a
					className="nav-link"
					href="https://github.com/mikkurogue"
					target="_blank"
					rel="noopener noreferrer"
				>
					{frontmatter.author}
				</a>
			</div>
			<MDXRemote
				source={content}
				components={mdxComponents}
				options={{
					mdxOptions: {
						remarkPlugins: [remarkBreaks],
						rehypePlugins: [rehypeHighlight],
					},
				}}
			/>
		</article>
	);
}

const mdxComponents = {
	a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a className="blog-link" {...props} />
	),
	p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
		return <p style={{ marginBottom: "1.5em" }} {...props} />;
	},
	code: (props: React.HTMLAttributes<HTMLElement>) => {
		const isInline = !props.className;
		if (isInline) {
			return (
				<code
					style={{
						backgroundColor: "var(--bg-tertiary)",
						padding: "0.2em 0.4em",
						borderRadius: "4px",
						fontSize: "0.9em",
						border: "1px solid var(--border)",
					}}
					{...props}
				/>
			);
		}
		return <code {...props} />;
	},
};
