import { Button, Input } from "@mantine/core";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAddProductReview, useProductReview } from "../../hooks/useProduct";

function ProductReview({ productId }) {
  const { data: reviews, isLoading } = useProductReview();
  const { addProductReview, isLoading: isAddingProduct } =
    useAddProductReview();
  const [review, setReview] = useState("");
  const handleAddReview = () => {
    if (review == "") return;
    const data = { content: review, productId: productId };
    setReview("");
    addProductReview(data);
  };

  if (isLoading) {
    return <div>Loading review...</div>;
  }

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
          onClick={handleAddReview}
          bg={"black"}
          disabled={isAddingProduct}
        >
          {isAddingProduct ? "Adding review..." : "Send"}
        </Button>
      </div>
      {reviews.map((r) => {
        return (
          <div className="w-80 p-4 border-[1px] border-black rounded-lg mt-4 w-full">
            <span className="font-bold">{r.reviewerName}</span>{" "}
            <span>{r.content}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductReview;
