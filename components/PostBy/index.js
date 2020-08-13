export default function PostBy({ author }) {
    return (
        <div className="flex flex-row space-x-2">
            <span>By</span>
            <a
                href={author.twitter}
                target="_blank"
                className="font-bold hover:underline"
            >
                {author.name}
            </a>
        </div>
    );
}
