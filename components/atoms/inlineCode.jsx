import { Code } from "@chakra-ui/react"

const InlineCode = (props) => {
    const {children} = props
    return (
        <Code fontSize={"xs"}>{children}</Code>
    )
}

export default InlineCode
