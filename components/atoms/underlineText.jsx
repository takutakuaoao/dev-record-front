import { Text } from "@chakra-ui/react"

const UnderlineText = (props) => {
    const {children} = props
    return (
        <Text bgGradient='linear(transparent 70%, blue.100 70%)' w={"fit-content"} as="span">{children}</Text>
    )
}

export default UnderlineText
