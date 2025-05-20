import { Anchor, Card, Flex, Stack, Text } from "@mantine/core";
import { IconBrandRust, IconBrandTypescript } from "@tabler/icons-react";
import { CSSProperties } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TerminalIntro() {
    return <div className="animated-border-container">
        <Card
            className="animated-card"
            withBorder
            radius={24}
            bg="dark.8"
            style={{
                fontFamily: "monospace",
                whiteSpace: "pre",
                overflowX: "auto",
                border: "1px solid #2c2e33",
                boxShadow: "0 0 0 1px #2c2e33",
                position: "relative",
            }}>

            <Stack gap={2}>
                <Text span>
                    <Text span c="green">
                        mikku
                    </Text>
                    <Text span>@</Text>
                    <Text span c="green">
                        archlinux
                    </Text>
                    <Text span> </Text>
                    <Text span c="blue">
                        ~
                    </Text>
                    <Text span> $ </Text>
                    <Text span c="gray">
                        <Typewriter
                            words={['mikkurogue --about']}
                            cursor
                            cursorStyle="█"
                            typeSpeed={40}
                            deleteSpeed={0}
                            delaySpeed={1000}
                        />
                    </Text>
                </Text>
                <Text>Name: Mikku</Text>
                <Text>Stack: <IconBrandTypescript style={iconPosition} color="#007acc" /> <IconBrandRust style={iconPosition} color="#CE422B " /> </Text>
                <Text>Focus: Memory &amp; type safety, developer experience &amp; ergonomics</Text>
                <Text>Location: 🇫🇮 Finland</Text>
                <Text>Keyboard: Corne v4 custom split column staggered keyboard</Text>
                <Text>Switches: Leobog Graywood v3</Text>
                <Text>Mouse: Logitech MX Master 2S</Text>
                <Text>Headset: Logitech Pro X Wireless</Text>
                <Flex gap={6}>
                    Links:
                    <Anchor
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                        href="https://linkedin.com/in/mrj-lindemans"
                    >
                        LinkedIn
                    </Anchor>
                    <Anchor
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                        href="https://github.com/mikkurogue"
                    >
                        Github
                    </Anchor>

                </Flex>
            </Stack>
        </Card>
    </div>
}

const iconPosition: CSSProperties = {
    position: "relative",
    top: 4
}
