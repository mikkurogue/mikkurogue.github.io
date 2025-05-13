type Project = {
    title: string,
    description: string,
    tech: Tech[]
    repo?: string;
}

type Experience = {
    role: string,
    company: string,
    tech: Tech[],
    description: string,
    location: string | "Remote" | "Hybrid"
    tenure: [string, string]
}


type Skills = {
    frontend: Tech[],
    backend: Tech[],
    tools: Tech[]
}

type Tech = "rust"
    | "typescript"
    | "javascript"
    | "go"
    | "zig"
    | "cli"
    | "nextjs"
    | "react"
    | "tailwind"
    | "nodejs"
    | "postgres"
    | "sqlite"
    | "prisma"
    | "trpc"
    | "docker"
    | "vite"
    | "vercel"
    | "redis"
    | "aws"
    | "linux"
    | "git"
    | "nestjs"
    | "php"
    | "graphql"
    | "csharp"
    | "nushell"
    | "neovim"
    | "bun" | "deno";
