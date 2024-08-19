import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Textarea from "./Textarea";
import SelectLang from "./kaa_uz_components/SelectLang";
import Navbar from "./Navbar";

const Home = () => {

  const [langFrom, setLangFrom] = useState('');
  const [langTo, setLangTo] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLangFrom = window.localStorage.getItem("til1");
      const newLangTo = window.localStorage.getItem("til2");
      setLangFrom(newLangFrom);
      setLangTo(newLangTo);
    }, 1000);

    return () => clearInterval(intervalId); // cleanup when component unmounts
  }, []);

  return (
    <Box sx={{ 
        padding: { xs: "10px" }, 
        background: window.localStorage.getItem("theme") == "light" ? "#fff" : "000", 
        minHeight: "100vh" }}>
      <Navbar />

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        padding: { lg: '1vw', sm: '10px' }
      }}>
        <Box>
          <SelectLang />
        </Box>
        <Textarea langFrom={langFrom} langTo={langTo} transType={"translate"} />
      </Box>
    </Box>
  )
}

export default Home