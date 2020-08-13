import ReactMarkdown from "react-markdown";

export default function PostContent({ content }) {
    return (
        <ReactMarkdown
            className="text-lg font-medium markdown"
            source={content}
            escapeHtml={true}
        />
    );
}
