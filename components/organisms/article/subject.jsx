import { HStack, Text, Heading, Box, Flex } from "@chakra-ui/react"
import H1 from "../../atoms/h1"
import CategoryBtn from "../../molecules/categoryBtn"

const Subject = (props) => {
    const { category, id, title, date } = props
    return (
        <Heading px={8} py={6} borderWidth={1} borderColor={"gray.300"}>
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
            <Text fontSize={"md"} letterSpacing={0}>#{id}</Text>
        </HStack>
    )
}

const Title = (props) => {
    const { title } = props
    return (
        <Box mb={4}>
            <H1>{title}</H1>
        </Box>
    )
}


const Bottom = (props) => {
    const { date } = props
    return (
        <Flex justifyContent={"end"}>
            <Text fontSize={"md"} color={"blackAlpha.600"} fontWeight={"normal"}>{date}</Text>
        </Flex>
    )
}

export default Subject
