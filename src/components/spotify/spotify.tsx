import { SpotifyCurrentTrackType } from "@/types/spotifyCurrentTrack"
import { Box, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import styled from "styled-components"
import io from "socket.io-client";
import useWebSocket from "react-use-websocket";
import { ENDPOINT } from "@/api/api";

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

    const [spotifyData, setSpotifyData] = useState<SpotifyCurrentTrackType>();
    

    useEffect(() => {
        const ws = new WebSocket(`wss://${ENDPOINT}/api/v1/spotify/currently-playing`);
        ws.onmessage = function(evt) {
            console.log("ws onmessage:" + evt.data);
            setSpotifyData(JSON.parse(evt.data));
        }
    }, []);

    const calculateProgress = () => {
        return spotifyData?.progress_ms! / spotifyData?.duration_ms! * 100
    }

    const millisecondsToTime = (milliseconds: number): string => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds.padStart(2, '0')}`;
      }

    return (
        <>
            <Container visible={spotifyData?.playing!}>
                <SpotifyImage src={spotifyData?.image}/>
                <ProgressBar>
                    <Fill progress={calculateProgress()}/>
                </ProgressBar>

                <Box m={'1em'}>
                    <Text>{spotifyData?.title}</Text>
                    <Text fz="sm" c="dimmed">{spotifyData?.artist}</Text>
                    <Text>{millisecondsToTime(spotifyData?.progress_ms!)} / {millisecondsToTime(spotifyData?.duration_ms!)}</Text>
                </Box>
            </Container>
        </>
    )
}
