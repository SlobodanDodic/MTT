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
        Kalkulator : Dobitak težine u trudnoći po nedeljama
      </h2>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Koliko kilograma dobijamo u trudnoći?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            align="justify"
            style={{ textIndent: "15px" }}
          >
            Povećanje telesne težine tokom trudnoće je normalno i neophodno,
            kako bi se osiguralo dovoljno hranjivih sastojaka za razvoj bebe i
            pripremu tela za dojenje. Međutim, to nikako ne znači da treba da
            jedemo za troje. Tokom prva 3 meseca trudnoće, preporučeni dobitak
            na težini mame bi trebalo da bude između 500 grama do 2 kg. U drugom
            i trećem trimestru, radi brze orijentacije, preporučeni dobitak na
            težini bi iznosio između 1.500 grama do 2.500 grama mesečno.
            Prekomerno ili nedovoljno dobijanje na težini može da utiče na
            zdravlje trudnice i bebe. Pored količine namirnica, neophodno je da
            vodite računa i o kvalitetu istih, kao i da su pripremljene na
            higijenski ispravan način. Ovaj kalkulator služi samo u
            orijentacione svrhe praćenja dobitka težine i nije zamena za
            lekarski pregled i procenu težine. Za sve nedoumice, posavetujte se
            sa lekarom koji vam prati trudnoću.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Intro;
