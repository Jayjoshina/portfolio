import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props: { scrolled: boolean }) => props.scrolled ? '#ffffff' : 'transparent'};
  box-shadow: ${(props: { scrolled: boolean }) => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  padding: ${(props: { scrolled: boolean }) => props.scrolled ? '15px 0' : '20px 0'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &.active {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }
`;

const MobileMenuIcon = styled.span`
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  transition: all 0.3s ease;
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: ${(props: { isOpen: boolean }) => props.isOpen ? '0' : '-100%'};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: all 0.5s ease;
  z-index: 999;
`;

const MobileMenuLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo>Jay Joshina</Logo>
        <NavLinks>          <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</NavLink>
          <NavLink to="education" smooth={true} duration={500} spy={true} activeClass="active">Education</NavLink>
          <NavLink to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</NavLink>
          <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</NavLink>
          <NavLink to="experience" smooth={true} duration={500} spy={true} activeClass="active">Experience</NavLink>
          <NavLink to="achievements" smooth={true} duration={500} spy={true} activeClass="active">Achievements</NavLink>
          <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          <MobileMenuIcon />
          <MobileMenuIcon />
          <MobileMenuIcon />
        </MobileMenuButton>
        <MobileMenu isOpen={isMenuOpen}>          <MobileMenuLink to="about" smooth={true} duration={500} spy={true} onClick={closeMenu}>About</MobileMenuLink>
          <MobileMenuLink to="education" smooth={true} duration={500} spy={true} onClick={closeMenu}>Education</MobileMenuLink>
          <MobileMenuLink to="skills" smooth={true} duration={500} spy={true} onClick={closeMenu}>Skills</MobileMenuLink>
          <MobileMenuLink to="projects" smooth={true} duration={500} spy={true} onClick={closeMenu}>Projects</MobileMenuLink>
          <MobileMenuLink to="experience" smooth={true} duration={500} spy={true} onClick={closeMenu}>Experience</MobileMenuLink>
          <MobileMenuLink to="achievements" smooth={true} duration={500} spy={true} onClick={closeMenu}>Achievements</MobileMenuLink>
          <MobileMenuLink to="contact" smooth={true} duration={500} spy={true} onClick={closeMenu}>Contact</MobileMenuLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
