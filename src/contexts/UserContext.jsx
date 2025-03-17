import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { api } from "../services";

const categoryService = api.category;

const UserContext = createContext();

export function UserProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryService.getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const providers = {
    categories,
    setCategories,
  };

  return (
    <UserContext.Provider value={providers}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContext;
