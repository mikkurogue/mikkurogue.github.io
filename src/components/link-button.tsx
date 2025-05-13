"use client"

import { Button, ButtonProps } from "@mantine/core"
import { ReactNode } from "react";

type LinkButtonProps = {
    text: string;
    icon: ReactNode
    url: string;
    variant?: ButtonProps["variant"]
}

export default function LinkButton({ text, icon, url, variant = "default" }: LinkButtonProps) {
    return <Button className="hoverable"
        component="a"
        href={url}
        target="_blank"
        leftSection={icon}
        variant={variant}
    >
        {text}
    </Button>

}
