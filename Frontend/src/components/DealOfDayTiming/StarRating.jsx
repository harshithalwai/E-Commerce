import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <AiFillStar className="text-yellow-400" size={16} />
          ) : (
            <AiOutlineStar className="text-gray-300" size={16} />
          )}
        </span>
      ))}
    </div>
  );
}
