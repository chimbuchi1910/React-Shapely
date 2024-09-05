import React, { useState } from "react";
import { userData } from "../../data/Data";
import CartItems from "./CartItems";


const Product = () => {
  const [displayUsers, setDisplayUsers] = useState(userData);
  //   const [userInfo, setUserInfo] = useState();
  return (
    <div>
      <CartItems daddy={displayUsers} />
      {/* {displayUsers.map((items: any) => (
        <div>
          {items.id}
          {items.firstName}
          {items.lastName}
          {items.age}
          {items.isAdmin}
        </div>
      ))} */}
    </div>
  );
};

export default Product;
