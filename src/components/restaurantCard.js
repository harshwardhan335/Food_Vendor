import { IMG_CDN_URL } from "../constants";
import { AiFillStar } from "react-icons/ai";
const RestrauntCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla,
}) => {
  const rateColor = avgRating >= 4 ? "bg-green-500" : "bg-orange-500";
  return (
    <div className=" pr-2 border-[1.5px] border-transparent hover:border-solid hover:border-black/10 hover:shadow-lg p-4 cursor-pointer">
      <div className="w-[16.2rem] min-h-[18rem] flex flex-col justify-start items-start gap-3 ">
        <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="flex flex-col justify-between items-start gap-1">
          <h3 className="font-semibold ">{name}</h3>
          <h6 className=" text-slate-600 text-[0.79rem] line-clamp-2">{cuisines.join(", ")}</h6>
        </div>

        <div className="flex flex-row gap-4 justify-between items-center w-full">
          <div className={`rating ${rateColor} px-[0.3rem] py-[0rem] flex flex-row items-center gap-1 font-open text-xs font-semibold text-white`}>
            <AiFillStar/><span className="number text-[0.8rem]">{avgRating}</span>
          </div>
          <div className="font-open text-xs font-semibold text-gray-500">
            {sla?.deliveryTime} MINS
          </div>
          <div className="costOfTwo font-open text-xs  font-semibold text-gray-500">
            ₹{costForTwo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;