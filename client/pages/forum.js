import Feeds from "../components/Feeds";
import Header from "../components/Header";
import MiniProfile from "../components/MiniProfile";
import TopUser from "../components/TopUser";
import Footer from "../components/Footer";
import authServices from "../services/auth.services";
import { useState, useEffect } from "react";
import postServices from "../services/post.services";

function forum({ posts }) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authServices.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  // console.log(currentUser);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="">
        <div
          className={
            currentUser === undefined
              ? "max-w-screen-2xl mx-auto"
              : "max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-4 space-x-3"
          }
        >
          {/* left */}
          <div
            className={
              currentUser === undefined ? "hidden" : "col-span-1 mt-10"
            }
          >
            <MiniProfile user={currentUser} />
          </div>
          {/* middle */}
          <div
            className={
              currentUser === undefined
                ? "mt-10 max-w-screen-md mx-auto"
                : "col-span-2 mt-10"
            }
          >
            <Feeds user={currentUser} posts={posts} />
          </div>
          {/* right */}
          <div
            className={
              currentUser === undefined ? "hidden" : "col-span-1 mt-10"
            }
          >
            <TopUser />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default forum;

export async function getServerSideProps() {
  let posts = {};
  await postServices.getPost().then((response) => {
    posts = response.data.posts;
  });

  return {
    props: {
      posts,
    },
  };
}
