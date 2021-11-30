import Blog from "../../components/Blog";

function SingleBlog({ SingleBlogData }) {
    return (
        <div>
            <Blog SingleBlogData={SingleBlogData} />
        </div>
    );
}

export default SingleBlog;


export async function getServerSideProps({ query }) {
    const { slug } = query;
    const res = await fetch(`https://backend.sports.info/api/v1/posts/view/${slug}`);
    const data = await res.json();
    const SingleBlogData = data.data;
    return {
        props: { SingleBlogData },
    };
}
