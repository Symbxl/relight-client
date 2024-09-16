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
  // Removed duplicate entries
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
        color: '#E0E0E0', // Light text
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
        textAlign: 'center', // Center text within the box
        fontFamily: '"Roboto", sans-serif', // Updated font
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4, fontWeight: '700' }}>
        Frequently Asked Questions
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{
          gridTemplateColumns: {
            xs: '1fr', // One column for smaller screens
            sm: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive columns for larger screens
          },
        }}
      >
        {faqData.map((faq, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: '#2C2C2C', // Slightly lighter dark background
                color: '#E0E0E0', // Light text
                marginBottom: 2,
                boxShadow: 'none',
                borderRadius: '8px',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#E0E0E0' }} />}
                sx={{
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  color: '#E0E0E0',
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontSize: '1rem',
                  color: '#E0E0E0',
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
