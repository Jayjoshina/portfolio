import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

const ContactInfo = styled.div``;

const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.2rem;
`;

const ContactItemContent = styled.div``;

const ContactItemTitle = styled.h4`
  font-size: 1rem;
  color: var(--text-light);
`;

const ContactItemLink = styled.a`
  font-size: 1rem;
  color: var(--text-color);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionTitle>Let's Connect</SectionTitle>
        
        <ContactContainer>
          <ContactInfo>
            <ContactText>
              I'm currently exploring opportunities in Data science, Applied AI/ML. 
              Whether you have a question, want to discuss a potential project, or just want to say hello, 
              feel free to reach out using any of the contact methods below!
            </ContactText>
            
            <ContactDetails>
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>Email</ContactItemTitle>                <ContactItemLink href="mailto:jayjoshina77@gmail.com">
                    jayjoshina77@gmail.com
                  </ContactItemLink>
                </ContactItemContent>
              </ContactItem>
                <ContactItem>
                <ContactIcon><i className="fab fa-linkedin"></i></ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>LinkedIn</ContactItemTitle>
                  <ContactItemLink href="https://www.linkedin.com/in/jay-joshina-b554192b8" target="_blank" rel="noopener noreferrer">
                    jayjoshina
                  </ContactItemLink>
                </ContactItemContent>
              </ContactItem>
                <ContactItem>
                <ContactIcon><i className="fab fa-github"></i></ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>GitHub</ContactItemTitle>
                  <ContactItemLink href="https://github.com/jayjoshina" target="_blank" rel="noopener noreferrer">
                    jayjoshina
                  </ContactItemLink>
                </ContactItemContent>
              </ContactItem>
            </ContactDetails>
            

            <SocialLinks>
              <SocialLink href="mailto:jayjoshina77@gmail.com"
                    target="_blank" rel="noopener noreferrer">
                📧
              </SocialLink>
            
              <SocialLink href="https://www.linkedin.com/in/jay-joshina-b554192b8" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
              <SocialLink href="https://github.com/jayjoshina" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              
            </SocialLinks>
          </ContactInfo>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default Contact;
