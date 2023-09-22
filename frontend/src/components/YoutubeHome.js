import YoutubeForm from "./YoutubeForm";
import HomeHeader from "./HomeHeader";
import { useState } from "react";

const YoutubeHome = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [queryWord, setQueryWord] = useState("");

  const storeYoutubeLink = (link) => {
    setYoutubeLink(link);
  };

  const storeQueryWord = (word) => {
    setQueryWord(word);
  };

  return (
    <>
      <HomeHeader />
      <YoutubeForm storeLink={storeYoutubeLink} storeWord={storeQueryWord} />
    </>
  );
};

export default YoutubeHome;
