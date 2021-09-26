import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary

    const total = cart.reduce(totalReducer, 0).toFixed(2)

    return (
        <div className='cart-style'>


            <table class="table">
                <thead>
                    <h4 className='text-center'>Cart-Details</h4>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className='fw-bold'>
                    <tr>
                        <th><i class="fas fa-user"></i> Total Added-Persons:</th>
                        <td><span>{cart.length}</span></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Total salary:</th>
                        <td>$<span>{total}</span></td>
                        <td></td>
                        <td></td>
                    </tr>



                </tbody>
            </table>

            <ul>
                {
                    cart.map(person => <li className='fw-bold'>
                        {person.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Cart;