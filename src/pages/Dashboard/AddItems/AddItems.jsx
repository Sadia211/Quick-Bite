import React from 'react';
import Sectiontitle from '../../Components/Sectiontitle';
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../Components/hooks/useAxiosPublic'
import useAxioSecure from '../../Components/hooks/useAxioSecure'
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import Swal from "sweetalert2";
const AddItems = () => {
  
  const { register, handleSubmit ,reset} = useForm()
  const axiosPublic=useAxiosPublic();
  const axioSecure=useAxioSecure()
  const onSubmit = async(data) => {console.log(data)
    //image hosting
  const imageFile={image: data.image[0]}
const res= await axiosPublic.post(image_hosting_api,imageFile,{
  headers:{'content-type':'multipart/form-data'}

});
if (res.data.success) {
  // now send the menu item data to the server with the image url
  const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: res.data.data.display_url
  }
  // 
  const menuRes = await axioSecure.post('/menu', menuItem);
  console.log(menuRes.data)
  if(menuRes.data.insertedId){
      // show success popup
      reset();
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
  }
}
console.log( 'with image url', res.data);
};


    return (
        <div>
            <Sectiontitle heading='ADD AN ITEM'
                subheading='Whats new?'>
            </Sectiontitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe Name</span>
    
  </div>
  <input type="text" 
  placeholder="Recipe name"
   {...register("name",{required:true})} 
  className="input input-bordered w-full" /> 
</label>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Category</span>
     {/** //this is from daisy ui */}
     <select defaultValue="value"{...register('category')}></select>
      <select className="select select-bordered w-full ">
  <option disabled value='default'>Select a category</option>
  <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="Soup">soup</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
       
</select>
  </div>
</label>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Price*</span>
  </div>
  <input type="number" 
  placeholder="Price"
   {...register("price",{required:true})} 
  className="input input-bordered w-full" /> 
</label>
<div>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe details</span>
  </div>
  <textarea {...register("recipe",{required:true})} className="textarea textarea-bordered" placeholder="recipe details"></textarea> 
</label>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text"></span>
  </div>
  <input {...register("image",{required:true})}  type="file" className="file-input w-full max-w-xs" />
</label>
</div>

<div>

</div>
    
      <input type="submit" />
    </form>
            </div>
           
        </div>
    );
};

export default AddItems;