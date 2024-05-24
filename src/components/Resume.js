import React, { useState } from 'react';
import './Resume.css';
import DiamondResortsLogo from "../assets/images/drlogo4.png"
import TomorrowEnergyLogo from "../assets/images/te-logo-3.png"

const Resume = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(resumeItems);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  
    const filtered = resumeItems.filter(item => {
      // Convert company name to lowercase string
      const companyNameText = typeof item.companyName === 'string' ? item.companyName.toLowerCase() : '';
  
      // Convert description to lowercase string
      const descriptionText = typeof item.description === 'string' ? item.description.toLowerCase() : extractTextFromDescription(item.description).toLowerCase();
  
      return (
        item.title.toLowerCase().includes(value) ||
        companyNameText.includes(value) ||
        descriptionText.includes(value) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(value)) ||
        isYearInRange(item.years, value)
      );
    });
  
    setFilteredItems(filtered);
  };
  
  // Function to recursively extract text from JSX elements
  const extractTextFromDescription = (element) => {
    if (typeof element === 'string') {
      return element;
    }
  
    if (Array.isArray(element)) {
      return element.map(extractTextFromDescription).join(' ');
    }
  
    if (element.props.children) {
      return extractTextFromDescription(element.props.children);
    }
  
    return '';
  };
  
  

  
  

  const isYearInRange = (years, searchYear) => {
    const yearRange = years.toString().split('-');
    if (yearRange.length === 2) {
      const startYear = parseInt(yearRange[0]);
      const endYear = parseInt(yearRange[1]);
      const searchYearNum = parseInt(searchYear);
      return searchYearNum >= startYear && searchYearNum <= endYear;
    }
    return years.toString().includes(searchYear);
  };

  return (
    <div className="resume-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for any word or year..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="resume-list">
        {filteredItems.map((item, index) => (
          <div key={index} className="resume-item">
            <img src={item.logo} alt="Logo" className="job-logo" />
            <h3>{item.title}</h3>
            <p className="company">
              <a href={item.companyLink}>{item.companyName}</a> | {item.location}
            </p>
            <p className="years">{item.years}</p>
            <div className="description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const resumeItems = [
  {
    title: 'IT Manager',
    companyName: 'Tomorrow Energy',
    location: 'Houston, TX',
    companyLink: 'https://tomorrowenergy.com',
    years: '2016-Present',
    description: (
      <ul>
        <li><strong>Leadership:</strong> Managed three teams: IT DevOps, Networking/Cloud Engineering, and Help Desk.</li>
        <li><strong>Process Improvement:</strong> Transitioned processes from Excel to a proprietary, custom-built solution, supporting:
          <ul>
            <li>Entry into 50+ new markets</li>
            <li>Commission pay file management for Sales Teams</li>
            <li>Custom APIs for third-party development acceleration</li>
            <li>Rate, promo code, and territory management</li>
            <li>Website integration for dynamic updates</li>
          </ul>
        </li>
        <li><strong>Office Relocation:</strong> Orchestrated three office moves, including Las Vegas to Houston, optimizing and reconfiguring IDF rooms with new equipment.</li>
        <li><strong>System Migrations:</strong> Successfully migrated the company across two billing systems with zero data loss; integrated processes with two credit bureaus.</li>
        <li><strong>Cloud Optimization:</strong> Migrated AWS servers, reducing monthly costs by 50%.</li>
        <li><strong>Active Directory Streamlining:</strong> Consolidated from three ADs to one and implemented user self-service portals for password resets.</li>
        <li><strong>Solutioning:</strong> Led many projects. Recent example: proposed and implemented methods to double Renewal rate of contracts and reduce time from 7 minutes to 30 seconds.</li>
      </ul>
    ),
    keywords: ['javascript', 'react', 'web development','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    logo: TomorrowEnergyLogo, // Path to logo image
  },
  {
    title: 'Business Analyst (Contract)',
    companyName: 'Diamond Resorts',
    location: 'Las Vegas, NV',
    companyLink: 'https://www.diamondresortsandhotels.com/',
    years: '2014-2016',
    description: (
      <ul>
        <li>Spearheaded cross-functional projects, driving process improvement initiatives to enhance efficiency and cost-effectiveness.</li>
        <li>Provided strategic leadership in managing multiple projects, fostering agile methodologies to adapt to changing requirements and priorities.</li>
        <li>Acted as a key liaison between departments, facilitating clear communication and collaboration to ensure successful project implementation.</li>
      </ul>
    ),
    keywords: ['leadership', 'javascript', 'react','2014','2015','2016'],
    logo: DiamondResortsLogo, // Path to logo image
  },
  // Add more resume items as needed
];

export default Resume;
