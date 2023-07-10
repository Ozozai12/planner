import { ContactItem } from "./ContactItem";

import { IContact } from "../types/data";
import { Box, Grid } from "@mui/material";

interface IContactsListProps {
  items: IContact[];
}

const ContactsList: React.FC<IContactsListProps> = (props) => {
  const { items } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ sx: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((contact) => (
            <Grid item xs={2} sm={4} md={4} key={contact.id}>
              <ContactItem {...contact} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export { ContactsList };
