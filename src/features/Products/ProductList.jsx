import styled from "styled-components";
import NeubrutalismButton from "../../ui/NeubrutalismButton";
import { Divider } from "antd";

function ProductList({ products }) {
  function formatPrice(price) {
    const priceString = price.toString();
    const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice + " VND";
  }

  return (
    <Wrapper>
      {products.map((product) => {
        const {
          id,
          thumbnailUrl,
          name,
          price,
          shortDescription,
          originalPrice,
          discountRate,
        } = product;
        return (
          <>
            <article key={id}>
              <img src={thumbnailUrl} alt={name} />
              <div>
                <h4>{name}</h4>

                <div className="text-sm font-bold text-[#3f60d7]">
                  {originalPrice !== price && (
                    <div
                      className="text-[#C80036] flex items-center"
                      style={{ textDecorationLine: "none", marginBottom: 0 }}
                    >
                      {formatPrice(price)}{" "}
                      <div className="inline text-xs text-white bg-[#C80036] p-1 ml-1">
                        SALE {discountRate}%
                      </div>
                    </div>
                  )}
                  <p
                    style={{
                      textDecorationLine:
                        originalPrice !== price ? "line-through" : "none",
                    }}
                    className={
                      originalPrice !== price
                        ? "text-xs text-gray-400"
                        : "text-base"
                    }
                  >
                    {formatPrice(originalPrice)}
                  </p>{" "}
                </div>

                <p>{shortDescription}...</p>
                <div className="flex justify-end">
                  <NeubrutalismButton text="BUY ME" />
                </div>
              </div>
            </article>
            <Divider className="bg-black" />
          </>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    /* width: 300px; */
    /* height: 200px; */
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ProductList;
