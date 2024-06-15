import React, { useState, useEffect } from 'react';
import './Resume.css';
import DiamondResortsLogo from "../assets/images/drlogo4.png";
import TomorrowEnergyLogo from "../assets/images/te-logo-3.png";
import SimpsonCollegeLogo from "../assets/images/simpson-icon.ico";
import Web2024Logo from "../assets/images/web2024v1.png";
import WebCert from "../assets/images/2024-web-3-bootcamp-certificate-of-completion.jpg";
import PMPCert from "../assets/images/PMP-Cert-JMather-2023.png";
import ModisLogo from "../assets/images/modis-adecco-group.png";
import FMHLogo from "../assets/images/fmhlogo.png";
import ITALogo from "../assets/images/ita-logo.png";
import MarshLogo from "../assets/images/marsh-logo-2.png";
import PMPLogo from "../assets/images/pmi-logo.png";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const [zoomedImage, setZoomedImage] = useState(null); // Track which image is zoomed

  const handleZoom = (image) => {
    setZoomedImage(image);
  };

  const handleRequestClose = () => {
    setZoomedImage(null);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(resumeItems);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = resumeItems.filter(item => {
      const companyNameText = typeof item.companyName === 'string' ? item.companyName.toLowerCase() : '';
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

  const renderSection = (title, items) => {
    const filteredItemsInSection = items.filter(item => filteredItems.includes(item));
    if (filteredItemsInSection.length === 0) {
      return null;
    }

    return (
      <div className="resume-section">
        <h2 className='h2Resume'>{title}</h2>
        {filteredItemsInSection.map((item, index) => {
          if (item.category !== title) {
            return null;
          }
          return (
            <div key={index} className="resume-item">
              <img src={item.logo} alt="Logo" className="job-logo" />
              <h3>{item.title}</h3>
              <p className="company">
                <a href={item.companyLink}>{item.companyName}</a> | {item.location}
              </p>
              <p className="years">{item.years}</p>
              <div className="description">{item.description}</div>
              {title === 'Certificates' && item.title === 'The Complete 2024 Web Development Bootcamp' && (
                <img
                  style={{ width: "100%", height: "auto", textAlign: "center" }}
                  // zoomed={zoomedImage === WebCert}
                  src={WebCert}
                  alt="Web Development Certificate"
                  // onClick={() => handleZoom(WebCert)}
                  // onRequestClose={handleRequestClose}
                />
              )}
              {title === 'Certificates' && item.title === 'Project Management Professional (PMP)' && (
                <img
                  style={{ width: "100%", height: "auto", textAlign: "center" }}
                  // zoomed={zoomedImage === PMPCert}
                  src={PMPCert}
                  alt="PMP Certificate"
                  // onClick={() => handleZoom(PMPCert)}
                  // onRequestClose={handleRequestClose}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const workExperienceItems = resumeItems.filter(item => item.category === 'Work Experience');
  const educationItems = resumeItems.filter(item => item.category === 'Education');
  const certificateItems = resumeItems.filter(item => item.category === 'Certificates');

  return (
    <div className="resume-page">
      <div className="resume-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for any keyword, skill, or year..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="resume-list">
          {renderSection('Work Experience', workExperienceItems)}
          {renderSection('Certificates', certificateItems)}
          {renderSection('Education', educationItems)}
        </div>
      </div>
      {/* Conditionally render enlarged image */}
      {zoomedImage && (
        <img
          style={{ width: "100%", height: "auto", textAlign: "center" }}
          zoomed={true}
          src={zoomedImage}
          alt="Enlarged Image"
          onRequestClose={handleRequestClose}
        />
      )}
    </div>
  );
};

const resumeItems = [
  {
    category: 'Work Experience',
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
            <li>Commission pay file management for Sales Teams, including payment triggers, residual payments, not paying on deals with specific conditions, and summarizing all data into an easy-to-read report</li>
              <ul><li>Sales companies have chosen to use Tomorrow Energy due to the flexibility of the payout system, the accuracy, and the easy to read reports</li></ul>
            <li>Custom APIs for third-party development acceleration. The APIs allow for tailored services such as:</li>
                <ul>
                  <li>Allowing Digital Sales Partners to integrate into the platform, which serves over 50 digital vendors</li>
                  <li>Opting the customers into a 3rd party rewards program</li>
                  <li>Immediate prospective customer information lookups to stop unwanted customers at the point of sale</li>
                  <li>Real-time fraud and credit score checks. If this step passes then a GUID is created for cross-reference purposes before enrollments continue</li>
                  <li>Customer lookups for: name, address, account number verification</li>
                </ul>
            <li>Rate, promo code, and territory management</li>
            <li>Automated emails triggered during myriad processes through the customer journey</li>
            <li>Website integration for dynamic updates</li>
            <li>Retail Market Entry. Tabletop enrollments connected to internal systems for simple, quick enrollments</li>
            <li>Fraud and Credit Check processes, fully customizable for Admin users to allow flexibility for the Sales team</li>
            <li>Enrollment Processing: created multiple screens for correcting enrollments before moving to the market and print houses. These processes save time and money by eliminating issues at the beginning of the customer lifecycle</li>
            <li>Customization of nearly every touchpoint during the sales, enrollment, and payment processing journeys. This allows for nimbleness and flexibility for the current workflows as well as for handling future projects</li>
            <li>100s of automated jobs, all documented and send alerts to the appropriate teams when action is required</li>
          </ul>
        </li>
        <li><strong>Visionary Principles</strong> Created and optimized all systems within the company. Documented all processes to ensure if something goes wrong there is a process flow which can be referenced. This saves time as well as ensures every team member is aligned and in agreement on all processes.</li>
        <li><strong>Office Relocation:</strong> Orchestrated three office moves, including Las Vegas to Houston, optimizing and reconfiguring IDF rooms with new equipment. Led the project for construction of the physical office space.</li>
        <li><strong>System Migrations:</strong> Successfully migrated the company across two billing systems with zero data loss; integrated processes with two credit bureaus.</li>
        <li><strong>Cloud Optimization:</strong> Migrated AWS servers, reducing monthly costs by 50%.</li>
        <li><strong>Active Directory Streamlining:</strong> Consolidated from three ADs to one and implemented user self-service portals for password resets.</li>
        <li><strong>Solutioning:</strong> Led many projects. Recent example: proposed and implemented methods to double Renewal rate of contracts and reduce time from 7 minutes to 30 seconds.</li>
        <li><strong>Payment Processing:</strong> Setup processes to accept payments from a customer facing web portal as well as a custom-built application for internal users.</li>
        <li><strong>Social Selling Platform Creation:</strong> Developed a system which acted as its own business allowing users to sell energy and build a team paying bonuses and residuals.</li>
        <li><strong>Marketing Projects</strong> Tracked users on the website and automated emails and postcards to increase customer acquisition</li>
      </ul>
    ),
    keywords: ['hire me','javascript', 'react', 'web development','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    logo: TomorrowEnergyLogo,
  },
  {
    category: 'Work Experience',
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
        <li>Led all Billing projects for both in-house and customer facing applications.</li>
        <li>Rebuilt the entire Billing component to manager over 150 hotels, each with custom timeshare attributes.</li>
      </ul>
    ),
    keywords: ['leadership', 'javascript', 'react','2014','2015','2016'],
    logo: DiamondResortsLogo,
  },
  {
    category: 'Work Experience',
    title: 'Senior IT Analyst',
    companyName: 'MODIS/ADECCO (Nationwide Insurance)',
    location: 'Des Moines, IA',
    companyLink: 'https://www.adeccousa.com/',
    years: '06/2013 - 06/2014',
    description: (
      <ul>
        <li>Provided both high and low level analytical support for a constantly evolving SalesForce line.</li>
        <li>Developed and maintained requirements and quality support using various tools and methods.</li>
        <li>Fulfilled business solutions using streamlined agile techniques.</li>
        <li>Presented and guided clarity between the business team and development line.</li>
        <li>Created documentation to transform intricate business requests into visually logical diagrams.</li>
        <li>Strengthened communication amongst the team by leading transparency sessions.</li>
      </ul>
    ),
    keywords: ['SalesForce', 'agile', 'documentation', 'communication', 'business analysis', 'Des Moines', 'IT', 'analyst'],
    logo: ModisLogo, 
  },
  {
    category: 'Work Experience',
    title: 'Software Developer II',
    companyName: "Farmer's Mutual Hail Insurance Company of Iowa",
    location: 'West Des Moines, IA',
    companyLink: 'https://www.fmh.com/',
    years: '06/2012 - 06/2013',
    description: (
      <ul>
        <li>Programmed maintainable systems in accordance with Business Requirements Documents.</li>
        <li>Refactored legacy code to improve overall system quality and user experiences.</li>
        <li>Continually upgraded code to eliminate bugs through agile methodologies and collaboration with adjacent business departments.</li>
        <li>Guided business meetings between all team members to forecast the success of projects.</li>
        <li>Resolved system errors while collaborating with architects to prevent future issues.</li>
        <li>Enriched the business and development team by participating in the implementation of agile methodology.</li>
      </ul>
    ),
    keywords: ['software development', 'agile methodology', 'legacy code', 'system maintenance', 'bug fixing'],
    logo: FMHLogo,
  },
  {
    category: 'Work Experience',
    title: 'Support Analyst',
    companyName: 'ITA Group',
    location: 'West Des Moines, IA',
    companyLink: 'https://www.itagroup.com/',
    years: '08/2011 - 06/2012',
    description: (
      <ul>
        <li>Managed and resolved technical issues covering problems on web applications.</li>
        <li>Standardized processes to ensure integrity by building complex SQL queries.</li>
        <li>Led business discussions projecting the future of web applications for multiple Fortune 500 companies.</li>
        <li>Addressed business leads at Fortune 500 companies to direct future business-to-business involvement.</li>
        <li>Endorsed as Team Lead after displaying advanced leadership potential to the management team.</li>
        <li>Operated and owned legacy applications while supporting the evolution into modern code standards.</li>
      </ul>
    ),
    keywords: ['technical support', 'web applications', 'SQL queries', 'leadership', 'team lead', 'legacy applications'],
    logo: ITALogo,
  },  
  {
    category: 'Work Experience',
    title: 'Web Marketing Intern',
    companyName: 'Marsh & McLennan',
    location: 'Johnston, IA',
    companyLink: 'https://www.marshmclennan.com/',
    years: '05/2011 - 08/2011',
    description: (
      <ul>
        <li>Trained teammates in Adobe Photoshop, Microsoft Visio, and modern web standards.</li>
        <li>Redesigned the template for the insurance website landing page.</li>
        <li>Participated in the integration of Adobe Flash onto a new line of insurance application.</li>
        <li>Eliminated unnecessary lines of code while organizing the backend of multiple web applications.</li>
        <li>Documented every process coworkers were involved in to provide expectation standards.</li>
        <li>Accelerated output time from start to finish of projects by implementing various agile techniques, resulting in a 25% reduction of project completion time.</li>
      </ul>
    ),
    keywords: ['web marketing', 'internship', 'Adobe Photoshop', 'Microsoft Visio', 'Adobe Flash', 'agile techniques'],
    logo: MarshLogo,
  },  
  {
    category: 'Education',
    title: 'Bachelor of Science (Double Major) in Computer Information Systems Business Management [Finance and Insurance]',
    companyName: 'Simpson College',
    location: 'Indianola, IA',
    companyLink: 'https://simpson.edu/',
    years: '2006-2011',
    description: (
      <ul>
        <li>Completed coursework in software development, algorithms, data structures, and computer systems.</li>
        <li>Joined Iowa State University's <a href="https://www.stuorg.iastate.edu/cse target='new'">Computer Science and Software Engineering Club</a> to learn new ideas and work on large-scale projects.</li>
        <li>Volunteered weekly for the Literacy Club to help students in elementary school who were struggling.</li>
        <li>Spent each break on a volunteer trip, with some notable places being:
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Camp_Adventure" target='new'>Camp Adventure AmeriCorps</a> on the Ramstein Air Base in Ramstein, Germany</li>
            <li><a href="https://www.soallmayeat.org/" target='new'>SAME Cafe</a> in Denver, Colorado</li>
            <li><a href="https://www.heifer.org/usa/ranch.html" target='new'>Heifer International Ranch</a> in Little Rock, Arkansas</li>
            <li><a href="https://sites.google.com/view/tncs-bie/about-us/tncs?authuser=0" target='new'>T'iis Nazbas Community School Districity</a> in Teec Nos Pos, Arizona</li>
          </ul>
        </li>
      </ul>
    ),
    keywords: ['computer science', 'university', 'bachelor','volunteer', '2006','2007','2008','2009','2010','2011'],
    logo: SimpsonCollegeLogo,
  },
  {
    category: 'Certificates',
    title: 'The Complete 2024 Web Development Bootcamp',
    companyName: 'Udemy',
    location: 'Online',
    companyLink: 'https://www.udemy.com/course/the-complete-web-development-bootcamp',
    years: '2024',
    description: (
      <ul>
        <li>Earned certification demonstrating proficiency in JavaScript programming and best practices.</li>
        <li>Full Stack Development Principles and Languages included:
            <ul>
              <li>Node JS</li>
              <li>React JS</li>
              <li>EJS (Embedded JavaScript)</li>
              <li>Mongo DB</li>
              <li>PostgreSQL</li>
              <li>Bootstrap and Flexbox</li>
              <li>Creating custom APIs</li>
            </ul>
          <li>Web 3.0 Decentralised App Principles:
            <ul>
              <li>ICP (Internet Computer Protocol) Blockchain Development</li>
              <li>Motoko language</li>
              <li>Orthogonal Persistence</li>
              <li>WSL (Windows Subsystem for Linux)</li>
              <li>CRUD Operations interacting with canisters on blockchains</li>
            </ul>
          </li>
        </li>
      </ul>
    ),
    keywords: ['javascript', 'certificate', '2024'],
    logo: Web2024Logo,
  },
  {
    category: 'Certificates',
    title: 'Project Management Professional (PMP)',
    companyName: 'PMI',
    location: 'Online',
    companyLink: 'https://www.udemy.com/course/the-complete-web-development-bootcamp',
    years: '2023',
    description: (
      <ul>
      <li>Successfully completed the Project Management Professional (PMP) certification from PMI.</li>
      <li>Developed proficiency in project management principles, processes, and best practices.</li>
      <li>Enhanced skills in project initiation, planning, execution, monitoring, and closure.</li>
      <li>Validated ability to manage large-scale projects and lead cross-functional teams effectively.</li>
      <li>Applied knowledge of risk management, cost management, and stakeholder communication.</li>
    </ul>
    ),
    keywords: ['javascript', 'certificate','2020','2021','2022','2023', '2024'],
    logo: PMPLogo,
  },
];

export default Resume;
