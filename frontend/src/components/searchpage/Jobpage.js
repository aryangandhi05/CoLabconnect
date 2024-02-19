// In your JobPage component or any other parent component
import React, { useState } from 'react';
import Filtersection from './Filtersection';
import Listview from './Listview';

const JobPage = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/jobs'); 
        setAllJobs(response.data);
        console.log('Filtered Jobs in JobPage:', filteredJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);


// const handleApplyFilters = (filters) => {
//     // Handle filtering logic if needed
//     // setFilteredJobs(filteredData); // Update filtered jobs if necessary
//     const filteredData = allJobs.filter((job) => {
//       // Your custom filtering conditions based on filters object
//       return (
//         job.Topic.includes(filters.text) &&
//         job.Profession === filters.role &&
//         job.Workplace === filters.location &&
//         job.Stipend <= filters.stipend
//       );
//     });
//     setFilteredJobs(filteredData);
//   };
const handleApplyFilters = async (filters) => {
  console.log('Filters:', filters);
  try {
    const response = await axios.post('/filter', filters);
    console.log('Filtered Jobs:', response.data);
    setFilteredJobs(response.data);
  } catch (error) {
    console.error('Error filtering jobs:', error);
  }
};

//   return (
//     <div>
//       {/* Pass the handleApplyFilters function as the onFilterSubmit prop */}
//       <Filtersection onFilterSubmit={handleApplyFilters} />

//       {/* Render the Listview component */}
//       <Listview filteredJobs={filteredJobs} />
//     </div>
//   );
// };
return (
  <div>
    <Filtersection onFilterSubmit={handleApplyFilters} />
    <Listview jobs={filteredJobs.length > 0 ? filteredJobs : allJobs} />
  </div>
);
};


export default JobPage;
