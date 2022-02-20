import { OrderedList, UnorderedList } from "@chakra-ui/react";

const List = (props) => {
    const {ordered, styleType, attrs, children } = props

    let Element = ordered ? OrderedList : UnorderedList;

    return (
        <Element
            spacing={2}
            as={ordered ? 'ol' : 'ul'}
            styleType={styleType}
            pl={4}
            {...attrs}
        >
            {children}
        </Element>
    )
}

export default List
