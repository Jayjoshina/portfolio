import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #212529;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  color: #adb5bd;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterLink = styled.a`
  color: #adb5bd;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>Jay Joshina</FooterLogo>
          <FooterText>
            B.Tech student in Energy Science and Engineering at IIT Bombay, with a minor in Computer Science 
            and AI/ML. Passionate about machine learning, problem-solving, and creating impactful solutions.
          </FooterText>
            <FooterLinks>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#achievements">Achievements</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
          
          <FooterSocial>     
            <SocialLink href="mailto:jayjoshina77@gmail.com"
                    target="_blank" rel="noopener noreferrer">
                📧
              </SocialLink>
                 <SocialLink href="https://www.linkedin.com/in/jay-joshina-b554192b8" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialLink>
            
          </FooterSocial>
          
          <Copyright>© {new Date().getFullYear()} Jay Joshina. All rights reserved.</Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;
