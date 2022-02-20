import { Heading } from "@chakra-ui/react"

const H1 = (props) => {
    const {children} = props
    return (
        <Heading fontSize={"3xl"} lineHeight={1.5} letterSpacing={2}>{children}</Heading>
    )
}

export default H1
