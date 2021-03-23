import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    padding: "30px 0px",
  },
}));

const FooterInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Potencijalne komplikacije...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="justify">
            Postoje negativni efekti u slučaju nedovoljnog ili prekomernog
            debljanja tokom trudnoće. Nedovoljno debljanje može ugroziti
            zdravlje fetusa i prouzrokovati prerano rođenje, dok prekomerno
            uvećanje težine može izazvati porođajne komplikacije, rađajući
            fetuse znatno veće od proseka, zadržavanje telesne težine nakon
            porođaja, a može doći i do povećanja rizika za carskim rezom.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ishrana tokom trudnoće...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="justify">
            Ono što osoba jede ili ne jede tokom trudnoće može značajno uticati
            na zdravlje svoje bebe. Iako se često raspravlja o tome šta osoba
            treba ili ne sme jesti tokom trudnoće, a što se može razlikovati
            među kulturama, ne postoji posebna formula koja garantuje zdravu
            bebu. Nije apsolutno neophodno slijediti neke strogo stroge
            nutricionističke smernice tokom trudnoće, ali se primenjuju opšti
            saveti za zdravu prehranu, poput ravnoteže povrća, voća, celovitih
            žitarica, nemasnih proteina i zdravih masti. Određene hranjive
            sastojke mogu, međutim, biti posebno korisne za rast i razvoj zdrave
            bebe. O nekima će biti reči u nastavku.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Dodaci ishrani...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="justify">
            <strong>Folat i folna kiselina: </strong>
            <br />
            Folat i folna kiselina mogu pomoći u sprečavanju urođenih mana.
            Folat posebno štiti od defekata neuralne cevi, kao i potencijalnih
            abnormalnosti u mozgu i kičmenoj moždini. Takođe se pokazalo da
            smanjuje rizik od preranog porođaja. Folna kiselina je sintetički
            oblik folata, vitamin B i može se jesti u obliku dodataka ili
            obogaćene hrane. Osim korištenja dodataka, folna kiselina se može
            konzumirati jedući određeno lisnato zeleno povrće (španać), agrume
            (narandže), sušeni pasulj i grašak.
            <br />
            <strong>Kalcijum: </strong>
            <br />
            Kalcijum pomaže u podršci jakim kostima i zubima, a takođe je
            neophodan za pravilno svakodnevno funkcionisanje telesnog
            vaskularnog, mišićnog i nervnog sistema. Kalcijum se može naći u
            mlečnim proizvodima poput mleka, jogurta i sira. Može se naći i u
            nemlečnoj hrani poput španaća, lososa, brokola i kelja.
            <br />
            <strong>Vitamin D: </strong>
            <br />
            Poput kalcijuma, vitamin D može pomoći u unapređenju čvrstoće
            kostiju, istovremeno gradeći detetove kosti i zube. Među ostalim
            namirnicama može se naći i u soku od naranče, ribi i jajima.
            <br />
            <strong>Proteini: </strong>
            <br />
            Iako su važni za vaše zdravlje, vrlo su važni i za rast deteta tokom
            cele trudnoće. Dobri izvori proteina uključuju nemasno meso, živinu,
            ribu, jaja, pasulj, grašak, orašaste plodove i proizvode od soje.
            <br />
            <strong>Gvožđe: </strong>
            <br />
            Gvožđe je još jedan hranjivi sastojak koji je izuzetno važan za
            razvoj vaše bebe. Trudna osoba trebala bi unositi dvostruku količinu
            gvožđa nego inače, jer je gvožđe neophodno za telo u procesima
            proizvodnje veće količine krvi za snabdevanje bebe kiseonikom. U
            slučaju da majka ne unosi dovoljno gvožđa, mogla bi patiti od
            anemije, što bi rezultovalo umorom i povećavanjem rizika od preranog
            porođaja. Gvožđe se, između ostalog, može naći u nemasnom crvenom
            mesu, živini, ribi, hrani obogaćenoj gvožđem, pasulju i povrću.
            Gvožđe iz životinjskih proizvoda najlakše se apsorbuje, iako
            spajanje gvožđa iz biljnih izvora sa hranom ili pićima koja sadrže
            velike količine vitamina C može povećati apsorpciju gvožđa.
            <br />
            <br />
            <strong>
              Većina gore navedenih hranjivih sastojaka može se dobiti nekim
              oblikom dodataka, a uzimanje prenatalnih vitamina prilično je
              često. U zavisnosti od vaše prehrane, možete razmotriti razgovor
              sa zdravstvenim radnikom kako biste utvrdili trebate li uzimati
              prenatalni vitamin ili bilo koje druge posebne dodatke.
            </strong>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Hrana za izbegavanje...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="justify">
            Važno je izbegavati određenu hranu i aktivnosti tokom trudnoće kao i
            konzumirati hranu sa određenim hranjivim sastojcima. Neke od njih
            uključuju hranu bogatu živom, poput mnogih plodova mora. Generalno,
            što je riba veća i što je starija, verovatno sadrži više žive.
            Preporučuje se da trudnice izbegavaju da jedu morske pse, sabljarke
            i skuše. Morski plodovi koji se uopšteno smatraju sigurnim uključuju
            škampe, losos, soma, inćune, pastrmku, bakalar i tunu iz konzerve.
            Trudnice takođe trebaju izbegavati da jedu hranu koja je sirova,
            nedovoljno kuvana ili naravno kontaminirana.
            <br />
            Treba uključiti hranu poput sušija i sirovih školjki poput kamenica.
            Slično tome, treba izbegavati nedovoljno pečeno meso, živinu i jaja,
            jer su trudnice u većem riziku od trovanja hranom zbog bakterija u
            nedovoljno kuvanoj hrani. Nepasterizovanu hranu, koja uključuje
            mnoge mlečne proizvode, takođe treba izbegavati jer može dovesti do
            bolesti koje se prenose hranom. Trudnice ne bi trebale jesti
            neoprano voće i povrće, opet zbog mogućnosti konzumiranja štetnih
            bakterija. Određeni izdanci poput lucerke, deteline i rotkve mogu
            imati bakterije koje uzrokuju bolesti i treba ih temeljno kuvati i
            nikako ne jesti sirove.
            <br />
            Treba izbegavati i preveliko konzumiranje kofeina, jer može proći
            kroz placentu, a učinci na bebu nisu dovoljno poznati, kao ni efekti
            koji biljni čajevi mogu imati na bebu. Trudnica ni pod kojim
            okolnostima ne sme konzumirati alkohol, jer nijedna studija nije
            utvrdila nivo alkohola koji je dokazano siguran tokom trudnoće.
            Alkohol povećava rizik od mrtvorođenih beba i pobačaja. Takođe može
            uzrokovati fetalni alkoholni sindrom što može rezultovati razvojem
            intelektualnih smetnji, kao i deformacijama na licu.
            <br />
            Pušenje apsolutno treba izbegavati pre, za vreme i nakon trudnoće,
            jer pušenje u bilo kojem od ovih perioda može izuzetno negativno
            uticati kako na bebu, tako i na majku. Pušenje tokom trudnoće može
            rezultovati mnogim štetnim zdravstvenim ishodima, uključujući
            prerano rođenje, fetalnu smrt, carski rez (što može prouzrokovati
            krvarenje majke) i još mnogo toga. Utvrđeno je i da povećava rizik
            od sindroma iznenadne smrti novorođenčadi, urođenih oštećenja poput
            promenjenog razvoja moždanog debla i strukture pluća, kao i
            cerebralne paralize. Neke studije su dalje pokazale da pušenje tokom
            trudnoće može povećati verovatnoću da dete u tinejdžerskom dobu pati
            od prekomerne telesne težine, a gojaznost ima brojne neželjene
            implikacije na smrtnost i morbiditet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FooterInfo;
