import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>

      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id.toString()} />
          <label htmlFor="userName">Username:</label>
          <input type="text" name="userName" placeholder={user.username} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="John Doe" />
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <textarea type="text" name="address" placeholder={user.address} />

          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={user.isAdmin}>
              Yes
            </option>
            <option value={!user.isAdmin}>
              False
            </option>
          </select>

          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={user.isActive}>
              Yes
            </option>
            <option value={!user.isActive}>
              False
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
