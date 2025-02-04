export const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First Name",
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }], // Reference to product document
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "TotalPrice",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      initialValue: "pending",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" },
        ],
        layout: "radio",
      },
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime", 
    },
  ],
};
