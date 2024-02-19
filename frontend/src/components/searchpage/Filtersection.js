import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from './Button';
import { GlobalStyle } from '../mainpage/GlobalStyles';


const Filtersection = ({jobs , setJobs}) => {
  const [filters, setFilters] = useState({
    text: '',
    role: '',
    location: '',
    stipend: 1000,
  });

  useEffect(() => {
    // console.log('After Role Update - Filters:', filters);
  }, [filters]);
  // const [filteredJobs, setFilteredJobs] = useState([]);
  

  const [filteredJobs, setFilteredJobs] = useState([]);
  const updateFilterValue = (filterName, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [filterName]: value,
      };
      
      // console.log('Updated Filters:', updatedFilters);
      
      return updatedFilters;
    });
  };
  

  const handleFilterSubmit = async () => {
//     console.log('Before Request - Filters:', filters);
//   try {
//     const response = await axios.post('/filter', filters);
//     console.log('After Request - Filtered Jobs:', response.data);
//     setFilteredJobs(response.data);
//   } catch (error) {
//     console.error('Error filtering jobs:', error);
//   }
// };
try {
  // Only include 'role' in the data if it has a value
  const requestData = {
    text: filters.text,
    location: filters.location,
    role: filters.role,
    stipend: filters.stipend,
  };

  if (filters.role) {
    requestData.role = filters.role;
  }

  const response = await axios.post('/filter', requestData);
  
  console.log("before response filtered data",filteredJobs)
  console.log('After Request - Filtered Jobs:', response.data);
  // setFilteredJobs(response.data.map);
  response.data.map((res)=> filteredJobs.push(res))
  setFilteredJobs([])

  setJobs([...filteredJobs])
  // filteredJobs.map((fil)=> jobs.push(fil))
  // jobs.push(...filteredJobs);

  console.log("setting jobs after filter",jobs)

  console.log("setting filtered jobs",filteredJobs)
} catch (error) {
  console.error('Error filtering jobs:', error);
}
};
const handleRoleButtonClick = (role) => {
  // Toggle the active state of the selected role
  console.log('Role Clicked:', role);
  setFilters((prevFilters) => ({
    ...prevFilters,
    role: prevFilters.role === role ? '' : role,
  }), () => {
    console.log('After Role Update - Filters:', filters);
  });
 };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* <div className="filter-search">
          <form>
            <input
              type="text"
              name="text"
              placeholder="Search"
              value={filters.text}
              onChange={(e) => updateFilterValue('text', e.target.value)}
            />
          </form>
        </div> */}
        {/* <div className="filter-inplacesearch">
          GO!Get the Jobbb...
        </div> */}
        <div className="filter-search">
  <form>
    <input
      type="text"
      name="text"
      placeholder="Search"
      value={filters.text}
      onChange={(e) => updateFilterValue('text', e.target.value)}
    />
  </form>
</div>

        <div className="filter-category">
          <h3><b>ROLES</b></h3>
          <div>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Frontend Developer' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('Frontend Developer')}}
            >
              Frontend Developer
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Backend Developer' ? 'active' : ''}
              onClick={() => handleRoleButtonClick('Backend Developer')}
            >
              Backend Developer
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Full Stack Developer' ? 'active' : ''}
              onClick={() => handleRoleButtonClick('Full Stack Developer')}
            >
              Full Stack Developer
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Hackathon' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('Hackathon')}}
            >
              Hackathon
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'UI/UX Developer' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('UI/UX Developer')}}
            >
              UI/UX Developer
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Software Developer' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('Software Developer')}}
            >
              Software Developer
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Sales Analyst' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('Sales Analyst')}}
            >
              Sales Analyst
            </button>
            <button
              type="button"
              name="domain"
              className={filters.role === 'Research Analyst' ? 'active' : ''}
              onClick={() => {
                // console.log('Button clicked!');
                handleRoleButtonClick('Research Analyst' )}}
            >
              Research Analyst
            </button>
          </div>
        </div>

        <div className="filter-company">
          <h3><b>LOCATION</b></h3>
          <form action="#">
            <select
              name="location"
              id="location"
              className="filter-company--select"
              value={filters.location}
              onChange={(e) => updateFilterValue('location', e.target.value)}
            >
              <option>Delhi</option>
              <option>Noida</option>
              <option>Gurgaon</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </form>
        </div>

        <div className="filter_price">
          <h3><b>STIPEND</b></h3>
          <input
            type="range"
            name="stipend"
            value={filters.stipend}
            min={1000}  // Set the minimum stipend value
            max={100000} // Set the maximum stipend value
            step={1000}
            onChange={(e) => updateFilterValue('stipend', parseInt(e.target.value))}
          />
          <value>INR {filters.stipend}</value>
        </div>

        <div className="filter-clear">
          <Button className="btn" onClick={() => setFilters({ text: '', role: '', location: '', stipend: 0 })}>
            Clear Filters
          </Button>
        </div>

        <Button className="btn" onClick={handleFilterSubmit}>
          Apply Filters
        </Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width:70%;
  height:110vh;
  padding:20px 30px;
  box-shadow: 0 0 25px rgb(192, 191, 191);
  border:none;

  margin-left:30px;

  h3 {
    padding: 2rem 0;
    font-size: bold;
    font-size:20px;
  }
  .filter-search {
    form {
      margin-bottom: 0.5px; 
      height:3rem;/* Adjust margin as needed */
    }
  
    .search-input {
      width: 50%;
      // height:.2rem;
      padding: 5px;
      font-size: 16px;
      border: 3px solid #ccc;
      border-radius: 5px;
      outline: none;
  
      &:focus {
        border-color: #007bff; /* Change the border color on focus */
      }
    }
  }

  // .filter-inplacesearch {
  //   font-size: 3.5rem;
  //   color: purple;
  //   overflow: hidden; /* Hide overflowing content */
  //   white-space: nowrap; /* Prevent text from wrapping */
  //   position: relative; /* Set position relative for pseudo-element */
  // }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      button {
        border: none;
        background-color: transparent;
        font-size:15px;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filtersection;