/* eslint-disable react/no-unescaped-entities */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useTranslation } from 'react-i18next';

export default function SelectLang() {
  const { t } = useTranslation();

  // const [til, setTil] = useState('');
  
  const til1 = window.localStorage.getItem('til1');
  const til2 = window.localStorage.getItem('til2');

  const handleChange = (event) => {
    let til_event = event.target.value;

    if(til_event == "kaa") {
      // setTil("uz")
      window.localStorage.setItem("til1", "kaa")
      window.localStorage.setItem("til2", "uz")
    } else {
      // setTil("kaa")
      window.localStorage.setItem("til2", "kaa")
      window.localStorage.setItem("til1", "uz")
    }
  };

  function swapSelectLang() {
    if (til1 == "kaa") {
      // setTil("kaa")
      window.localStorage.setItem("til2", "kaa")
      window.localStorage.setItem("til1", "uz")
    } else {
      // setTil("uz")
      window.localStorage.setItem("til1", "kaa")
      window.localStorage.setItem("til2", "uz")
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
          value={til1 == "kaa" ? til1 : "uz"}
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
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
          value={til2 == "uz" ? til2 : "kaa"}
          disabled
        >
          <MenuItem value="kaa">Qaraqalpaqsha</MenuItem>
          <MenuItem value="uz">O'zbekcha</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}