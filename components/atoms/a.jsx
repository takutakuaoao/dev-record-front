import { Link } from "@chakra-ui/react"

const A = (props) => {
    const {href, children} = props
    return (
        <Link href={href} color="blue.500">{children}</Link>
    )
}

export default A
