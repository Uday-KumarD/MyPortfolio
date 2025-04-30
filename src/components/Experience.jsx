// src/components/Experience.js
import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  border-bottom: 4px solid #fdbb2d;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  border: 2px solid #b21f1f;
  height: 100%;
`;

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Social Tek, Hyderabad',
      duration: 'Oct 2024 - March 2025',
      responsibilities: [
        'Created 10+ reusable components with React, Redux, and Ant Design',
        'Developed Node.js backend with 15+ RESTful APIs',
        'Implemented JWT authentication and Google OTP login',
        'Configured role-based access control system'
      ]
    }
  ];

  return (
    <Section id="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#fff', textAlign: 'center', marginBottom: '40px' }}
        >
          Experience
        </motion.h2>
        <Row gutter={[24, 24]}>
          {experiences.map((exp, index) => (
            <Col xs={24} key={index}>
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StyledCard>
                  <h4 style={{ color: '#1a2a6c' }}>{exp.title}</h4>
                  <p style={{ color: '#b21f1f' }}>{exp.company}</p>
                  <p style={{ marginBottom: '15px' }}>{exp.duration}</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ color: '#1a2a6c', marginBottom: '8px' }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </StyledCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};

export default Experience;