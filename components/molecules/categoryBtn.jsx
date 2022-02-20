import { Button } from "@chakra-ui/react"

const CategoryBtn = (props) => {
    const {children} = props
    return (
        <Button bgColor={"gray.800"} color={"white"} size={"xs"}>{children}</Button>
    )
}

export default CategoryBtn
