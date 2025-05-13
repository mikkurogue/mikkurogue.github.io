import { Badge, BadgeProps } from "@mantine/core";

const techColorMap: Record<Tech, BadgeProps["color"]> = {
    rust: "orange",
    typescript: "blue",
    javascript: "yellow",
    go: "cyan",
    zig: "yellow",
    cli: "gray",
    nextjs: "dark",
    react: "indigo",
    tailwind: "teal",
    nodejs: "green",
    bun: "gray",
    deno: "brown",
    postgres: "blue",
    sqlite: "grape",
    prisma: "gray",
    trpc: "blue",
    docker: "cyan",
    vite: "yellow",
    vercel: "dark",
    redis: "red",
    aws: "orange",
    linux: "gray",
    graphql: "pink",
    git: "grape",
    nestjs: "red",
    php: "indigo",
    csharp: "green",
    nushell: "lime",
    neovim: "cyan"
};

type TechBadgeProps = {
    tech: Tech;
} & Omit<BadgeProps, "color" | "children">;

export default function TechBadge({ tech, ...props }: TechBadgeProps) {
    return (
        <Badge className="hoverable" color={techColorMap[tech]} {...props}>
            {tech}
        </Badge>
    );
}

