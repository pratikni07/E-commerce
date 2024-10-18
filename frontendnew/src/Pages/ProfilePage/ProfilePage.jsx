import { Button } from "@nextui-org/button";
import React from "react";

import { Link } from "react-router-dom";
import {
  Pencil,
  ChevronRight,
  ShoppingBag,
  Heart,
  MapPin,
  TicketPercent,
  Settings2,
  Headset,
} from "lucide-react";
import profileImg from "@/assets/profiles/4.png";
const ProfilePage = () => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto">
      <div className="">
        <h1 className="text-2xl lg:text-3xl font-bold mb-9 mt-8 textColor ">
          WELCOME PRATIK ...{" "}
        </h1>
      </div>

      <div className="border-2 p-3 border-[#8E3E63]-800 m-auto mb-[50px] lg:mb-[150px] lg:w-[80%]">
        <div className="flex justify-between mb-7">
          <div className="flex">
            <img
              src={profileImg}
              className="rounded-md w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] "
            />

            <div className="ml-4 lg:ml-9">
              <h1 className="text-[20px] font-bold text-[#8E3E63]">
                Pratik Nikat
              </h1>
              <p>
                <span className="font-bold">Address : </span> Wadkar Colony
                Baramati , Maharashtra , 413102{" "}
              </p>
              <p>
                <span className="font-bold">Mobile : </span> 7447329424{" "}
              </p>
              <p>
                <span className="font-bold">E-mail : </span>{" "}
                pratiknikat07@gmail.com{" "}
              </p>
            </div>
          </div>
          <div>
            <p className=" bg-[#8E3E63] text-white  p-2 rounded-sm cursor-pointer hover:bg-[#6f2b4b]">
              {" "}
              <Pencil className="text-[10px]" />
            </p>
          </div>
        </div>
        <hr />
        <div className="m-auto mt-8 flex flex-col gap-2">
          <Link to="/orders">
            <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
              <div className="flex">
                <ShoppingBag className="text-3xl" />
                <p className="ml-4 text-[16px] font-bold ">Orders</p>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </Link>
          <Link to="/useraddress">
            <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
              <div className="flex">
                <MapPin className="text-3xl" />
                <p className="ml-4 text-[16px] font-bold ">Address</p>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
              <div className="flex">
                <Heart className="text-3xl" />
                <p className="ml-4 text-[16px] font-bold ">Wishlist</p>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </Link>
          <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
            <div className="flex">
              <TicketPercent className="text-3xl" />
              <p className="ml-4 text-[16px] font-bold ">Discount</p>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
          <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
            <div className="flex">
              <Headset className="text-3xl" />
              <p className="ml-4 text-[16px] font-bold ">Help Conter</p>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
          <div className="flex justify-between bg-slate-100 p-4 rounded-sm cursor-pointer  text-slate-700">
            <div className="flex">
              <Settings2 className="text-3xl" />
              <p className="ml-4 text-[16px] font-bold ">Setting</p>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
