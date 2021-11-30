import axios from "axios";
import LoadMore from "../components/LoadMore";

export default function Index({ data }) {
  return (
    <div>
      <LoadMore data={data} />
    </div>
  );
}


export async function getServerSideProps() {
  const response = await axios.post(
    `https://backend.sports.info/api/v1/posts/recent`,
    {
      nStart: 0,
      nLimit: 4,
      eSort: "Latest",
      bRemoveBannerPosts: true
    }
  );
  const data = await response.data.data;

  return {
    props: {
      data,
    },
  };
}
