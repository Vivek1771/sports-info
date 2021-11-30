/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Blogs({ data }) {
    return (
        <div>
            {data?.map((blog, i) => (
                <div key={blog._id}>
                    <div className="card mb-3 mx-auto" style={{ "maxWidth": "940px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <Link href='/slug/[slug]' as={"/slug/" + blog.sSlug}>
                                    <a style={{ cursor: "pointer", "color": "black", "textDecoration": "none" }}>
                                        <img src={blog.sImage} className="card-img" alt="image" style={{ "margin": "15PX" }} />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <Link href='/slug/[slug]' as={"/slug/" + blog.sSlug}>
                                        <a style={{ cursor: "pointer", "color": "black", "textDecoration": "none" }}>
                                            <h5 className="card-title">{blog.sTitle}</h5>
                                        </a>
                                    </Link>
                                    <Link href='/slug/[slug]' as={"/slug/" + blog.sSlug}>
                                        <a style={{ cursor: "pointer", "color": "black", "textDecoration": "none" }}>
                                            <p className="card-text">{blog.sDescription}...</p>
                                        </a>
                                    </Link>
                                    <div className="card-text" style={{ "display": "flex", "justifyContent": "flex-end" }}>
                                        <span>
                                            <img src='https://www.sports.info/comment-icon.7aef209a3b2086028430.svg' alt='comments' />
                                        </span>
                                        {blog.nCommentsCount}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>
                                            <img src='https://www.sports.info/view-icon.b16661e96527947b18f1.svg' alt='views' />
                                        </span>
                                        {blog.nViewCounts}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Blogs;

