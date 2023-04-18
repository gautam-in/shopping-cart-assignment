import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import './style.scss'

export default function MuiAccordion({ title, content, defaultOpen = false, ...props }) {
  return (
    <div>
      <Accordion className={'accordion'} {...props}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
