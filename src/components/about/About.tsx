import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding-top: 120px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: #ddd; /* Placeholder color */
  background-image: url('/images/WhatsApp Image 2025-05-14 at 10.30.09_c581392b.jpg');
  background-size: cover;
  background-position: center;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const ContentContainer = styled.div`
  flex: 1.5;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  max-width: 600px;
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ResumeButton = styled.a`
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContactButton = styled.a`
  padding: 12px 30px;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer>
          <ImageContainer>
            <ProfileImage />
          </ImageContainer>
          <ContentContainer>
            <Greeting>Hello, I'm</Greeting>
            <Name>Jay Joshina</Name>
            <Title>B.Tech Student in Energy Science & Engineering | Minor in CS & AI/ML</Title>
            <Description>
              A passionate and driven third-year B.Tech student in Energy Science and Engineering at IIT Bombay, with a 
              minor in Computer Science and Artificial Intelligence/Machine Learning (C-Minds). I thrive at the intersection of 
              engineering, machine learning, and problem-solving, always seeking opportunities that challenge me intellectually 
              and let me create real-world impact through innovation.
            </Description>            <ButtonContainer>
              <ResumeButton href="https://drive.google.com/file/d/1ABlA_CvYBVAEv465ibaKPgzfTTSOUQNY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                Download Tech Resume
              </ResumeButton>
              <ResumeButton href="https://drive.google.com/file/d/1ABlA_CvYBVAEv465ibaKPgzfTTSOUQNY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                Download Core Resume
              </ResumeButton>
              <ContactButton href="#contact">
                Contact Me
              </ContactButton>
            </ButtonContainer>
          </ContentContainer>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About;
