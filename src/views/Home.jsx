import Blog from "../components/Blog/Blog";
import useFetchData from "../util/useFetchData";

const Home = () => {
  const { data: blogs } = useFetchData("http://localhost:8000/posts");

  

  return <Blog blogs={blogs}  />;
};

export default Home;
