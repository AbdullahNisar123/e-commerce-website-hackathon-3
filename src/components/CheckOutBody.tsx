"use client";
import { useCart } from "@/context/CartContext";
import { useOrder } from "@/context/OrderContext";
import Link from "next/link";

export default function CheckOutBody() {
  
  const { formValues, formErrors, handleInputChange, handlePlaceOrder,loading } =
    useOrder();
  const { cartItems, totalPrice, subtotalPrice } = useCart();
  return (
    <div className="md:py-[63px] md:px-[100px] px-[20px] py-[30px]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[608px] md:py-[35px] md:px-[74px] text-[16px] text-black font-medium gap-[36px] flex flex-col">
          <h3 className="text-[36px] font-semibold place-self-center md:place-self-start">
            Billing details
          </h3>
          <div className="gap-[31px] flex flex-col md:flex-row">
            <label className="flex flex-col gap-[22px]">
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[211px] w-full h-[75px]"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <p className="text-[#FF0000]">First Name is required.</p>
              )}
            </label>
            <label className="flex flex-col gap-[22px]">
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[211px] w-full h-[75px]"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <p className="text-[#FF0000]">Last Name is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Company Name (Optional)</p>
              <input
                type="text"
                name="companyName"
                onChange={handleInputChange}
                value={formValues.companyName}
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Country / Region</p>
              <div className=" px-[30px] py-[25px] md:w-[453px] w-full h-[75px] border border-[#9F9F9F] rounded-[10px]">
                <select
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  className="w-full h-full text-[#9F9F9F]"
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              {formErrors.country && (
                <p className="text-[#FF0000]">Country is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Street address</p>
              <input
                type="text"
                name="address"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="text-[#FF0000]">Address is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Town / City</p>
              <input
                type="text"
                name="city"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
                value={formValues.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className="text-[#FF0000]">City is required.</p>
              )}
            </label>
          </div>
          {/* <div>
            <label className="flex flex-col gap-[22px]">
              <p>Province</p>
              <div className=" px-[30px] py-[25px] md:w-[453px] w-full h-[75px] border border-[#9F9F9F] rounded-[10px]">
                <select name="" id="" className="w-full h-full text-[#9F9F9F]">
                  <option value="WesternProvince">Western Province</option>
                </select>
              </div>
            </label>
          </div> */}
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>ZIP code</p>
              <input
                type="text"
                name="zipCode"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
              {formErrors.zipCode && (
                <p className="text-[#FF0000]">Zip Code is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Phone</p>
              <input
                type="text"
                name="phone"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="text-[#FF0000]">Phone number is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <p>Email address</p>
              <input
                type="text"
                name="email"
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px]"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-[#FF0000]">Email address is required.</p>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-[22px]">
              <input
                type="text"
                name="additionalInfo"
                onChange={handleInputChange}
                value={formValues.additionalInfo}
                className="border border-[#9F9F9F] rounded-[10px] md:w-[453px] w-full h-[75px] px-[30px] py-[25px]"
                placeholder="Additional information"
              />
            </label>
          </div>
        </div>

        <div className="md:py-[87px] md:px-[37px] md:w-[608px] w-full py-[50px] flex flex-col items-center gap-[40px]">
          <div className="">
            <div className="flex flex-col gap-[22px] pb-[33px]">
              <div className="flex justify-between text-[24px] font-medium text-black ">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              {cartItems.map((item) => (
                <div
                  className="flex justify-between text-[16px]"
                  key={item._id}
                >
                  <p className="font-normal text-[#9F9F9F]">{item.title}</p>
                  <p className="font-light text-black">
                    Rs. {item.price.toFixed(3)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between text-[16px] text-black ">
                <p className="font-normal">Subtotal</p>
                <p className="font-light">Rs. {subtotalPrice.toFixed(3)}</p>
              </div>

              <div className="flex justify-between">
                <p className="font-normal text-[16px] text-black">Total</p>
                <p className="font-bold text-[24px] text-[#B88E2F]">
                  Rs. {totalPrice.toFixed(3)}
                </p>
              </div>
            </div>
            <div className="pt-[22px] border-t border-t-[#D9D9D9]">
              <div className="gap-[25px] flex flex-col">
                <label className="flex flex-col gap-[11px]">
                  <div className="flex gap-[15px] items-center">
                    <div className="h-[14px] w-[14px] bg-black rounded-full"></div>
                    <p className="text-[16px] font-normal">
                      Direct Bank Transfer
                    </p>
                  </div>
                  <p className="text-[16px] font-light text-[#9F9F9F]">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </label>

                <div className="gap-[11px] flex flex-col text-[16px] text-[#9F9F9F] font-medium">
                  <label className="flex gap-[15px]">
                    <input
                      type="radio"
                      name="payment"
                      value="Direct Bank Transfer"
                      checked={formValues.payment === "Direct Bank Transfer"}
                      onChange={handleInputChange}
                    />
                    <p>Direct Bank Transfer</p>
                  </label>
                  <label className="flex gap-[15px]">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash On Delivery"
                      checked={formValues.payment === "Cash On Delivery"}
                      onChange={handleInputChange}
                    />
                    <p>Cash On Delivery</p>
                  </label>
                  {formErrors.payment && (
                    <p className="text-[#FF0000]">Payment is required.</p>
                  )}
                </div>
                <div className="text-black text-[16px] font-light">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <Link href="#" className="font-bold">
                      privacy policy.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-fit h-fit py-[17px] px-[102px] border border-black rounded-[15px]"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
