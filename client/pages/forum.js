import Feeds from "../components/Feeds";
import Header from "../components/Header";
import MiniProfile from "../components/MiniProfile";
import TopUser from "../components/TopUser";
import Footer from "../components/Footer";

function forum() {
  return (
    <div>
      <Header />

      <main className="bg-gray-100">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-4 space-x-3">
          {/* left */}
          <div className="col-span-1 mt-10">
            <MiniProfile />
          </div>
          {/* middle */}
          <div className="col-span-2 mt-10">
            <Feeds />
          </div>
          {/* right */}
          <div className="col-span-1 mt-10">
            <TopUser />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default forum;
