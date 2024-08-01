import { Breadcrumb } from "antd";
import { useCategoriesProductsPage } from "../../hooks/useCategory";
import styles from "./css/bubble.module.css";

function BreadCrumbs() {
  const { isLoading, data, error } = useCategoriesProductsPage();

  if (isLoading) {
    return <BreadCrumbWrapper />;
  }

  const baseUrl = window.location.origin;
  const { currentCategory } = data;
  const items = [
    {
      title: <BreadCrumbText text="Home" />,
    },
    {
      title: <BreadCrumbText text="Shop" href={`${baseUrl}/products/0`} />,
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
          href={`${baseUrl}/products/` + category.id}
        />
      ),
    });
  };

  addCategories(currentCategory);

  return (
    <BreadCrumbWrapper>
      <Breadcrumb
        className="text-black"
        separator={<span className="text-2xl font-thin text-black">{"/"}</span>}
        items={items}
      />
    </BreadCrumbWrapper>
  );
}

const BreadCrumbText = ({ text, href }) => {
  return (
    <a href={href} className="text-black text-2xl font-thin">
      <BubbleText text={text} />
    </a>
  );
};

const BreadCrumbWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center text-black w-full p-2 px-4 bg-[#F7F7F7]">
      {children}
    </div>
  );
};

const BubbleText = ({ text }) => {
  return (
    <h2 className="text-center text-2xl font-thin text-black">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BreadCrumbs;
