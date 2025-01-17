import React from "react";
import Input from "../UI/Input";
import { currencyFormatter } from "../../util/formatting";

const Checkout = ({ loading, onSubmit, totalPrice, onClose }) => {
  const formControls = [
    {
      label: "Full name",
      id: "fullname",
      name: "name",
    },
    {
      label: "Email address",
      id: "emailId",
      name: "email",
      type: "email",
    },
    {
      label: "Street",
      id: "street",
      name: "street",
    },
    {
      id: "address2",
      groups: [
        {
          label: "Postal Code",
          id: "zip",
          name: "postal-code",
        },
        {
          label: "City",
          id: "city",
          name: "city",
        },
      ],
    },
  ];

  return (
    <form onSubmit={onSubmit}>
      <h2>Checkout</h2>
      <p>Total amount: {currencyFormatter.format(totalPrice)}</p>

      {formControls.map((control) => (
            control.groups ? (
              <div className="control-row" key={control.id}>
                {control.groups.map((group) => (
                  <Input key={group.id} {...group} disabled={loading} />
                ))}
              </div>
            ): (<Input key={control.id} {...control} disabled={loading} />)
        ))}

      <div className="modal-actions">
        <button className="text-button" type="reset" onClick={onClose}>
          Close
        </button>
        <button className="button" type="submit" disabled={loading}>
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
