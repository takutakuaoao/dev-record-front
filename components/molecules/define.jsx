import { Box, Center } from "@chakra-ui/react"

const Define = (props) => {
    const {main, sub} = props
    return (
        <Center flexDir="column">
            <Box fontWeight="bold" fontSize="md" w="fit-content">{main}</Box>
            <Box fontSize="xs" w="fit-content">{sub}</Box>
        </Center>
    )
}

export default Define
