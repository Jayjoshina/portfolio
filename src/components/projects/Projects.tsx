import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
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

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div<{ category: string }>`
  height: 180px;
  background-image: ${(props: { category: string }) => 
    props.category === 'data-science' 
      ? 'linear-gradient(135deg, rgba(74, 137, 220, 0.85) 0%, rgba(61, 108, 185, 0.9) 100%), url("/images/tech-bg.jpg")' 
      : 'linear-gradient(135deg, rgba(46, 204, 113, 0.85) 0%, rgba(39, 174, 96, 0.9) 100%), url("/images/sustainability-bg.jpg")'};
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  flex: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const ProjectTag = styled.span`
  background-color: #f0f2f5;
  color: var(--text-color);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectActions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

interface ProjectButtonProps {
  secondary?: boolean;
}

const ProjectButton = styled.a<ProjectButtonProps>`
  background-color: ${(props: ProjectButtonProps) => props.secondary ? 'transparent' : 'var(--primary-color)'};
  color: ${(props: ProjectButtonProps) => props.secondary ? 'var(--primary-color)' : 'white'};
  border: ${(props: ProjectButtonProps) => props.secondary ? '1px solid var(--primary-color)' : 'none'};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: var(--transition);
  text-align: center;
  
  &:hover {
    background-color: ${(props: ProjectButtonProps) => props.secondary ? 'var(--primary-color)' : 'var(--secondary-color)'};
    color: white;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  background-color: ${(props: { isActive: boolean }) => props.isActive ? 'var(--primary-color)' : 'transparent'};
  color: ${(props: { isActive: boolean }) => props.isActive ? 'white' : 'var(--text-color)'};
  border: 1px solid ${(props: { isActive: boolean }) => props.isActive ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${(props: { isActive: boolean }) => props.isActive ? 'var(--secondary-color)' : '#f0f2f5'};
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
    const projects: Project[] = [
    {
      id: 1,
      title: 'Classification of MRI Images',
      description: 'Developed a deep learning model for brain MRI classification achieving 95% accuracy on test and validation sets, using a robust CNN with 4 convolutional layers and advanced data preprocessing techniques.',
      tags: ['Deep Learning', 'CNN', 'MRI Classification', 'Data Preprocessing'],
      category: 'data-science',
    },
    {
      id: 2,
      title: 'Crafting Own ChatGPT',
      description: 'Developed a simplified version of OpenAI\'s GPT-2 model from scratch, implementing key components to create a personalized chatbot capable of nuanced language interactions and engaging conversations.',
      tags: ['NLP', 'GPT Architecture', 'Neural Networks', 'Backpropagation'],
      category: 'data-science',
    },
    {
      id: 3,
      title: 'Facial Recognition Project',
      description: 'Developed a facial recognition model using Siamese Neural Network architecture with CNNs, achieving 80% test accuracy and implementing innovative feature extraction methods for distinguishing similar faces.',
      tags: ['Facial Recognition', 'Siamese Networks', 'CNNs', 'Feature Extraction'],
      category: 'data-science',
    },
    {
      id: 4,
      title: 'Image Detection and Classification',
      description: 'Built a car component detection model using YOLOv8 with 70% accuracy, alongside implementing traditional ML techniques (SVM, Decision Trees, Random Forest) and advanced image processing with OpenCV.',
      tags: ['YOLO', 'OpenCV', 'Object Detection', 'Machine Learning'],
      category: 'data-science',
    },
    {
      id: 5,
      title: 'Credit Card Fraud Detection',
      description: 'Analyzed 284,807 credit card transactions (0.172% fraudulent) and implemented Isolation Forest algorithm to detect anomalies in this highly imbalanced dataset, visualizing distinct patterns for fraud detection.',
      tags: ['Anomaly Detection', 'Isolation Forest', 'Data Analysis', 'Fraud Detection'],
      category: 'data-science',
    },    {
      id: 6,
      title: 'Excel and SQL for Big Data Handling',
      description: 'Applied advanced Excel functions and PivotTables for data summarization, while implementing complex SQL queries with joins, sub-queries, and efficient data manipulation techniques for relational databases.',
      tags: ['Excel', 'SQL', 'Data Analysis', 'Database Management'],
      category: 'data-science',
    },    {
      id: 7,
      title: 'Federated Learning with Private Labels',
      description: 'Worked on a federated vision learning setup with label privacy constraints and no pre-trained models for secure distributed learning.',
      tags: ['Federated Learning', 'Privacy', 'Distributed ML', 'Computer Vision'],
      category: 'data-science',
    },
    {
      id: 8,
      title: 'Hydrogen Train',
      description: 'Analyzed feasibility of hydrogen trains in India, mapping refueling stations across Mumbai-Delhi routes and estimating costs of 150 crore rupees per solar HRS with 20 MW capacity on 50 hectares.',
      tags: ['Hydrogen Energy', 'Sustainable Transport', 'Renewable Energy', 'Feasibility Analysis'],
      category: 'core-engineering',
    },
    {
      id: 9,
      title: 'Mobile Charger',
      description: 'Designed a mobile charger using 3-phase AC to DC bridge capacitive rectifier, achieving 12V DC with 1V ripple, then regulated to pure 5V DC for stable mobile charging applications.',
      tags: ['Power Electronics', 'AC-DC Conversion', 'Voltage Regulation', 'Circuit Design'],
      category: 'core-engineering',
    },
    {
      id: 10,
      title: 'Mountain Cargo Line Follower Robot',
      description: 'Created an autonomous robot that follows lines, climbs 10-30° slopes with 300g payload, and performs dumping operations using custom 3D-printed components and IR proximity sensors.',
      tags: ['Robotics', 'Arduino', 'Sensors', 'Embedded Systems'],
      category: 'core-engineering',
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Key Projects</SectionTitle>          <FilterContainer>
          <FilterButton 
            isActive={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            isActive={activeFilter === 'data-science'} 
            onClick={() => setActiveFilter('data-science')}
          >
            Data Science & ML
          </FilterButton>
          <FilterButton 
            isActive={activeFilter === 'core-engineering'} 
            onClick={() => setActiveFilter('core-engineering')}
          >
            Core-engineering
          </FilterButton>
        </FilterContainer>
          <ProjectsGrid>        {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage category={project.category} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                {(project.githubUrl || project.demoUrl) && (
                  <ProjectActions>
                    {project.githubUrl && (
                      <ProjectButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                      </ProjectButton>
                    )}
                    {project.demoUrl && (
                      <ProjectButton href={project.demoUrl} target="_blank" rel="noopener noreferrer" secondary>
                        Live Demo
                      </ProjectButton>
                    )}
                  </ProjectActions>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
