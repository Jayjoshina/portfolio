import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: #f8f9fa;
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

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ExperienceGroup = styled.div``;

const ExperienceGroupTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const Timeline = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #e9ecef;
    
    @media (min-width: 768px) {
      left: 50%;
    }
  }
`;

interface TimelineItemProps {
  isRight?: boolean;
}

const TimelineItem = styled.div<TimelineItemProps>`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 40px;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${(props: TimelineItemProps) => props.isRight ? '50%' : '0'};
    padding-left: ${(props: TimelineItemProps) => props.isRight ? '40px' : '0'};
    padding-right: ${(props: TimelineItemProps) => props.isRight ? '0' : '40px'};
    text-align: ${(props: TimelineItemProps) => props.isRight ? 'left' : 'right'};
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 20px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary-color);
    
    @media (min-width: 768px) {
      left: ${(props: TimelineItemProps) => props.isRight ? '-9px' : 'auto'};
      right: ${(props: TimelineItemProps) => props.isRight ? 'auto' : '-9px'};
    }
  }
`;

const TimelineCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TimelinePeriod = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-color);
`;

const HackathonsContainer = styled.div`
  margin-top: 2rem;
`;

const HackathonsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HackathonItem = styled.li`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const HackathonTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
`;

const HackathonSubtitle = styled.h5`
  font-size: 0.9rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const HackathonDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-color);
`;

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <div className="container">
        <SectionTitle>Experience & Involvement</SectionTitle>
        
        <ExperienceContainer>
          <ExperienceGroup>
            <ExperienceGroupTitle>Professional Experience</ExperienceGroupTitle>
            
            <Timeline>
              <TimelineItem>
                <TimelineCard>
                  <TimelineTitle>Data Cleaning & Preprocessing for LLMs</TimelineTitle>
                  <TimelineSubtitle>Internship</TimelineSubtitle>
                  <TimelinePeriod>June'24-Jul'24</TimelinePeriod>
                  <TimelineDescription>
                    Cleaned and prepared data for language models in a large-scale environment. Worked on 
                    preprocessing techniques to improve training data quality for machine learning models.
                  </TimelineDescription>
                </TimelineCard>
              </TimelineItem>
            </Timeline>
          </ExperienceGroup>
          
          <ExperienceGroup>
            <ExperienceGroupTitle>Academic Mentorship</ExperienceGroupTitle>
            
            <Timeline>
              <TimelineItem isRight>
                <TimelineCard>
                  <TimelineTitle>Academic Support Mentorship Program (ASMP)</TimelineTitle>
                  <TimelineSubtitle>Mentee</TimelineSubtitle>
                  <TimelinePeriod>2022 - Present</TimelinePeriod>
                  <TimelineDescription>
                    Received mentorship from experienced seniors in Machine Learning and Data Science. 
                    Engaged in deep technical discussions and feedback cycles that significantly 
                    enhanced my understanding of complex ML concepts and research methods.
                  </TimelineDescription>
                </TimelineCard>
              </TimelineItem>
            </Timeline>
          </ExperienceGroup>
          
          <ExperienceGroup>
            <ExperienceGroupTitle>Hackathons & Club Involvement</ExperienceGroupTitle>
            
            <HackathonsContainer>
              <HackathonsList>
                <HackathonItem>
                  <HackathonTitle>Algoninja</HackathonTitle>
                  <HackathonSubtitle>WNCC (Web & Coding Club)</HackathonSubtitle>
                  <HackathonDescription>
                    Participated in the competitive programming competition organized by the Web & Coding Club 
                    at IIT Bombay, solving algorithmic challenges under time constraints.
                  </HackathonDescription>
                </HackathonItem>
                
                <HackathonItem>
                  <HackathonTitle>Winter in Data Science</HackathonTitle>
                  <HackathonSubtitle>Analytics Club, IIT Bombay</HackathonSubtitle>
                  <HackathonDescription>
                    Contributed to projects in data science and analytics, applying machine learning techniques 
                    to solve real-world problems during the winter program.
                  </HackathonDescription>
                </HackathonItem>
                
                <HackathonItem>
                  <HackathonTitle>Summer of Code</HackathonTitle>
                  <HackathonSubtitle>Web & Coding Club</HackathonSubtitle>
                  <HackathonDescription>
                    Built a chatbot and explored LLMs from scratch as part of the summer coding program. 
                    Developed skills in natural language processing and machine learning.
                  </HackathonDescription>
                </HackathonItem>
              </HackathonsList>
            </HackathonsContainer>
          </ExperienceGroup>
        </ExperienceContainer>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
