import { keyframes } from "@chakra-ui/react"
import styled from "@emotion/styled"

const FadeInDownKey = keyframes`
    from {opacity: 0; transform: translateY(2rem)}
    to {opacity: 1; transform: translateY(0rem)}
`
export const FadeInDown = styled.div`
    animation-duration: 0.45s;
    animation-name: ${FadeInDownKey};
`