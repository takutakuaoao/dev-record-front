import { HStack, Text, Heading, Box, Flex } from "@chakra-ui/react"
import H1 from "../../atoms/h1"
import CategoryBtn from "../../molecules/categoryBtn"

const Subject = (props) => {
    const { category, id, title, date } = props
    return (
        <Heading px={[3, 8]} py={[4, 6]} borderWidth={1} borderColor={"gray.300"}>
            <Top category={category} id={id} />
            <Title title={title} />
            <Bottom date={date} />
        </Heading>
    )
}

const Top = (props) => {
    const { category, id } = props
    return (
        <HStack spacing={4} mb={4}>
            <CategoryBtn>{category}</CategoryBtn>
            <Text fontSize={["sm", "md"]} letterSpacing={0}>#{id}</Text>
        </HStack>
    )
}

const Title = (props) => {
    const { title } = props
    return (
        <Box mb={[3, 4]}>
            <H1>{title}</H1>
        </Box>
    )
}


const Bottom = (props) => {
    const { date } = props
    return (
        <Flex justifyContent={"end"}>
            <Text fontSize={["sm", "md"]} color={"blackAlpha.600"} fontWeight={"normal"}>{date}</Text>
        </Flex>
    )
}

export default Subject
