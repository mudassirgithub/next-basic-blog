export default function PostCoverImage({ image }) {
    return (
        <div>
            <img
                src={image}
                alt="post"
                className="w-full h-full rounded-sm object-fit"
            />
        </div>
    );
}
