import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (auth === false) {
    return <Navigate to="/" />;
  }

  return children;
}
