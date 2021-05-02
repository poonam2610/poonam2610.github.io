import { Route } from "react-router-dom";
import { useStateValue } from "../context-management/StateProvider";
import Modal from "../components/Modal/Modal";
import React, { useState } from "react";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user } = useStateValue()[0];
  const [isOpenModel, setIsOpenModel] = useState(true);
  // const history = useHistory();
  // useEffect(() => {
  //   if (!user) {
  //     dispatch({
  //       type: ACTIONS.CHANGE_MODAL_STATE,
  //     });
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  return (
    <Route
      render={(routeProps) =>
        !!user ? (
          <>{children}</>
        ) : (
          <>
            {children}
            {isOpenModel && (
              <Modal type="private" setIsModalOpen={setIsOpenModel} />
            )}
          </>
        )
      }
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
