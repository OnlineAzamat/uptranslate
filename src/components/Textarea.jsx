import axios from "axios";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function Textarea({ langFrom, langTo, transType }) {
  const { t } = useTranslation();

  const [juwap, setJuwap] = useState("")
  const [clean, setClean] = useState(null)
  const [text, setText] = useState('');

  function translate(e) {
    const data = {
      "body": {
        "lang_from": langFrom,
        "lang_to": langTo,
        "text": e.target.value
      }
    }

    axios.post(`https://api.from-to.uz/api/v1/${transType}`, data)
      .then(res => {
        setJuwap(res?.data?.result);
      })
      .catch(err => {
        console.log(err)
      })

    setText(e.target.value)

    e.target.style.borderColor = e.target.value.length >= 99 ? 'red' : 'black'
    setClean(e.target.value.length >= 1 ? <span className="clean"><i className="bi bi-x-lg"></i></span> : null)
  }
  
  function tekser() {
    textarea1Ref.current.value = "";
    setJuwap("");
    setText("");
    setClean(null)
  }

  function pasteText() {
    navigator.clipboard.readText()
      .then(cliptext => textarea1Ref.current.value = cliptext)
    console.log(navigator.clipboard.readText())
  }
  function copyText() {
    navigator.clipboard.writeText(textarea2Ref.current.value)
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const textarea1Ref = useRef(null);
  const textarea2Ref = useRef(null);

  const handleScroll = () => {
    setScrollPosition(textarea1Ref.current.scrollTop);
    textarea2Ref.current.scrollTop = textarea1Ref.current.scrollTop;
  }

  return (
    <div className="textarea-wrapper">
      <Box sx={{ position: "relative", width: "100%", padding: "0.7rem 2rem 2rem 0.7rem", borderRadius: "1rem", border: "1px solid black", height: { md: "500px", sm: "300px", xs: "220px"} }}>
        <span onClick={tekser}>
          {
            clean
          }
        </span>
        <textarea 
          placeholder={t("enter_text")}
          maxLength={5000}
          onChange={translate}
          onPaste={translate}
          onScroll={handleScroll}
          ref={textarea1Ref}
        /> 
        <div className="text-control">
          <div className="paste-copy" onClick={pasteText}><ContentPasteIcon />{t("paste")}</div>
          <div className="limit" style={{ userSelect: "none" }}>{text.length} / 5000</div> 
        </div>
      </Box>
      <Box sx={{ position: "relative", padding: "0.7rem 2rem 2rem 0.7rem", borderRadius: "1rem", width: "100%", border: "1px solid #fff", height: { md: "500px", sm: "300px", xs: "220px"}, background: "#efefef" }}>
        <textarea value={juwap} placeholder={t("translate")} ref={textarea2Ref} scrolltop={scrollPosition} readOnly></textarea>
        <div className="text-control">
          <div className="paste-copy" onClick={copyText}><ContentCopyIcon />{t("copy")}</div>
        </div>
      </Box>
    </div>
  )
}

export default Textarea;