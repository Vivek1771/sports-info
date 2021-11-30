import parse from "html-react-parser";

function Blog({ SingleBlogData }) {
    return (
        <>
            <nav className="navbar navbar-light " style={{ "backgroundColor": "#22336f", "marginBottom": "80px" }} >
                <a className="navbar-brand">
                    <img src="https://www.sports.info/assets/images/logo_v2.svg" style={{ "backgroundColor": "white" }} width="100" height="40" className="d-inline-block align-top" alt="" />

                </a>
            </nav>
            <div className="container">
                <div>
                    <div style={{ "textAlign": "center" }}>
                        <h1>{SingleBlogData.sTitle}</h1>
                        <br />
                        <img src={SingleBlogData.sImage} alt="blog image" />
                    </div>
                    <br />
                    <div style={{ "display": "flex", "justifyContent": "center" }}>
                        <p>
                            <span>
                                <img src='https://www.sports.info/comment-icon.7aef209a3b2086028430.svg' alt='comments' />
                            </span>&nbsp;
                            <span>{SingleBlogData.nCommentsCount}</span>
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <p>
                            <span>
                                <img src='https://www.sports.info/view-icon.b16661e96527947b18f1.svg' alt='views' />
                            </span>&nbsp;
                            <span>{SingleBlogData.nViewCounts}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ "textAlign": "left" }} className="container">
                {parse(SingleBlogData.sDescription)}
            </div>

        </>
    );
}

export default Blog;

