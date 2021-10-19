import React from 'react';
import { Table } from 'react-bootstrap';
import { useAddCart } from '../../Context/AddtoCart';

const CartTOtalPrice = () => {
  const { cartProduct } = useAddCart();
  // pricing 
    let subTotal = 0;
    for (const cart of cartProduct) {
        // console.log(cart);
        subTotal = parseInt(cart.price) + subTotal;
    }
    const deliveryRate = subTotal*.05;
    const total = subTotal + deliveryRate;


    return (
      <div>
        <Table striped bordered hover size="sm" className="table-info">
          <tbody className="text-start">
            <tr>
              <th>SubTotal</th>
              <th>=</th>
              <th>{subTotal.toFixed(2)}</th>
            </tr>
            <tr>
              <th>Delivery Charge</th>
              <th>=</th>
              <th>{deliveryRate.toFixed(2)}</th>
            </tr>
            <tr>
              <th>Total</th>
              <th>=</th>
              <th>{total.toFixed(2)}</th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
};

export default CartTOtalPrice;