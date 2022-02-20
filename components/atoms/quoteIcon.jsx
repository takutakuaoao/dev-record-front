import { Center, Icon } from "@chakra-ui/react"
import { FaQuoteRight } from "react-icons/fa"

const QuoteIcon = (props) => {
    return (
        <Center w={'30px'} h={'30px'} bgColor={"gray.700"}>
            <Icon as={FaQuoteRight} color="white" />
        </Center>
    )
}

export default QuoteIcon
