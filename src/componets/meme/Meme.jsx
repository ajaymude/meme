import axios from "axios";
import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import styles from './Meme.module.css'

const Meme = () => {
  const [Meme1, setMeme1] = useState();
  const [Show, setShow] = useState(false);
  const [MetaData, setMetaData] = useState();

  const getmemes = async () => {
    const { data } = await axios.get(" https://meme-api.com/gimme/100");
    const Memes = await data.memes;
    await setMeme1(Memes);
  };

  useEffect(() => {
    getmemes();
  }, []);

  return (
    <div className={styles.container}>
      {Show !== true && (
        <div className={styles.container}>
          {Meme1?.map((item, index) => (
            <div key={index} className={styles.child}>
              <img src={item.preview[2]} />
              <button onClick={() =>{ setShow(true) ; setMetaData(item) ;  }}  >show </button>
            </div>
          ))}
        </div>
      )}

      {
        Show == true && <MemeCard  setShow={setShow}  MetaData={MetaData} />
      }
    </div>
  );
};

export default Meme;
