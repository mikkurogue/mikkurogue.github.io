import "@mantine/core/styles.css";
import '@mantine/spotlight/styles.css';
import "./globals.css"

import React from 'react'
import {
    MantineProvider, ColorSchemeScript, mantineHtmlProps,
    Container
} from "@mantine/core"
import { theme } from "../theme"

export const metadata = {
    title: 'Mikkurogue',
    description: "Mikkurogue portfolio"
};

export default function RootLayout({ children }: { children: any }) {

    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </head>
            <body>
                <MantineProvider theme={theme} defaultColorScheme="dark">
                    <Container fluid>
                        {children}
                    </Container>
                </MantineProvider>
            </body>
        </html>
    );
}
