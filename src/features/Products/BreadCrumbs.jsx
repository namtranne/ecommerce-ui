import { Breadcrumb } from "antd";
import { useCategoriesProductsPage } from "../../hooks/useCategory";

function BreadCrumbs() {
  const { isLoading, data, error } = useCategoriesProductsPage();

  if (isLoading) {
    return <BreadCrumbWrapper />;
  }

  const { currentCategory } = data;
  const items = [
    {
      title: <BreadCrumbText text="Home" />,
    },
    {
      title: (
        <BreadCrumbText
          text="Shop"
          href={"http://localhost:5174/products/0/24/1"}
        />
      ),
    },
  ];

  const addCategories = (category) => {
    if (!category) return;
    if (category.parentCategory) {
      addCategories(category.parentCategory);
    }
    items.push({
      title: (
        <BreadCrumbText
          text={category.name}
          href={"http://localhost:5174/products/" + category.id + "/24/1"}
        />
      ),
    });
  };

  addCategories(currentCategory);
  return (
    <BreadCrumbWrapper>
      <Breadcrumb
        className="text-white"
        separator=<span className="text-white">{">"}</span>
        items={items}
      />
    </BreadCrumbWrapper>
  );
}

const BreadCrumbText = ({ text, href }) => {
  return (
    <a href={href}>
      <p className="text-white">{text}</p>
    </a>
  );
};

const BreadCrumbWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center bg-black text-white w-full p-2 px-4">
      <div>{children}</div>
      <p className="text-2xl font-bold mt-2 mb-0">Shop</p>
    </div>
  );
};

export default BreadCrumbs;
