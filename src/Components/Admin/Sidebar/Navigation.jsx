import NavLinkListItem from "./NavLinkListItem";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLinkListItem to={"statistics"}>Статистика</NavLinkListItem>
        <NavLinkListItem to={"news"}>Новости</NavLinkListItem>
        <NavLinkListItem to={"projects"}>Проекты</NavLinkListItem>
        <NavLinkListItem to={"partners"}>Партнеры</NavLinkListItem>
        <NavLinkListItem to={"about"}>Детали компании</NavLinkListItem>
        <NavLinkListItem to={"contacts"}>Входящие контакты</NavLinkListItem>
        <NavLinkListItem to={"comments"}>Обращения по проектам</NavLinkListItem>
        <NavLinkListItem to={"contact-info"}>Контакты компании</NavLinkListItem>
      </ul>
    </nav>
  );
};

export default Navigation;
