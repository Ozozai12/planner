import { Card, Paper } from "@mui/material";
import { IContact } from "../types/data";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IContactItem extends IContact {}

const ContactItem: React.FC<IContactItem> = (props) => {
  const { name, number } = props;

  return (
    <Paper elevation={3}>
      <Card
        sx={{
          maxWidth: 400,
          height: 120,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="span">
            {name}
            <br />
            {number}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export { ContactItem };
