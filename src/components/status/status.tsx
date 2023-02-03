import styled from "styled-components";

const OnlineStatus = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: green;
`

export function StatusComponent(): React.ReactElement {
    return (
        <>
            <OnlineStatus/>
        </>
    )
}