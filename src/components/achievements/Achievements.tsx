import React from 'react';
import styled from 'styled-components';

const AchievementsSection = styled.section`
  background-color: #f8f9fa;
  padding: 80px 0;
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

const AchievementsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AchievementCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  border-left: 4px solid var(--primary-color);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AchievementTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
`;

const AchievementOrganization = styled.p`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const AchievementDate = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const AchievementDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-color);
`;

const Achievements: React.FC = () => {
  return (
    <AchievementsSection id="achievements">
      <div className="container">
        <SectionTitle>Achievements & Recognition</SectionTitle>
        
        <AchievementsContainer>
          <AchievementCard>
            <AchievementTitle>Institute Academic Award</AchievementTitle>
            <AchievementOrganization>Indian Institute of Technology (IIT) Bombay</AchievementOrganization>
            <AchievementDate>2023-24</AchievementDate>
            <AchievementDescription>
              Received the prestigious Institute Academic Award, given to only 2 students per department 
              for outstanding academic achievement and scholastic performance in the Energy Science and Engineering department.
            </AchievementDescription>
          </AchievementCard>
          
          {/* Add more achievement cards as needed */}
        </AchievementsContainer>
      </div>
    </AchievementsSection>
  );
};

export default Achievements;
