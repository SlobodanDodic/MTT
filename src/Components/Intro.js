import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Intro = () => {
  return (
    <div
      style={{
        textAlign: "justify",
        paddingTop: "55px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Preporučeno uvećavanje telesne težine tokom trudnoće
      </h2>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dodatne informacije</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="justify">
            Trudnoća može dovesti do značajnih promena u ženskom telu i
            svakodnevnim rutinama. Jedan od njih je povećanje telesne težine
            kako bi se osiguralo dovoljno hranjivih sastojaka za razvoj fetusa i
            kako bi se uskladištilo dovoljno hranljivih sastojaka u pripremi za
            dojenje.
            <br />
            Iako je povećanje telesne težine tokom trudnoće normalno i
            neophodno, studije su pokazale da određeni rasponi povećavanja
            težine, s obzirom na specifični indeks telesne mase (BMI), rezultuju
            pozitivnijim ishodima i za fetus i za majku. Generalno se
            preporučuje da trudnice dobiju samo 0,45 kg do 1,85 kg tokom prva 3
            meseca trudnoće, a 0,45 kg nedeljno tokom ostatka trudnoće. Moguće
            je postići 0,45 kg nedeljno unoseći dodatnih 300 kalorija dnevno,
            što je otprilike ekvivalentno dodatnom sendviču sa čašom mleka ili
            pečenim krompirom sa oko 55 grama mesa plus jednom jabukom.
            <br />
            Medicinski institut daje smernice za povećavanje telesne težine na
            osnovu BMI u trudnoći, ali imajte na umu da su ovo samo preporuke i
            da uvećavanje telesne težine žena varira. Kao takvo, treba
            konsultovati zdravstvenog radnika da bi se tačnije utvrdile
            specifične potrebe svake osobe.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Intro;
