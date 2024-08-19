/* eslint-disable react/no-unescaped-entities */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useTranslation } from 'react-i18next';

export default function SelectLang() {

  const { t } = useTranslation();

  const [til, setTil] = useState('');
  
  const til1 = window.localStorage.getItem('til1');
  const til2 = window.localStorage.getItem('til2');

  const handleChange = (event) => {
    let til_event = event.target.value;

    if(til_event == "kaa_latin") {
      setTil("kaa_cyrillic")
      window.localStorage.setItem("til1", "kaa_latin")
      window.localStorage.setItem("til2", "kaa_cyrillic")
    } else if (til_event == "kaa_cyrillic") {
      setTil("kaa_latin")
      window.localStorage.setItem("til2", "kaa_latin")
      window.localStorage.setItem("til1", "kaa_cyrillic")
    } else if(til_event == "uz_latin") {
      setTil("uz_cyrillic")
      window.localStorage.setItem("til1", "uz_latin")
      window.localStorage.setItem("til2", "uz_cyrillic")
    } else if(til_event == "uz_cyrillic") {
      setTil("uz_latin")
      window.localStorage.setItem("til2", "uz_latin")
      window.localStorage.setItem("til1", "uz_cyrillic")
    }
  };

  function swapSelectLang() {
    if(til1 == "kaa_latin") {
      setTil("kaa_latin")
      window.localStorage.setItem("til2", "kaa_latin")
      window.localStorage.setItem("til1", "kaa_cyrillic")
    } else if (til1 == "kaa_cyrillic") {
      setTil("kaa_cyrillic")
      window.localStorage.setItem("til1", "kaa_latin")
      window.localStorage.setItem("til2", "kaa_cyrillic")
    } else if(til1 == "uz_latin") {
      setTil("uz_latin")
      window.localStorage.setItem("til2", "uz_latin")
      window.localStorage.setItem("til1", "uz_cyrillic")
    } else if(til1 == "uz_cyrillic") {
      setTil("uz_cyrillic")
      window.localStorage.setItem("til1", "uz_latin")
      window.localStorage.setItem("til2", "uz_cyrillic")
    }
  }

  return (
    <div className='select-lang-container'>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={handleChange}
          title={t("input_text_language")}
          value={til1 === "kaa_latin" ? til1 : til1 === "kaa_cyrillic" ? til1 : til1 === "uz_latin" ? til1 : "uz_cyrillic"}
        >
          <MenuItem value="kaa_latin">Qaraqalpaqsha Latin</MenuItem>
          <MenuItem value="kaa_cyrillic">Qaraqalpaqsha Krill</MenuItem>
          <MenuItem value="uz_latin">O'zbekcha Lotin</MenuItem>
          <MenuItem value="uz_cyrillic">O'zbekcha Krill</MenuItem>
        </Select>
      </FormControl>
      <div className="swap"onClick={swapSelectLang}>
        <SwapHorizIcon />
      </div>
      <FormControl sx={{ m: 1, minWidth: 120, margin: { sm: "0", xs: "0" } }}>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          title={t("translated_text_language")}
          value={til2 === "kaa_latin" ? til2 : til2 === "kaa_cyrillic" ? til2 : til2 === "uz_cyrillic" ? til2 : "uz_latin"}
          disabled
        >
          <MenuItem value="kaa_latin">Qaraqalpaqsha Latin</MenuItem>
          <MenuItem value="kaa_cyrillic">Qaraqalpaqsha Krill</MenuItem>
          <MenuItem value="uz_latin">O'zbekcha Lotin</MenuItem>
          <MenuItem value="uz_cyrillic">O'zbekcha Krill</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}