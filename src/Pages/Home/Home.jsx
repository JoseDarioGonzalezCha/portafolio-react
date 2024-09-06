import {
  HomeContainer,
  ProfileImage,
  WelcomeTitle,
  ParagraphContainer,
  Highlight,
} from "./Home.styles";

import { useLanguage } from "../../contexts/LanguageContext";

const Home = () => {
  const { texts } = useLanguage();

  const highlightText = (text) => {
    const regex = /<highlight>(.*?)<\/highlight>/g;
    const parts = text.split(regex);
    return parts.map((part, index) =>
      index % 2 === 1 ? <Highlight key={index}>{part}</Highlight> : part
    );
  };

  return (
    <HomeContainer>
      <WelcomeTitle>
        {texts.home.title.map((paragraph, index) => (
          <p key={index}>{highlightText(paragraph)}</p>
        ))}
      </WelcomeTitle>
      <ProfileImage
        src="https://avatars.githubusercontent.com/u/75937414?v=4"
        alt="foto portfolio"
      />
      <ParagraphContainer>
        {texts.home.biography.map((paragraph, index) => (
          <p key={index}>{highlightText(paragraph)}</p>
        ))}
      </ParagraphContainer>
    </HomeContainer>
  );
};

export default Home;
