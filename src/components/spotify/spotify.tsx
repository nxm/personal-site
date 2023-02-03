import { Box, Text } from "@mantine/core"
import styled from "styled-components"

const Container = styled.div<{ visible: boolean }>`
    display: block;
    position: relative;
    height: 100px;
    background: var(--light-widget-background);
    border-radius: 20px;
    box-sizing: content-box;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 29px 0px;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    display: ${({ visible }) => (visible ? "flex" : "none")};

    color: var(--text);
    text-decoration: none;
`

const SpotifyImage = styled.img`
    width: 90px;
    height: 90px;
    left: 0px;
    top: 0px;
    bottom: 0px;
`

const ProgressBar = styled.div`
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: #717171;
    bottom: 0;
    border-top: 1px solid black;
`

const Fill = styled.div<{progress: number}>`
    position: absolute;
    width: ${({ progress }) => (progress)}%;
    height: 10px;
    background-color: #4CAF50;
`

export function SpotifyComponent(): React.ReactElement {

    return (
        <>
            <Container visible>
                <SpotifyImage src={'https://i.scdn.co/image/ab67616d00001e02b9e81653e2fd9756511a37a2'}/>
                <ProgressBar>
                    <Fill progress={99}/>
                </ProgressBar>

                <Box m={'1em'}>
                    <Text>Title</Text>
                    <Text fz="sm" c="dimmed">Author</Text>
                </Box>
            </Container>
        </>
    )
}
