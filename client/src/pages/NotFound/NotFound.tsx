import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h4>Here is a dancing minion instead</h4>
      <img src="https://media.tenor.com/-Y2YOay3_JoAAAAM/its-friday-dancing.gif"></img>
    </Layout>
  );
}

export default NotFound;
