import Link from "next/link";

export default function PostPreviewTitle({ slug, title }) {
    return (
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
            <a className="text-2xl font-bold no-underline sm:text-4xl hover:underline">
                {title}
            </a>
        </Link>
    );
}
