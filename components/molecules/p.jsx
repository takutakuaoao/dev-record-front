import { Text } from "@chakra-ui/react"

const P = (props) => {
    const { children } = props
    return (
        <Text fontSize={'md'} lineHeight={2}>
            {children}
        </Text>
    )
}

export default P
