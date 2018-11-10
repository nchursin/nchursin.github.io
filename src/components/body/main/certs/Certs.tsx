import * as React from "react";

import { List, ListItem } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// import appArch from "../../assets/png/salesforce/AppArch.png";
// import sysArch from "../../assets/png/salesforce/SysArch.png";
// import dev1 from "../../assets/png/salesforce/Dev1.png";
// import dev2 from "../../assets/png/salesforce/Dev2.png";
// import idAccessManagement from "../../assets/png/salesforce/IDAccessManagement.png";
// import integrationDesigner from "../../assets/png/salesforce/ItegrationDesigner.png";
// import sharingVisibilityDesigner from "../../assets/png/salesforce/SharingVisibilityDesigner.png";
// import devLifecycleDesigner from "../../assets/png/salesforce/DevLifecycleDesigner.png";
// import dataArchDesigner from "../../assets/png/salesforce/DataArchAndManagement.png";
// import appBuilder from "../../assets/png/salesforce/AppBuilder.png";

import "./Certs.css";

class Certs extends React.Component {
  public render() {
    return (
      <div className="Certs">
        {/* <Paper className="paper" elevation={1}>
          <Typography
            variant="headline"
            align="left"
            className="text headline"
            component="h3"
          >
            Certifications
          </Typography>
          <div className="text">
            <List>
              <ListItem>
                <img className="icon-medium" src={appArch} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={sysArch} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={dev1} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={dev2} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={idAccessManagement} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={integrationDesigner} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={sharingVisibilityDesigner} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={devLifecycleDesigner} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={dataArchDesigner} />
              </ListItem>
              <ListItem>
                <img className="icon-medium" src={appBuilder} />
              </ListItem>
            </List>
          </div>
        </Paper> */}
      </div>
    );
  }
}

export default Certs;
