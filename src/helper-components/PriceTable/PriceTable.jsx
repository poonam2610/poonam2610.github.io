import React from "react";
import "./PriceTable.scss";
import { useStateValue } from "../../context-management/StateProvider";
import { totalPrice } from "../../context-management/reducer";
import PropTypes from 'prop-types';


export default function PriceTable({ buttonTitle, handleClick }) {
  const { basket } = useStateValue()[0];

  return (
    <div className="price__table">
      <h2>Price Details ({basket.length} items)</h2>
      <hr />
      <div className="subtotal">
        <table>
          <tbody>
            <tr>
              <td>Total MRP: </td>
              <td>Rs. {totalPrice(basket)}</td>
            </tr>
            <tr>
              <td>Convenience Fee</td>
              <td>Rs. {((totalPrice(basket) * 10) / 100).toFixed(2)}</td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Amount</td>
              <td>
                <strong>
                  Rs.{" "}
                  {(
                    totalPrice(basket) +
                    (totalPrice(basket) * 10) / 100
                  ).toFixed(2)}
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="order__button">
          {basket.length > 0 && (
            <button className="checkout__button" onClick={handleClick}>{buttonTitle}</button>
          )}
        </div>
      </div>
    </div>
  );
}

PriceTable.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
