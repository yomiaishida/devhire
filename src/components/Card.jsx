import { useContext, useState } from "react";
import ProfileContext from "../context/ProfileContext";
import { CardInner } from "./CardInner";

export const Card = () => {
  const { profile, isLoading } = useContext(ProfileContext);
  // const [profArr, setProfArr] = useState([profile]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {/* {console.log(profArr)} */}
      {Object.keys(profile).map((data, i) => (
        <>
          {console.log(profile.data.service_search_results.hits[0]._id, i)}
          <CardInner
            key={profile.data.service_search_results.hits[0]._id}
            data={profile.data}
          />
        </>
      ))}
    </div>
  );
};
