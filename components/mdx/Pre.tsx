import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { RiFileCopyLine } from "react-icons/ri";

const Pre = ({ children }: any) => {
  const textInput = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    if (textInput && textInput.current) {
      const { textContent } = textInput.current;
      const t = textContent ? textContent : "";
      navigator.clipboard.writeText(t);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Flex as="pre" my="2rem" ref={textInput}>
      {children}
      <IconButton
        position="relative"
        alignSelf="start"
        size="md"
        py="0.5rem"
        variant="link"
        aria-label="copy code"
        icon={
          <Icon
            as={copied ? BsClipboardCheck : RiFileCopyLine}
            fontSize="1.5rem"
          />
        }
        color={copied ? "green.bright" : "white.bright"}
        _active={{
          transform: "scale(0.90)",
        }}
        onClick={onCopy}
      />
    </Flex>
  );
};

export default Pre;
