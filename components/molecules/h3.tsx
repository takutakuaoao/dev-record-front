import { Text } from "@chakra-ui/react"

const H3 = (props) => {
    const {children} = props
    return (
        <Text fontSize={["lg", "xl"]} backgroundColor={"gray.100"} px={[3, 8]} py={[4, 6]} fontWeight={"bold"} borderRadius={8} letterSpacing={1}>
                {children}
        </Text>
    )
}

export default H3
