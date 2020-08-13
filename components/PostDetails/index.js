import PostBy from "../PostBy";
import PostOn from "../PostOn";

export default function PostDetails({ author, date }) {
    return (
        <div className="flex flex-col space-x-0 space-y-2 text-base font-normal sm:space-x-2 sm:space-y-0 sm:flex-row">
            <PostBy author={author} />
            <PostOn date={date} />
        </div>
    );
}
