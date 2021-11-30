import { React, useEffect, useState } from "react";
import axios from "axios";
import Blogs from './Blogs'
import styles from '../styles/Home.module.css'

function LoadMore({ data }) {
    const [oldData, setOldData] = useState(0);
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        if (oldData >= 4) {
            const getNewData = async () => {
                const arg = {
                    nStart: oldData,
                    nLimit: 4,
                    eSort: "Latest",
                    bRemoveBannerPosts: true
                };
                const res = await axios.post(
                    `https://backend.sports.info/api/v1/posts/recent`,
                    arg
                );
                const Data = res.data.data;
                setNewData([...newData, ...Data]);
            };
            getNewData()
        }
    }, [oldData]);

    return (
        <div>
            <nav className="navbar navbar-light " style={{ "backgroundColor": "#22336f", "marginBottom": "80px" }} >
                <a className="navbar-brand">
                    <img src="https://www.sports.info/assets/images/logo_v2.svg" style={{ "backgroundColor": "white" }} width="100" height="40" className="d-inline-block align-top" alt="" />

                </a>
            </nav>
            <Blogs data={data} />
            <Blogs data={newData} />
            <div>
                <div style={{ "textAlign": "center" }}>
                    <button
                        className={`${styles.loadMoreBtn} `}
                        onClick={() => {
                            setOldData(oldData + 4);
                        }}
                    >Load More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoadMore;
