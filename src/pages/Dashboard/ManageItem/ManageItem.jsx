import React from 'react';
import Sectiontitle from '../../Components/Sectiontitle';
import useMenu from '../../Components/hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import useAxioSecure from '../../Components/hooks/useAxioSecure'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const[menu,refetch]=useMenu();
    const axiossecure=useAxioSecure();
    const handleUpdateItem=(item)=>{

    }
    const handleDeleteItem=(item)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res=await axiossecure.delete(`/menu/${item._id}`)
          console.log(res.data);

          if(res.data.deletedCount>0){
            refetch();
          Swal.fire({
          title: "Deleted!",
          text: `${item.name} has been deleted`,
          icon: "success"
          });}
        }
      });
    }
;    return (
        <div>
            <Sectiontitle heading="Manage All Items" subheading='hurry up'></Sectiontitle>
            <div>
            <div class="overflow-x-auto">
  <table class="table">
    
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item name</th>
        <th>Price </th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index)=><tr key={item._id}>
            <td>
                {index +1}
            </td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
            {item.name}
              
            </td>
            <td className='text-right'>${item.price}</td>
            <td>
            <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
            <td>
              <Link to={`/dashboard/updateitem/${item._id}`}>
              <button  className="btn btn-ghost bg-red-600  text-white"><FaEdit></FaEdit></button>
              </Link>
            
            </td>
          </tr>
        )
      }
      
    </tbody>
   
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;