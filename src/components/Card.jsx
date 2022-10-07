import { useContext, useState } from "react";
import ProfileContext from "../context/ProfileContext";
import { CardMini } from "./Cardinner";

export const Card = () => {
  const { profile, isLoading } = useContext(ProfileContext);
  // const [profArr, setProfArr] = useState([profile]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {console.log(profile)}
      {profile.map((prof) => (
        <CardMini key={prof.data.service_search_results.hits.id} prof={prof} />
      ))}
    </div>
  );
};
