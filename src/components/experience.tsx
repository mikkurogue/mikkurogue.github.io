import { Card, Text, Group, Title } from "@mantine/core"
import TechBadge from "./tech-badge"

type ExperienceProps = {
    experiences: Experience[]
}

export default function Experience({ experiences }: ExperienceProps) {

    return <>
        <Title order={2} size="h3" mt="xl" mb="md">
            Experience
        </Title>

        {
            experiences.map((exp) => {
                return <Card className="hoverable main-halo" key={exp.company} shadow="sm" p="lg" radius={"md"} withBorder mb={"md"}>
                    <Title order={4}>{exp.company} - {exp.role}</Title>
                    <Text fz={"xs"} c={"dimmed"}>{exp.tenure[0]} - {exp.tenure[1]}</Text>
                    <Text fz={"xs"} c={"dimmed"}>{exp.location}</Text>
                    <Text fz={"sm"} c={"dimmed"}>{exp.description}</Text>

                    <Group gap={"xs"} mt={"md"}>
                        {
                            exp.tech.map((tech, idx) => {
                                return <TechBadge key={`${tech}-${idx}`} tech={tech} />
                            })
                        }
                    </Group>
                </Card>
            })
        }

    </>
}
