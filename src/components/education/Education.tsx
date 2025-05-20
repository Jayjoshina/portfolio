import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  background-color: white;
`;

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: var(--dark-color);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
  }
`;

const EducationCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: var(--transition);
  border-left: 4px solid var(--primary-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const DegreeName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
`;

const UniversityName = styled.h4`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
`;

const Education: React.FC = () => {
  return (
    <EducationSection id="education">
      <div className="container">
        <SectionTitle>Academic Background</SectionTitle>
        
        <EducationCard>
          <DegreeName>B.Tech, Energy Science and Engineering</DegreeName>
          <UniversityName>Indian Institute of Technology (IIT) Bombay</UniversityName>
          <Duration>2022 – 2026 (expected)</Duration>
          <Description>
            Pursuing a Bachelor's degree in Energy Science and Engineering, with a strong foundation in 
            mathematics, thermodynamics, heat transfer, and renewable energy technologies.
          </Description>
        </EducationCard>
        
        <EducationCard>
          <DegreeName>Minor in Computer Science & AI/ML (C-Minds)</DegreeName>
          <UniversityName>Indian Institute of Technology (IIT) Bombay</UniversityName>
          <Duration>2022 – 2026 (expected)</Duration>
          <Description>
            Focused on systems programming, data structures, algorithms, data science, and deep learning. 
            Developed strong technical skills in machine learning and artificial intelligence.
          </Description>
        </EducationCard>
        
        <Description style={{ marginTop: '2rem' }}>
          I've developed a strong foundation in math, thermodynamics, heat transfer, and renewable energy, 
          along with algorithms, data structures, and machine learning. This interdisciplinary background 
          allows me to approach problems with a unique perspective, combining engineering principles with 
          computational methods.
        </Description>
      </div>
    </EducationSection>
  );
};

export default Education;
