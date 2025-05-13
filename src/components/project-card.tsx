import { Card, Text, Title, Group } from "@mantine/core";
import TechBadge from "./tech-badge";

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return <Card className="hoverable main-halo" component="a" target="_blank" href={project.repo ?? "#"} h={"100%"} shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={4}>{project.title}</Title>
        <Text c="dimmed" size="sm" mt="xs">
            {project.description}
        </Text>
        <Group mt="md" gap="xs">
            {project.tech.map((tech, idx) => (
                <TechBadge tech={tech} key={idx} />
            ))}
        </Group>
    </Card>

}
