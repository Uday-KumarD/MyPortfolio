// src/components/Certifications.js
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

const Certifications = () => {
  const certs = [
    { title: 'Data Structures - Udemy', link: '#' },
    { title: 'Web Development - Social Tek', link: '#' }
  ];

  return (
    <Section id="certifications">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#fff', textAlign: 'center', marginBottom: '40px' }}
        >
          Certifications
        </motion.h2>
        <Row gutter={[24, 24]}>
          {certs.map((cert, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StyledCard>
                  <h4 style={{ color: '#1a2a6c' }}>{cert.title}</h4>
                  <a href={cert.link} target="_blank" style={{ color: '#b21f1f' }}>
                    View Certificate
                  </a>
                </StyledCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};

export default Certifications;