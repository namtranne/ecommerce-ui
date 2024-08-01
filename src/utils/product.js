export function formatPrice(price) {
  const priceString = price.toString();
  const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedPrice + " VND";
}
