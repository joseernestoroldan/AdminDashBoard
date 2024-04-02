import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({params}) => {
  const product = await fetchProduct(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>

          <input type="hidden" value={product._id.toString()} name="id"/>

          <label htmlFor="title">Title:</label>
          <input type="text" name="title" placeholder={product.title} />

          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder={product.color} />

          <label htmlFor="size">Size</label>
          <input type="text" name="size" placeholder={product.size} />

          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
            <option value="mobiles">Mobiles</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" placeholder={product.description} rows="10"/>
          

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
