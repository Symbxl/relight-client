"use client";

import React, { useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows for returns within 30 days of purchase with a receipt."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking link provided in your confirmation email."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, and PayPal."
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        margin: 'auto',
        padding: { xs: 2, md: 4 },
        borderRadius: '12px',
        color: '#E0E0E0',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4, fontWeight: 700 }}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {faqData.map((faq, index) => (
          <Grid item xs={12} key={index}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: '#1F1F1F',
                color: '#E0E0E0',
                marginBottom: 2,
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'background 200ms, border 200ms',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-5px)',
                },
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#E0E0E0' }} />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#E0E0E0',
                  backgroundColor: '#1F1F1F',
                  borderRadius: '8px 8px 0 0',
                  transition: 'transform 200ms',
                  '&:hover span': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontSize: '1rem',
                  color: '#E0E0E0',
                  backgroundColor: '#1F1F1F',
                  borderRadius: '0 0 8px 8px',
                }}
              >
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;
