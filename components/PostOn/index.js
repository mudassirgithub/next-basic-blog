export default function PostOn({ date }) {
    return (
        <div className="flex flex-row space-x-2">
            <span>on</span>
            <span className="font-bold">{date}</span>
        </div>
    );
}
