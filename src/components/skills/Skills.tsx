import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
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

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
  }
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.li`
  background-color: #f0f2f5;
  color: var(--text-color);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <SkillCategories>
          <CategoryCard>
            <CategoryTitle>Programming</CategoryTitle>
            <SkillList>
              <SkillItem>Python</SkillItem>
              <SkillItem>C++</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>MATLAB</SkillItem>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
            </SkillList>
          </CategoryCard>
          
          <CategoryCard>
            <CategoryTitle>ML & Deep Learning</CategoryTitle>
            <SkillList>
              <SkillItem>PyTorch</SkillItem>
              <SkillItem>OpenCV</SkillItem>
              <SkillItem>Scikit-learn</SkillItem>
              <SkillItem>CNNs</SkillItem>
              <SkillItem>Siamese Networks</SkillItem>
              <SkillItem>Data Augmentation</SkillItem>
              <SkillItem>Federated Learning</SkillItem>
              <SkillItem>GAN</SkillItem>
            </SkillList>
          </CategoryCard>
          
          <CategoryCard>
            <CategoryTitle>Tools & Platforms</CategoryTitle>
            <SkillList>
              <SkillItem>GitHub</SkillItem>
              <SkillItem>ANSYS</SkillItem>
              <SkillItem>Excel</SkillItem>
              <SkillItem>VS Code</SkillItem>
              <SkillItem>Jupyter Notebooks</SkillItem>
            </SkillList>
          </CategoryCard>
          
          <CategoryCard>
            <CategoryTitle>Web & General</CategoryTitle>
            <SkillList>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>React</SkillItem>
              <SkillItem>Playwright</SkillItem>
              <SkillItem>REST APIs</SkillItem>
              <SkillItem>Data Structures</SkillItem>
              <SkillItem>Algorithms</SkillItem>
            </SkillList>
          </CategoryCard>
        </SkillCategories>
      </div>
    </SkillsSection>
  );
};

export default Skills;
