import faker from "faker";
import { useState, useEffect } from "react";

function TopUser() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const topUsers = [...Array(4)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setTopUsers(topUsers);
  }, []);

  return (
    <div className="px-6 py-5 bg-white rounded-lg border border-gray-200">
      <h1 className="font-bold text-2xl mb-5">Top User</h1>
      <div className="space-y-2">
        {topUsers.map((profile) => (
          <div className="flex items-center" key={profile.id}>
            <img
              src={profile.avatar}
              alt=""
              className="rounded-full object-contain h-12 w-12"
            />
            <h2 className="font-bold text-lg ml-8">{profile.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopUser;
