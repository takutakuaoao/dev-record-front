import { Box, Text } from "@chakra-ui/react"

const Information = (props) => {
    /**
     * colorScheme: ChakraUi default color name
     */
    const {title, colorScheme,  children} = props
    return (
        <Box>
            <Text fontSize={"xs"} w={'fit-content'} bgColor={`${colorScheme}.500`} color="white" py={1} px={2} borderTopRadius={2} fontWeight={"bold"}>{title}</Text>
            <Box py={[4, 6]} px={[3, 8]} borderWidth={2} borderColor={`${colorScheme}.500`} borderBottomRadius={2} bgColor={`${colorScheme}.50`}>
                {children}
            </Box>
        </Box>
    )
}

export default Information
