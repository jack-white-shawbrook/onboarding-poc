import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Redirect...");
    navigate("/apply/start");
  }, []);
  return <div>Redirect...</div>;
};

export default Redirect;
