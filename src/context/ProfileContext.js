import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  // Fetch Profile
  const fetchProfile = async () => {
    const { data } = await axios.get(
      "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
    );

    setProfile(data);
    setIsLoading(false);
  };

  return (
    <ProfileContext.Provider value={{ profile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileContext;
