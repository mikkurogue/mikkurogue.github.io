"use client"
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import TerminalIntro from "@/components/terminal-intro";
import { Container, Divider, Grid, Image, Title } from "@mantine/core";
import { Spotlight, SpotlightActionData } from "@mantine/spotlight";
import { IconCode, IconSearch, } from "@tabler/icons-react";

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
    {
        title: 'rerescope',
        description: 'A terminal application bringing telescope to the terminal, not just in neovim',
        tech: ['rust', 'cli',],
        repo: "https://github.com/mikkurogue/rerescope"
    },
    {
        title: 'mikkutable',
        description: 'A lightweight, customizable React table based on Mantine and Tanstack for a specific data oriented design and cell manipulation table.',
        tech: ['react', 'typescript',],
        repo: "https://github.com/mikkurogue/mikkutable"
    },
    {
        title: 'violet',
        description: 'A minimal mode based text editor, inspired by vim & helix',
        tech: ['rust', "cli"],
        repo: "https://github.com/mikkurogue/violet"
    },
    {
        title: 'goxl',
        description: 'A small Go API to read an excel file and place its contents into a sqlite3 database',
        tech: ['go', "sqlite"],
        repo: "https://github.com/mikkurogue/goxl"
    }

];

const skills: Skills = {
    frontend: ["typescript", "nextjs", "rust", "php"],
    backend: ["rust", "nodejs", "graphql", "zig", "go", "sqlite", "postgres"],
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
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <TerminalIntro />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <div className="halo">
                            <div className="animated-image-container">
                                <Image
                                    className="animated-image"
                                    width={250}
                                    height={250}
                                    src="https://avatars.githubusercontent.com/u/5637842?s=400&u=bcd6af1eb202b61177b6f64ec4ba0e01267b3519&v=4"
                                    alt="Profile picture of Mikkurogue"
                                    radius={24}
                                    fit="contain"
                                    w="100%"
                                />
                            </div>
                        </div>                    </Grid.Col>
                </Grid>

                <Projects projects={projects.slice(0, 6)} />

                <Skills skills={skills} />

                <Experience experiences={experiences} />

                <Divider h={6} />

                <Title order={4}>Wise words to learn from</Title>

                <blockquote className="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">
                    We&#39;re all retarded one way or another. <br /><br />
                    Just acknowledge where you&#39;re retarded and either improve so you&#39;re no longer retarded, or don&#39;t act like you&#39;re not retarded.
                </p>
                    &mdash; Josh Manders (@joshmanders)
                    <a href="https://twitter.com/joshmanders/status/1922747431868883100?ref_src=twsrc%5Etfw">May 14, 2025</a>
                </blockquote>
            </Container>

            <Spotlight
                shortcut={['mod + K', 'mod + P', '/']}
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                scrollable
                radius={16}
                maxHeight={400}
                searchProps={{
                    leftSection: <IconSearch size={20} stroke={1.5} />,
                    placeholder: 'Search my projects',
                }}
            />
        </>
    )
}


// TODO: Figure out how to fetch all repos and then dynamically populate this list with those that are missing based from projects
// array above
const actions: SpotlightActionData[] = projects.map((project) => {
    return {
        id: project.title,
        label: project.title,
        description: project.description,
        onClick: () => {
            window.open(project.repo, "_blank")?.focus();
        },
        leftSection: <IconCode />
    }
})

