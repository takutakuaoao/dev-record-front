import { Image } from "@chakra-ui/react"

const FullImage = (props) => {
    const {src, height} = props
    return (
        <Image src={src} w="100%" objectFit="cover" height={500} />
    )
}

export default FullImage
