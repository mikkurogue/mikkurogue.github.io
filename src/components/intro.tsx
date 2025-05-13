import { Stack, Title, Group, Text } from "@mantine/core";
import LinkButton from "./link-button";
import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";

export default function Intro() {
    return <Stack gap="sm">
        <Title order={1} size="h2">
            Hi, I’m Mikkurogue
        </Title>
        <Text c="dimmed" size="lg">
            Software Engineer crafting elegant systems in <b>TypeScript</b> and <b>Rust</b>. I love building performant web apps and exploring systems programming.
        </Text>
        <Group mt="md">
            <LinkButton variant="filled" url="#" icon={<IconDownload size={16} />} text="Resume" />
            <LinkButton url="https://github.com/mikkurogue" icon={<IconBrandGithub size={16} />} text="Github" />
            <LinkButton url="https://linkedin.com/in/mrj-lindemans" icon={<IconBrandLinkedin size={16} />} text="LinkedIn" />
        </Group>
    </Stack>

}
