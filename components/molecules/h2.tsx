import { Heading } from "@chakra-ui/react";

const H2 = (props) => {
    const { children } = props
    return (
        <Heading fontSize={["xl", "3xl"]} py={4} borderColor={"gray.800"} borderBottomWidth={2}>
            {children}
        </Heading>
    );
}

export default H2
