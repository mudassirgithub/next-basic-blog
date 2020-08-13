import Home from "../containers/Home";
import PostPreview from "../components/PostPreview";
import MetaHead from "../components/MetaHead";
import { getAllPosts } from "../lib/api";
import HeroTitle from "../components/HeroTitle";
import HeroExcerpt from "../components/HeroExcerpt";
import metaData from "../lib/data";

export default function Index({ allPosts }) {
    const posts = allPosts.map((post, key) => (
        <PostPreview id={post.slug} key={key} post={post} />
    ));
    return (
        <Home>
            <MetaHead
                title={metaData.title}
                description={metaData.description}
                url={metaData.url}
                image={metaData.image}
            />
            <div className="flex flex-col max-w-5xl px-2 mx-auto my-4 space-y-3">
                <HeroTitle title={metaData.title} />
                <HeroExcerpt excerpt={metaData.description} />
            </div>
            <hr className="max-w-5xl px-4 mx-auto" />
            <div className="flex flex-col max-w-5xl px-2 mx-auto my-2 space-y-6">
                {posts}
            </div>
        </Home>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        "tag",
        "title",
        "date",
        "slug",
        "author",
        "excerpt",
    ]);

    return {
        props: { allPosts },
    };
}
