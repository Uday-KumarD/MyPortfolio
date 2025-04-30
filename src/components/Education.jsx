// src/components/Education.js
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
`;

const Education = () => {
  const education = [
    { degree: 'B.Tech - ECE', institute: 'NIT', year: '2020-2024', gpa: '6.81' },
    { degree: 'Higher Secondary', institute: 'Chaitanya Jr College', year: '2018-2020', gpa: '9.65' }
  ];

  return (
    <Section id="education">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#fff', textAlign: 'center', marginBottom: '40px' }}
        >
          Education
        </motion.h2>
        <Row gutter={[24, 24]}>
          {education.map((edu, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StyledCard>
                  <h4 style={{ color: '#1a2a6c' }}>{edu.degree}</h4>
                  <p>{edu.institute}</p>
                  <p>{edu.year} | GPA: {edu.gpa}</p>
                </StyledCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};

export default Education;