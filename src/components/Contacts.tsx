import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ContactsList } from "./ContactsList";
import { IContact } from "../types/data";

import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const hardContacts = [
  {
    id: "1",
    name: "Ozozai Bam",
    number: "+1122233454544",
  },
  {
    id: "2",
    name: "Kateryna Oliynyk",
    number: "+4534563634562",
  },
  {
    id: "3",
    name: "San Sanych",
    number: "+54364563234534",
  },
  {
    id: "4",
    name: "Valeriy Zaluzhniy",
    number: "+34235451343432",
  },
];

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(hardContacts);

  return (
    <Container>
      <Typography variant="h3" component="h2" sx={{ mt: "15px", mb: "15px" }}>
        Contacts
      </Typography>
      {contacts.length === 0 ? (
        <Typography variant="h5" component="span">
          Nothing to do.
        </Typography>
      ) : (
        <ContactsList items={contacts} />
      )}
    </Container>
  );
};

export { Contacts };
