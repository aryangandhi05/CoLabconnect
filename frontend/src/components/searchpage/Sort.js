import React from "react";
import "./Sort.css";
import styled from "styled-components";

const Sort = () => {
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="product-data">
        <p> Opportunities Available</p>
      </div>

      {/* 2nd column  */}
      {/* <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className="sort-selection--style">
            <option value="lowest">Mode(remote)</option>
            <option value="#" disabled></option>
            <option value="highest">Mode(work from home)</option>
          </select>
        </form>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 0rem;
  height: 65px;

  .product-data p {
    font-size: 25px;
    font-weight: 600;
  }

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      height: 15px;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.6rem;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;

    .sort-select--option {
      padding: 0rem 0;
      cursor: pointer;
      font-size: 15px;
      height: 3.5rem;
      padding: 15px;
    }
  }
`;

export default Sort;
