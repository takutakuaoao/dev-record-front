import { Image } from "@chakra-ui/react"

const FullImage = (props) => {
    const {src} = props
    return (
        <Image src={src} w="100%" />
    )
}

export default FullImage
