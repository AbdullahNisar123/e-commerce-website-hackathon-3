import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function ComparisonBody() {
  return (
    <div className="px-[53px]">
      <div className="flex gap-3">
        <div className="w-[25%] flex flex-col gap-[20px]  items-center">
          <h3 className="font-medium text-[28px]">
            Go to Product page for more Products
          </h3>
          <Link href="/Shop" className="font-medium text-[20px] text-[#727272] border-b border-b-[#727272] pb-1">
            View More
          </Link>
        </div>
        <div className="w-[25%] flex flex-col gap-1  items-center">
          <div className="w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]">
            <Image
              src="/images/Asgaard-sofa-3.png"
              width={200}
              height={10}
              alt="sofa"
            ></Image>
          </div>
          <div className="">
            <h3 className="font-medium text-[24px]">Asgaard Sofa</h3>
            <p className="text-[18px]">Rs. 250,000.00</p>
            <div className="flex items-center gap-2">
              <p className="text-[18px]">4.7</p>
              <div className="text-[#FFC700] flex">
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="carbon:star-half" />
              </div>
              <p className="pl-[22px] py-[5px] text-[#9F9F9F] border-l border-l-[#9F9F9F] text-[13px]">
                250 Review
              </p>
            </div>
          </div>
        </div>
        <div className="w-[25%] flex flex-col gap-1  items-center">
          <div className="w-[280px] h-[177px] flex justify-center items-center bg-[#F9F1E7] rounded-[10px]">
            <Image
              src="/images/Asgaard-sofa-3.png"
              width={200}
              height={10}
              alt="sofa"
            ></Image>
          </div>
          <div className="">
            <h3 className="font-medium text-[24px]">Asgaard Sofa</h3>
            <p className="text-[18px]">Rs. 250,000.00</p>
            <div className="flex items-center gap-2">
              <p className="text-[18px]">4.7</p>
              <div className="text-[#FFC700] flex">
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-filled" />
                <Icon icon="carbon:star-half" />
              </div>
              <p className="pl-[22px] py-[5px] text-[#9F9F9F] border-l border-l-[#9F9F9F] text-[13px]">
                250 Review
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[25%] items-center flex flex-col  h-[177px] justify-center">
          <div className=" w-[240px]">
            <h3 className="text-[24px] font-semibold">Add A Product</h3>
            <select
              name="Commpare products"
              id=""
              className="w-full px-4 py-2 text-white text-[14px] font-semibold bg-[#B88E2F] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            >
              <option value="" disabled selected>
                Choose a Product
              </option>
              <option value="Product 1">Product 1</option>
              <option value="Product 1">Product 2</option>
              <option value="Product 1">Product 3</option>
              <option value="Product 1">Product 4</option>
              <option value="Product 1">Product 5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto py-5">
        <table className="table-auto w-full text-center border-collapse border-t border-t-[#E8E8E8]">
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left border-r border-r-[#E8E8E8]">
                Price
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                Rp 2.800.000
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                Rp 2.500.000
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Sale Price
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                No sale
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                Rp 1.250.000
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Category
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Brand
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            {/* Additional Rows */}
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Material
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Dimensions
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Weight
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Rating
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Stock
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                Out of stock
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                Out of stock
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2 font-medium  text-left  border-r border-r-[#E8E8E8]">
                Warranty
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                N/A
              </td>
              <td className="w-1/4 px-4 py-2 "></td>
            </tr>
            <tr>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]"></td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                <button className="text-[16px] font-semibold text-white bg-primary px-[52px] py-[12px]">
                  Add to Cart
                </button>
              </td>
              <td className="w-1/4 px-4 py-2  border-r border-r-[#E8E8E8]">
                <button className="text-[16px] font-semibold text-white bg-primary px-[52px] py-[12px]">
                  Add to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
