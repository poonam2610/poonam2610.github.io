import { Route } from "react-router-dom";
import { useStateValue } from "../context-management/StateProvider";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useStateValue()[0];
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Route
      render={
        (routeProps) =>
          !!user ? (
            <>{children}</>
          ) : (
            <>
              {children}
              {isModalOpen && <Modal type="private" setIsModalOpen={setIsModalOpen} />}
            </>
          )
        //   <Redirect to={ROUTES.LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
