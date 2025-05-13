import { Grid, Title } from "@mantine/core";
import ProjectCard from "./project-card";

type ProjectsProps = {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {

    return <>
        <Title order={2} size="h3" mt="xl" mb="md">
            Projects
        </Title>
        <Grid gutter="md">
            {projects.map((project, i) => (
                <Grid.Col span={{ base: 12, md: 4 }} key={i}>
                    <ProjectCard project={project} />
                </Grid.Col>
            ))}
        </Grid>
    </>
}
