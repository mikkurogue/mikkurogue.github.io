"use client"
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Container, Grid, Image } from "@mantine/core";

const projects: Project[] = [
    {
        title: 'cube-type-extract-rs',
        description: 'A tool that extracts and generates TypeScript types from Cube.js schema files, for seamless type-safe integration between Cube.js and TypeScript applications.',
        tech: ['rust', 'typescript', 'cli'],
        repo: "https://github.com/mikkurogue/cube-type-extract-rs"
    },
    {
        title: 'zigsh',
        description: 'A minimal shell implemented in Zig, created as a learning project to explore shell development and the Zig programming language.',
        tech: ['zig', 'cli', 'linux'],
        repo: "https://github.com/mikkurogue/zigsh"
    },
    {
        title: 'rmv',
        description: 'A CLI tool designed to streamline the removal of files or directories with enhanced safety checks and user confirmations.',
        tech: ['rust', 'cli'],
        repo: "https://github.com/mikkurogue/<elementName>"
    },
    {
        title: 'tta',
        description: 'A Rust-based tool that analyzes TypeScript projects to identify and list duplicated type definitions, aiding in codebase maintenance.',
        tech: ['rust', 'typescript', 'cli'],
        repo: "https://github.com/mikkurogue/tta"
    },
    {
        title: 'libarr',
        description: 'An experimental Zig library exploring array utilities, created as a learning project to delve into Zig\'s capabilities.',
        tech: ['zig'],
        repo: "https://github.com/mikkurogue/libarr"
    },
    {
        title: 'dagger',
        description: 'A Go-based CLI tool that assists in setting up developer environments by automating the installation of essential tools and editors.',
        tech: ['go', 'cli'],
        repo: "https://github.com/mikkurogue/dagger"
    },

];

const skills: Skills = {
    frontend: ["typescript", "react", "nextjs", "tailwind", "rust", "php"],
    backend: ["rust", "nodejs", "deno", "bun", "docker", "graphql", "zig", "php", "go", "sqlite"],
    tools: ["git", "linux", "nushell", "neovim"],
};

const experiences: Experience[] = [
    {
        role: "Fullstack Engineer",
        company: "BigMile",
        location: "Maarssen, NL",
        tech: ["typescript", "nextjs", "rust", "postgres", "nestjs", "graphql"],
        description: "Building upon all factors of the Carbon Analytics platform whilst also enabling technical growth and innovation.",
        tenure: ["01.06.2022", "Present"]
    },
    {
        role: "Software Developer",
        company: "Enelogic",
        location: "Breskens, NL",
        tech: ["nextjs", "php", "graphql"],
        description: "Led the frontend team to migrate the application to a new version.",
        tenure: ["01.09.2021", "01.05.2022"]
    },
    {
        role: "Software Engineer",
        company: "Inteqnion BV",
        location: "Aalten, NL",
        tech: ["csharp", "javascript"],
        description: "Worked with the team on the main application and providing more modern javascript practices.",
        tenure: ["01.09.2021", "01.05.2022"]
    },
    {
        role: "Consultant & Owner",
        company: "MRJ Software & Consultancy",
        location: "Remote",
        tech: ["typescript", "php", "csharp"],
        description: "My own consulting and software house.",
        tenure: ["01.10.2018", "01.08.2020"]
    },
];

export default function HomePage() {
    return (
        <>
            <Container size="lg" py="xl">
                <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Intro />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <div className="halo">
                            <Image
                                width={250}
                                height={250}
                                src="https://avatars.githubusercontent.com/u/5637842?s=400&u=bcd6af1eb202b61177b6f64ec4ba0e01267b3519&v=4"
                                alt="Profile picture of Mikkurogue"
                                radius={"md"}
                                fit="contain"
                                w="100%"
                            />

                        </div>
                    </Grid.Col>
                </Grid>

                <Projects projects={projects} />

                <Skills skills={skills} />

                <Experience experiences={experiences} />

            </Container>
        </>
    )
}


