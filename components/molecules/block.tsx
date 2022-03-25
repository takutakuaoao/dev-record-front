import { Box } from "@chakra-ui/react"

const Block = (props) => {
    const {children} = props
    return (
        <Box py={4} px={[3, 6]} borderWidth={1} borderColor={"gray.300"} borderBottomRadius={2}>
            {children}
        </Box>
    )
}

export default Block
