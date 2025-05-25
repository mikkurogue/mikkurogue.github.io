import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

export const metadata = {
	title: "Mikku - Developer Portfolio",
	description:
		"Full-stack developer specializing in Rust, TypeScript, and modern web technologies",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen flex flex-col">
					<Header />
					<main className="flex-1">
						<div className="container">
							<div style={{ padding: "2rem 0" }}>{children}</div>
						</div>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
