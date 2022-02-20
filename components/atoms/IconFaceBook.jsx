import { Icon, Link } from "@chakra-ui/react"
import { BsFacebook } from "react-icons/bs"

const IconFaceBook = (props) => {
    const { size, href } = props
    return (
        <Link href={href} isExternal>
            <Icon as={BsFacebook} fontSize={size} color="white" />
        </Link>
    )
}

export default IconFaceBook
