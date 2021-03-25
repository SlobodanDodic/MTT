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
          <Typography variant="subtitle2">
            Šta ako dobijam premalo/previše kg u trudnoći?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption" align="justify">
            Vaš ginekolog/lekar koji vam prati trudnoću, će da prati i vašu
            telesnu težinu na pregledima. Gubitak težine u trudnoći ili
            nedovoljno dobijanje (najčešće usled mučnine, povraćanje, gubitka
            apetita, žgaravice...), podrazumeva obavezno obraćanje izabranom
            doktoru kako bi ispratio vaše stanje, napredak bebe i procenio da li
            treba da se uključuje terapija ili prilagodi ishrana. Prekomerno
            dobijanje na težini može da dovede do brojnih komplikacija za mamu i
            bebu: trudnički dijabetes, povećanje krvnog pritiska, problemi sa
            žučnom kesom, otežana pokretljivost, porast broja porođaja završenih
            carskim rezom. Nikad samoinicijativno odnosno bez lekarskog saveta
            nemojte da koristite dijetu u trudnoći.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle2">
            Šta treba da jedem kad sam trudna?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption" align="justify">
            Recept za savršenu trudničku ishranu ne postoji. Moraćete da
            balansirate između trudničkih prohteva, mučnina, napada gladi i
            padova apetita. Ne preskačite obroke (doručak, ručak, večera,
            užine). Koristite integralno brašno umesto belog, što više žitarica
            sa celim zrnom, voćne užine, salate sa svežim povrćem. Neka vaša
            ishrana bude izbalansirana, sa puno voća i povrća. Zdrave masnoće su
            važne za razvoj bebe, ne preskačite ih (hladno ceđena ulja, mlečni
            proizvodi…). Proteini su osnovne gradivne materije u našem telu, ne
            zaboravite ih. Smanjite/izbacite so, šećer i industrijski prerađene
            namirnice. Uvek i svuda se pobrinite da je hrana higijenski ispravna
            i namirnica dozvoljena u trudnoći.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="subtitle2">
            Da li treba da pijem vitamine za trudnice?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption" align="justify">
            Kod izbalansirane i uravnotežene ishrane trebalo bi da trudnica
            dobija sve što je potrebno za nju i bebu. Međutim, u trudnoći
            ubrzano trošimo hranljive materije, a često nismo ni sigurni u
            nutritivnu vrednost hrane, pa se dodaju prenatalni vitamini, kojima
            ćemo da obebedimo dovoljan unos vitamina i minerala koji se povećano
            troše u to periodu. Uvek se konsultujte sa lekarom koji vam prati
            trudnoću pre uzimanja bilo kakvih preparata.
            <br />
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
            Gvožđe iz životinjskih proizvoda najlakše se apsorbuje. Gvožđe se
            uglavnom uzima sa vitamoinom C, kako bi se povećala apsorpcija, a
            mleko i mlečne proizvode treba izbegavati 2 sata po uzimanju
            preparata gvožđa.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="subtitle2">
            Koju hranu treba da izbegavam u trudnoći?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption" align="justify">
            Trudnice treba da izbegavaju da jedu hranu koja je sirova,
            nedovoljno kuvana ili naravno kontaminirana.
            <br />
            Poželjno je ne jesti hranu (riba, morski plodovi)koja ima u sebi
            puno žive Generalno, što je riba veća i što je starija, verovatno
            sadrži više žive. Preporučuje se da trudnice izbegavaju da jedu
            morske pse, sabljarke i skuše. Morski plodovi koji se uopšteno
            smatraju sigurnim uključuju škampe, losos, inćune, pastrmku, bakalar
            i tunu iz konzerve. Treba isključiti hranu poput sušija i sirovih
            školjki poput kamenica.
            <br />
            Izbegavajte nedovoljno pečeno meso, živinu i jaja, kao i
            nepasterizovane proizvode, jer su trudnice u većem riziku od
            trovanja hranom zbog bakterija u nedovoljno kuvanoj hrani.
            <br />
            Trudnice ne bi trebale jesti neoprano voće i povrće, opet zbog
            mogućnosti konzumiranja štetnih bakterija. Određeni izdanci poput
            lucerke, deteline i rotkve mogu imati bakterije koje uzrokuju
            bolesti i treba ih temeljno kuvati i nikako ne jesti sirove.
            <br />
            Ono na šta treba da obratimo posebnu pažnju je sprečavanje infekcije
            listerijom u trudnoći, pošto bakterija može da prođe kroz posteljicu
            i zarazi bebu.. Listerija dospeva u hranu preko kontaminiranog
            zemljišta i vode, životinja je prenosilac, bakterija može da preživi
            i da se razmnožava u frižideru na niskim temperaturama. Može se naći
            u nepasterizovanom mleku, sirevima, sladoledu, sirovom povrću, mesu
            i mesnim prerađevinama, sirovoj i dimljenoj ribi. Trudnice treba da
            izbegavaju konzumiranje nepasterizovanog mleka i mlečnih proizvoda,
            kao i svih vrsta gotove hrane koja se ne zagreva pre upotrebe. Hranu
            koja se čuva u frižideru pre ponovne upotrebe treba dobro zagrejati.
            Sirovo povrće i prizemno voće pred upotrebu dobro oprati pod mlazom
            vode.
            <br />
            Treba izbegavati i preveliko konzumiranje kofeina, jer može proći
            kroz placentu, a učinci na bebu nisu dovoljno poznati, kao ni efekti
            koji biljni čajevi mogu imati na bebu.
            <br />
            Trudnica ni pod kojim okolnostima ne sme konzumirati alkohol, jer
            nijedna studija nije utvrdila nivo alkohola koji je dokazano siguran
            tokom trudnoće. Alkohol povećava rizik od mrtvorođenih beba i
            pobačaja. Takođe može uzrokovati fetalni alkoholni sindrom što može
            rezultovati razvojem intelektualnih smetnji, kao i deformacijama na
            licu.
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
