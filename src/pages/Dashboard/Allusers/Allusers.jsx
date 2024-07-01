import React from 'react';
import useAxioSecure from '../../Components/hooks/useAxioSecure'
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from "sweetalert2";
const Allusers = () => {
    const axiossecure=useAxioSecure();
//get the users
    const {data: users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
         const res=await axiossecure.get('/users');
         return res.data;
        }
    })
    const handleMakeAdmin= user=>{
        axiossecure.patch(`/users/admin/${user._id}`)
.then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        refetch();
Swal.fire({
    position:"top-end",
    icon:"success",
    title:`${user.name} is admin now`,
    showConfirmButton:false,
    timer:1500
})
    }
})
    }

const handleDeleteUser = user=>{
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

        axiossecure.delete(`/users/${user._id}`)
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
        <div className='mt-10'>
            <div className='flex justify-evenly my-4 font-bold'>
                <h2>All users</h2>
                <h2>Total users:{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
      users.map((user,index)=><tr key={user._id}>
      <th>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
      {user.role=='admin'?'Admin':
      <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUser className='text-white'></FaUser></button>}
      
      </td>
      <td>
      <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
      </td>


      </tr>)
      }
     
    </tbody>
  </table>
</div>    
        </div>
    );
};

export default Allusers;