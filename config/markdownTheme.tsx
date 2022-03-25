import { Box } from '@chakra-ui/react';
import H2 from '../components/molecules/h2';
import H3 from '../components/molecules/h3';
import P from '../components/molecules/P';
import Blockquote from '../components/molecules/blockquote';
import A from '../components/atoms/a';
import Information from '../components/molecules/infomation';
import Block from '../components/molecules/block';
import UnderlineText from '../components/atoms/underlineText';
import List from '../components/molecules/list';
import CodeBlock from '../components/molecules/codeBlock';
import InlineCode from '../components/atoms/inlineCode';

const markdownTheme = {
    h2: props => {
        const { children } = props;
        return (
            <Box mt={[10, 16]} mb={[4, 8]} >
                <H2>{children}</H2>
            </Box>
        )
    },
    h3: props => {
        const { children } = props;
        return (
            <Box mt={[9, 14]} mb={[4, 8]}>
                <H3>{children}</H3>
            </Box>
        )
    },
    p: props => {
        const { children } = props;
        return (
            <Box mb={[6, 6]}>
                <P>{children}</P>
            </Box>
        )
    },
    code: props => {
        const { inline, children, className } = props;

        if (inline) {
            return <InlineCode>{children}</InlineCode>
        }

        const match = /language-(.+)(:.+)/.exec(className || '');
        const lang  = match && match[1] ? match[1] : '';
        const name  = match && match[2] ? match[2] : '';

        return (
            <Box mb={[6, 8]}>
                <CodeBlock lang={lang} fileName={name.slice(1)}>{children}</CodeBlock>
            </Box>

        )
    },
    blockquote: props => {
        const { children } = props;
        return (
            <Box my={[6, 8]}>
                <Blockquote>{children}</Blockquote>
            </Box>
        )
    },
    a: props => {
        const { href, children } = props;
        return (
            <A href={href}>{children}</A>
        )
    },
    ul: props => {
        const { ordered, children, depth } = props;
        const attrs = getCoreProps(props);
        let styleType = 'disc';
        if (ordered) {
            styleType = 'decimal';
        }

        if (depth === 1) styleType = 'circle'

        return (
            <Box mb={[4, 4]}>
                <List ordered={ordered} styleType={styleType} attrs={attrs}>{children}</List>
            </Box>
        )
    },
    info: props => {
        const { attributes, children } = props
        const { title } = attributes
        return (
            <Box mb={[6, 8]}>
                <Information title={title} colorScheme="blue">{children}</Information>
            </Box>
        )
    },
    memo: props => {
        const { attributes, children } = props
        const { title } = attributes
        return (
            <Box mb={[6, 8]}>
                <Information title={title} colorScheme="orange">{children}</Information>
            </Box>
        )
    },
    alert: props => {
        const { attributes, children } = props
        const { title } = attributes
        return (
            <Box mb={[6, 8]}>
                <Information title={title} colorScheme="red">{children}</Information>
            </Box>
        )
    },
    wrap: props => {
        const { children } = props
        return (
            <Box mb={[6, 8]}>
                <Block>{children}</Block>
            </Box>
        )
    },
    m: props => {
        const { children } = props
        return (
            <UnderlineText>{children}</UnderlineText>
        )
    }
};

function getCoreProps(props) {
    return props['data-sourcepos']
        ? { 'data-sourcepos': props['data-sourcepos'] }
        : {};
}

export default markdownTheme
