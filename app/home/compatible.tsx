import GoogleIcon from '@mui/icons-material/Google';
import styles from "../page.module.css";
import { Container } from '@mui/material';
import { SiAmazonalexa } from "react-icons/si";
import { MdSettingsRemote } from "react-icons/md";

export default function Compatible() {

  const data = [
    { id: 1, name: "Google Home", logo: <GoogleIcon /> },
    { id: 2, name: "Amazon Alexa", logo: <SiAmazonalexa /> },
    { id: 3, name: "Control4", logo: <MdSettingsRemote /> },
  ];

  return (
    <div className={styles.color}>
      {data?.map((result) => (
        <Container
          key={result.id}
          sx={{
            display: 'flex',
            padding: '1rem',
            backgroundColor: 'rgba(var(--callout-rgb), 0.5)',
            border: '1px solid rgba(var(--callout-border-rgb), 0.3)',
            borderRadius: 'var(--border-radius)',
            margin: 2,
            whiteSpace: 'nowrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
            {result.logo}
          </div>
          <div style={{ flexGrow: 1 }}>
            <h2 style={{ margin: 0 }}>{result.name}</h2>
          </div>
        </Container>
      ))}
    </div>
  );
}
