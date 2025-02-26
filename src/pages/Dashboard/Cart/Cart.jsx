import React from 'react';
import useCart from '../../Components/hooks/useCart';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useAxioSecure from '../../Components/hooks/useAxioSecure';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Cart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxioSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="w-full">
        <Helmet>
            <title>Bistro Boss | My Cart</title>
        </Helmet>
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Items: {cart.length}</h3>
            <h3 className="text-3xl">Total Price: ${total}</h3>
            {cart.length ? <Link to="/dashboard/payment">
                <button className="btn btn-warning btn-sm">PAY</button>
            </Link>:
             <button disabled className="btn btn-warning btn-sm">PAY</button>}
        </div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Food</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className="text-end">${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
);
};
   

export default Cart;