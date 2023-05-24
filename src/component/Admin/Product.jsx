import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdProduct } from "../../Redux/action";

const Product = ({product}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const Edituser = () => {
    console.log("usersssssssssss", product);
    dispatch(setAdProduct(product));
    // navigate("/admin/edituser", { replace: true });
  };

  const onDel = async () => {
    const { id } = product;
    const isNotThere = await fetch(
      "http://localhost:5000/products",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      }
    );
    let resp = await isNotThere.json();
    console.log("edit resp", resp);
    // notify("deleted");
  };



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:gap-10 gap-6 mx-28 my-5">
      <div className="border-gray-1h00 shadow-md shadow-slate-400 py-3 px-3 rounded-lg">
        <p># Order_16</p>
        <div className="mt-2">
          <div className="flex">
            <div className="w-[25%] px-3">
              <p className="w-20 h-20 rounded-full mx-5 bg-[#fa4612]  text-center pt-6 text-lg text-white">
                16
              </p>
              <p className="px-8 pt-2">Khakis dfgdrgerg</p>
            </div>
            <div className="flex justify-between px-3 w-full">
              <div className="text-base pt-5 leading-8">
                {/* <p>{`Name: ${product.name}`}</p>
                <p>{`Email: ${product.client}`}</p>
                <p>{`Phone: ${product.order}`}</p> */}
              </div>
              <div className="text-gray-600 pt-6">
                <FiEdit
                  className="text-blue-300 cursor-pointer mb-3"
                  size={34}
                />
                <RiDeleteBinLine
                  className="text-red-400 cursor-pointer"
                  size={34}
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="border-gray-100 shadow shadow-slate-300">
        <p># Order_16</p>
        <div className="">
          <div className="flex">
            <div className="w-[22%] px-3">
              <p className="w-20 h-20 rounded-full mx-5 bg-[#fa4612]  text-center pt-6 text-lg text-white">
                16
              </p>
              <p className="px-8">Khakis dfgdrgerg</p>
            </div>
            <div className="flex gap-28 self-end">
              <div className="text-base pt-5 leading-8">
                <p>{`Name:fgfgf`}</p>
                <p>{`Email:gfgfgfgfgf`}</p>
                <p>{`Phone: fgfgffgf`}</p>
              </div>
              <div className="text-gray-600 pt-4">
                <FiEdit
                  className="text-blue-300 cursor-pointer mb-3"
                  size={34}
                />
                <RiDeleteBinLine
                  className="text-red-400 cursor-pointer"
                  size={34}
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
