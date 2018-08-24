import React from "react";

const Ingredient = props => (
  <div>
      <label>
        Name:
        <input onChange={props.onChange} name="title" type="text" value={props.title} />
      </label>

      <label>
        Quantity:
        <input onChange={props.onChange} name="quantity" type="text" value={props.quantity} />
      </label>

      <label>
        Measurement:
        <input onChange={props.onChange} name="measurement" type="text" value={props.measurement} />
      </label>
  </div>
);

export default Ingredient;
