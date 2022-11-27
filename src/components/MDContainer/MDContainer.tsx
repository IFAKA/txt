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
            <div className="dark:bg-slate-800">
              <SyntaxHighlighter
                style={style}
                language={"tsx"}
                wrapLines={true}
                customStyle={{
                  height: "100%",
                  margin: 0,
                  borderRadius: "0.6em",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  border: "none",
                  backgroundColor: "transparent",
                  overflow: "auto",
                }}
                key={String(children)}
              >
                {String(children)}
              </SyntaxHighlighter>
            </div>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
export default MDContainer
