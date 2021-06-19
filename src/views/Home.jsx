import Blog from "../components/Blog/Blog";
import useFetchData from "../util/useFetchData";

const Home = () => {
  
  // Local Server
  // const { data: blogs } = useFetchData("http://localhost:8000/posts");
  
  // Mocked Server for deployment
  const { data: blogs } = useFetchData("https://my-json-server.typicode.com/sukhvi/react-blog/posts");

  

  return <Blog blogs={blogs}  />;
};

export default Home;
