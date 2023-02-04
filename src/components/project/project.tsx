import { Box, Space, Stack, Text, Title } from "@mantine/core"
import styled from "styled-components"

const RedButton = styled.div`
width: 0.75rem;
height: 0.75rem;
border-radius: 100%;
margin-right: 0.5rem;
background: #ff5f57;
`

const YellowButton = styled.div`
width: 0.75rem;
    height: 0.75rem;
    border-radius: 100%;
    margin-right: 0.5rem;
    background: #febc30;
`

const GreenButton = styled.div`
width: 0.75rem;
height: 0.75rem;
border-radius: 100%;
margin-right: 0.5rem;
background: #27c841;
`

const ButtonContainer = styled.div`
padding: 0.5rem;
display: flex;
background: #111111;
`

const Container = styled.div`
    display: block;
    position: relative;
    height: 200px;
    background: var(--light-widget-background);
    border-radius: 20px;
    box-sizing: content-box;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 29px 0px;
    display: flex;

    color: var(--text);
    text-decoration: none;

    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
`

const ProjectImage = styled.img`
    width: 300px;
    left: 0px;
    top: 0px;
    bottom: 0px;
`

export interface Props {
    title: string;
    description: string;
    image: string;
    link: string;
}

function ProjectComponent(props: Props): React.ReactElement {

    const { title, description, image, link } = props;

    return (
        <>
            <Container onClick={() => {window.location.href = link }}>

                <Stack spacing={0}>
                <ButtonContainer>
                    <RedButton/>
                    <YellowButton/>
                    <GreenButton/>
                </ButtonContainer>
                <ProjectImage src={image}/>
                </Stack>

                <Box m={'1em'}>
                    <Title order={3}>{title}</Title>
                    <Space h="xs" />
                    <Text>{description}</Text>
                </Box>
            </Container>
        </>
    )
}

export function Projects(): React.ReactElement {
    return (
        <>
        
        <Stack spacing={'lg'}>
            <ProjectComponent
                title="EasyFollow.pl"
                description="EasyFollow.pl is the website that allows you to buy followers on social media platforms."
                image="projects/easyfollow.png"
                link="https://easyfollow.pl"
                />
            <ProjectComponent
                title="og.claims"
                description="og.claims is the marketplace for selling social media accounts. This website uses cryptocurrency as a payment method."
                image="projects/ogclaims.png"
                link="https://og.claims"
                />
            <ProjectComponent
                title="NixHost.pl (in progress)"
                description="nixhost.pl is a hosting services for websites and applications."
                image="projects/nixhost.jpg"
                link="#"
                />
        </Stack>
        </>
    )
}
