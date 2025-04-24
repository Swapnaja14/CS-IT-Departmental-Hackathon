import ApplicationForm from './ApplicationForm.jsx';
import React, { useState } from 'react';
// import SendEmailButton from './SendEmailButton.jsx';   
const insuranceData = {
  life_insurance_companies: [
    {
      name: 'Life Insurance Corporation of India',
      abbreviation: 'LIC',
      website: 'https://www.licindia.in',
      headquarters: 'Mumbai, Maharashtra',
      established: 1956
    },
    {
      name: 'HDFC Life Insurance Company Limited',
      website: 'https://www.hdfclife.com',
      headquarters: 'Mumbai, Maharashtra',
      established: 2000
    },
    {
      name: 'Max Life Insurance Company Limited',
      website: 'https://www.maxlifeinsurance.com',
      headquarters: 'Gurugram, Haryana',
      established: 2000
    },
    {
      name: 'ICICI Prudential Life Insurance Company Limited',
      website: 'https://www.iciciprulife.com',
      headquarters: 'Mumbai, Maharashtra',
      established: 2000
    },
    {
      name: 'Kotak Mahindra Life Insurance Company Limited',
      website: 'https://www.insurance.kotak.com',
      headquarters: 'Mumbai, Maharashtra',
      established: 2001
    }
  ],
  non_life_insurance_companies: [
    {
      name: 'Agriculture Insurance Company of India Limited',
      website: 'https://www.aicofindia.com',
      headquarters: 'New Delhi',
      established: 2002
    },
    {
      name: 'Bajaj Allianz General Insurance Company Limited',
      website: 'https://www.bajajallianz.com',
      headquarters: 'Pune, Maharashtra',
      established: 2001
    },
    {
      name: 'Cholamandalam MS General Insurance Company Limited',
      website: 'https://www.cholainsurance.com',
      headquarters: 'Chennai, Tamil Nadu',
      established: 2001
    },
    {
      name: 'Future Generali India Insurance Company Limited',
      website: 'https://www.futuregenerali.in',
      headquarters: 'Mumbai, Maharashtra',
      established: 2007
    },
    {
      name: 'Reliance General Insurance Company Limited',
      website: 'https://www.reliancegeneral.co.in',
      headquarters: 'Mumbai, Maharashtra',
      established: 2000
    }
  ]
};



const InsuranceComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleApplyClick = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div>
      <h1>Life Insurance Companies</h1>
      <div>
        {insuranceData.life_insurance_companies.map((company, index) => (
          <div key={index} style={styles.companyCard}>
            <h3>{company.name} ({company.abbreviation})</h3>
            <p>Headquarters: {company.headquarters}</p>
            <p>Established: {company.established}</p>
            <button
              style={styles.button}
              onClick={() => handleApplyClick(company)}
            >
              Click Here to Apply
            </button>
          </div>
        ))}
      </div>

      <h1>Non-Life Insurance Companies</h1>
      <div>
        {insuranceData.non_life_insurance_companies.map((company, index) => (
          <div key={index} style={styles.companyCard}>
            <h3>{company.name}</h3>
            <p>Headquarters: {company.headquarters}</p>
            <p>Established: {company.established}</p>
            <button
              style={styles.button}
              onClick={() => handleApplyClick(company)}
            >
              Click Here to Apply
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCompany && (
        <ApplicationForm
          company={selectedCompany}
          onClose={handleCloseModal}
        />
      )}
      {/* <SendEmailButton></SendEmailButton> */}
    </div>
  );
};


const styles = {
  companyCard: {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export default InsuranceComponent;
