import { Grid, Group, Title } from "@mantine/core";
import TechBadge from "./tech-badge";

type SkillsProps = {
    skills: Skills
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <>
            <Title order={2} size="h3" mt="xl" mb="md">
                Skills & Tooling
            </Title>
            <Grid gutter="md">
                <Grid.Col span={4}>
                    <Title order={4} mb={"md"}>Frontend</Title>
                    <Group gap="xs" mb="lg">
                        {skills.frontend.map((tech) => (
                            <TechBadge key={tech} tech={tech as Tech} />
                        ))}
                    </Group>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4} mb={"md"}>Backend</Title>
                    <Group gap="xs" mb="lg">
                        {skills.backend.map((tech) => (
                            <TechBadge key={tech} tech={tech as Tech} />
                        ))}
                    </Group>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4} mb={"md"}>Tools</Title>
                    <Group gap="xs" mb="lg">
                        {skills.tools.map((tech) => (
                            <TechBadge key={tech} tech={tech as Tech} />
                        ))}
                    </Group>
                </Grid.Col>
            </Grid>

        </>

    )
}
