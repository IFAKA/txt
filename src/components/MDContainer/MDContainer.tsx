import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vs as style } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"

const MDContainer = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: ({ children }) => {
          return (
            <SyntaxHighlighter
              style={style}
              language={"tsx"}
              wrapLines={true}
              customStyle={{
                borderRadius: "0.7em",
                backgroundColor: "rgb(241 245 249 / var(--tw-bg-opacity))",
                overflow: "auto",
              }}
              key={String(children)}
            >
              {String(children)}
            </SyntaxHighlighter>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
export default MDContainer