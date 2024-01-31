import { useTranslation } from "react-i18next"
import br from "./assets/br.svg"
import fr from "./assets/fr.svg"
import us from "./assets/us.svg"
import "./styles.css"

const languageOptions = [
  {
    name: "English",
    value: "en",
    flag: us
  },
  {
    name: "Français",
    value: "fr",
    flag: fr
  },
  {
    name: "Português",
    value: "ptBR",
    flag: br
  },
]

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div className="language-switcher">
        {languageOptions.map(languageOption => (
          <button
            key={languageOption.value}
            onClick={() => {
              i18n.changeLanguage(languageOption.value)
            }}
          >
            <img src={languageOption.flag} alt={languageOption.name} />
            <span>{languageOption.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}
