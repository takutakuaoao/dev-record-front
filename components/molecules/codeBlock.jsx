import { Box, Text } from "@chakra-ui/react";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = (props) => {
  const { lang, fileName, children } = props;
  const styles = { paddingTop: "26px" };

  return (
    <Box>
      <Text
        bgColor={"gray.200"}
        fontSize={"xs"}
        pos={"relative"}
        top={"26px"}
        w={"fit-content"}
        color="gray.900"
        py={1}
        px={2}
      >
        {fileName}
      </Text>
      <SyntaxHighlighter
        style={atomDark}
        language={lang}
        customStyle={styles}
        showLineNumbers={true}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
