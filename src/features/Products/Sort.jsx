import { Dropdown, Space } from "antd";
import styled from "styled-components";
import {
  AppstoreOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  DownOutlined,
  PercentageOutlined,
  SmileOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useState } from "react";
function Sort({
  isGridView,
  setListView,
  setGridView,
  totalElements,
  updateFilter,
}) {
  const [sortBy, setSortBy] = useState("Sort By");
  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={() => {
            updateFilter("sortBy", "price");
            updateFilter("sortDir", "des");
            setSortBy("High - Low Price");
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          High - Low Price
        </span>
      ),
      icon: <CaretDownOutlined />,
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            updateFilter("sortBy", "price");
            updateFilter("sortDir", "asc");
            setSortBy("Low - High Price");
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Low - High Price
        </span>
      ),
      icon: <CaretUpOutlined />,
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            updateFilter("sortBy", "discountRate");
            updateFilter("sortDir", "des");
            setSortBy(" Discount Rate");
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discount Rate
        </span>
      ),
      icon: <PercentageOutlined />,
    },
  ];
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={setGridView}
          className={`${isGridView ? "active" : null}`}
        >
          <AppstoreOutlined />
        </button>
        <button
          onClick={setListView}
          className={`${!isGridView ? "active" : null}`}
        >
          <UnorderedListOutlined />
        </button>
      </div>
      <p>{totalElements} products found</p>
      <hr />
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {sortBy}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
      color: var(--clr-white);
    }
    .active {
      background: var(--clr-white);
      color: var(--clr-black);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
