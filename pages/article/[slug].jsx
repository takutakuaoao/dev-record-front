import fs from 'fs';
import path from 'path';
import { Box, Center } from '@chakra-ui/react';
import markdownTheme from '../../config/markdownTheme';

import { unified } from "unified";
import parser from "remark-parse";
import toHast from "remark-rehype";
import compiler from "rehype-react";
import React from 'react';
import { visit } from "unist-util-visit";
import remarkDirective from 'remark-directive'
import Subject from '../../components/organisms/article/subject';
import FullImage from '../../components/atoms/fullImage';
import Header from '../../components/organisms/header';
import Footer from '../../components/organisms/footer';
import Content from '../../components/organisms/article/content';

const Slug = ({ content }) => {

    const processor = unified()
        .use(parser)
        .use(remarkDirective)
        .use(myRemarkPlugin)
        .use(toHast)
        .use(compiler, { createElement: React.createElement, components: markdownTheme })

    return (
        <>
            <Header />
            <Box color={"gray.700"}>
                <Center py={12}>
                    <Box maxW={"940px"} letterSpacing={0.8}>
                        <Box mb={12}>
                            <Subject category="WEB制作" id="85" title="【告白】元会社勤務ITエンジニアだから知るストレスへの恐怖。ストレスで潰されるなら会社を辞めても良い！？" date="2021.01.27" />
                        </Box>
                        <Box mb={12}>
                            <FullImage src="https://nelog.jp/wp-content/uploads/2015/08/camera-583666_1280.jpg" />
                        </Box>
                        <Content>{processor.processSync(content).result}</Content>
                    </Box>
                </Center>
            </Box>
            <Footer />
        </>
    );
}

export async function getStaticProps(context) {
    // マークダウンファイルの取得
    const markdownPath = path.join(process.cwd(), 'markdowns', 'test.md');
    const fileContents = fs.readFileSync(markdownPath, 'utf-8');

    return {
        props: {
            content: fileContents,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'test1' } },
            { params: { slug: 'test2' } },
        ],
        fallback: false,
    };
}

function myRemarkPlugin() {
    return (tree) => {
        visit(tree, (node) => {
            if (node.type === 'inlineCode') {
                const data = node.data || (node.data = {})
                data.hProperties = { "inline": true }
            }

            if (
                node.type === 'textDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'containerDirective'
            ) {
                if (node.name === 'info' || node.name === 'memo' || node.name === 'alert' || node.name === 'wrap' || node.name === 'm') {
                    const data = node.data || (node.data = {})
                    const tagName = node.name

                    data.hName = tagName
                    data.hProperties = { "attributes": node.attributes }
                }

                return
            }
        })
    }
}

export default Slug
