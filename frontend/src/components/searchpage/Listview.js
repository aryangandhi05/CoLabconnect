import React , { useState, useEffect } from 'react';
import axios from 'axios';
import "../../App.css";
import "./Listview.css";
import Navbar from './Snav';
import styled from "styled-components";
import { Link } from 'react-router-dom';
//import FormatPrice from "../Helpers/FormatPrice";
import login1 from "../../images/logo_fly.png";
import {Button} from "./Button";
import FilterSection from './Filtersection';
import { GlobalStyle } from "../mainpage/GlobalStyles";
// import { NavLink } from "react-router-dom";

const Listview = ({setJobs , jobs}) => {
  console.log('Listview rendered');
  // const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  console.log("filetered jobs ,",filteredJobs)
  console.log("set jobs ,",setJobs)

  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/jobs'); // Adjust the route based on your Express setup
        setJobs(response.data);
        
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);
  useEffect(() => {
    // Update jobs when filteredJobs change
    // console.log('Filtered Jobs updated:', filteredJobs);
    setJobs(filteredJobs);
  }, [filteredJobs]);

  const handleFilterJobs = async (filters) => {
    console.log('Filters:', filters);
    try {
      const response = await axios.post('/filter', filters);
      console.log('Filtered Jobs gjaksjgs:', response.data);
      response.data.map((res)=> filteredJobs.push(res))
      console.log("filtered jobs after",filteredJobs)
    } catch (error) {
      console.error('Error filtering jobs:', error);
    }
  };
  console.log("set Jobs",jobs)
  // const handleApplyFilters = async (filters) => {
  //   try {
  //     const response = await axios.post('/filter', filters);
  //     setFilteredJobs(response.data);
  //   } catch (error) {
  //     console.error('Error filtering jobs:', error);
  //   }
  // };

//   return (
//     <>
//     <GlobalStyle/>
//     <div className="section">
//       <div className="contain grid">
//         {/* {products.map((curElem) => {
//           const { id, name, image, price, description } = curElem; */}
//           {/* return ( */}
//             <div className="card grid grid-two-column">
//               <figure className='fig'>
//                 <img className='imgs' src={login1} alt="hi" />
//               </figure>

//               <div className="card-data">
//                 <h3><br/>Fly High</h3>
//                 <p>
//                   {/* <FormatPrice price={price} /> */}
//                 </p>
//                 <p>Frontend Developer <br/>Work from Home <br/>Delhi ...
//                 </p>

//                 {/* <NavLink to={`/singleproduct/${id}`} className="btn-main"> */}
//                   <Button className="btn">Read More</Button>
//                 {/* </NavLink> */}
//               </div>
//             </div>
//           {/* ); */}
//         {/* })} */}
//       </div>
//     </div>
//     </>
//   );
// };
return (
  <>
    <GlobalStyle />
    {/* <FilterSection onApplyFilters={handleApplyFilters} /> */}
    <ListContainer className="section">
    {/* <FilterSection onApplyFilters={handleApplyFilters} /> */}
    {/* <Button onClick={() => handleFilterJobs({ location: 'Bangalore' })}>
          Filter Jobs in Bangalore
        </Button> */}
      <div className="contain grid">
        {jobs.map((job) =>  (
          //  <Link to={`/job/${job.user}`}>
           <Link to={`/job/${job._id}`}>
          <JobCard key={job._id} className="card grid grid-two-column">
            <JobImage className='fig'>
              <img className='imgs' src={login1} alt="Company Logo" />
            </JobImage>

            <div className="card-data">
              <h3><br/>{job.Topic}</h3>
              <p><b>{job.Name}</b></p>
              <p>{job.Profession} at {job.Workplace}</p>
              <p>{job.Requirepost}</p>
              <p><b>INR {job.Stipend}</b></p>
              {/* <Link to="/readmore">
              <button className='btn_o'><NavLink to="/ssignup">Know More</NavLink></button>
             </Link> */}
              {/* <NavLink to={`/job/${job._id}`} className="btn_o">
               Know More
              </NavLink> */}
              {/* <NavLink to={`/job/${job._id}`} className="btn_o"> */}
              {/* <Link to={`/job/${job.user}`}>
                  Know More
                </Link> */}
                {/* </NavLink> */}
              {/* <Button className="btn">Read More</Button> */}
            </div>
          </JobCard>
          </Link>
        ))}
      </div>
    </ListContainer>
  </>
);
};
const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const JobCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const JobImage = styled.figure`
  overflow: hidden;
  height: 230px;
  margin: 0;
`;

// const Wrapper = styled.section`

//   .contain {
//     max-width: 150rem;
//   }


//   .grid {
//     gap: 3.2rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
    
//   }`;

export default Listview;
