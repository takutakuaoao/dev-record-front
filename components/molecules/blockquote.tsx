import { Box, Flex, Text } from "@chakra-ui/react"
import QuoteIcon from "../atoms/quoteIcon"

const Blockquote = (props) => {
    const { children } = props
    return (
        <Box borderColor={"gray.700"} borderWidth={1}>
            <QuoteIcon />
            <Box px={[6, 8]}>
                <Text as='i'>
                    {children}
                </Text>
            </Box>
            <Flex justify={"end"}>
                <QuoteIcon />
            </Flex>
        </Box>
    )
}

export default Blockquote
