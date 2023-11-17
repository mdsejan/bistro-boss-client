import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const useAuth = () => {
  const auth = useContext(ThemeContext);
  return auth;
};

export default useAuth;
