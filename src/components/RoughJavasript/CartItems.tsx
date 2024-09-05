import React from "react";
interface Info {
  daddy: any[];
}

const CartItems: React.FC<Info> = ({ daddy }) => {
  return (
    <div>
      {daddy.map((items: any) => (
        <div>{items.lastName}</div>
      ))}
    </div>
  );
};

export default CartItems;
