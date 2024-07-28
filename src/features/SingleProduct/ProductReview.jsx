import { Button, Input } from "@mantine/core";
import { useState } from "react";
import { toast } from "react-toastify";

function ProductReview({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  return (
    <div>
      <p className="text-xl font-bold">Reviews</p>
      <div className="flex">
        <Input
          type="text"
          placeholder="Write your review here!!"
          className="flex-1 mr-4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Button
          onClick={() => {
            if (review == "") return;
            setReview("");
            setReviews([...reviews, review]);
            toast.success("Reviewed sent successfully!!");
          }}
          bg={"black"}
        >
          Send
        </Button>
      </div>
      {reviews.map((r) => {
        return (
          <div className="w-80 p-4 border-[1px] border-black rounded-lg mt-4">
            <span className="font-bold">Tran Hai Nam:</span> <span>{r}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductReview;
