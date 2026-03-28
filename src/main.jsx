import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/config.js";
import Layout from "./Layout.jsx";
import "./Styles/index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import HomePage from "./Pages/HomePage.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import AgroSchool from "./Pages/AgroSchool.jsx";
import Partners from "./Pages/Partners.jsx";
import News from "./Pages/News.jsx";
import Contacts from "./Pages/Contacts.jsx";
import NewsItemPage from "./Pages/NewsItemPage.jsx";
import Chat from "./Pages/Chat.jsx";
import Demo from "./Pages/Demo.jsx";

import { action as contactAction } from "./Data Fetching/ContactsData.js";
import {
  loader as ProjectsLoader,
  action as ProjectsAction,
} from "./Data Fetching/ProjectsData.js";
import { loader as PartnersLoader } from "./Data Fetching/PartnersData.js";
import { loader as AboutLoader } from "./Data Fetching/AboutData.js";
import { loader as NewsLoader } from "./Data Fetching/NewsData.js";
import { loader as NewsItemLoader } from "./Data Fetching/NewsItemData.js";
import { loader as HomeLoader } from "./Data Fetching/HomeData.js";

import GlobalLanguageContextProvider from "./Contexts/LanguageGlobalContext.jsx";

import Admin from "./Pages/Admin/Admin.jsx";

import AdminNewsLayout from "./Pages/Admin/Admin News/AdminNewsLayout.jsx";
import AdminNews from "./Pages/Admin/Admin News/AdminNews.jsx";
import AdminNewsForm from "./Pages/Admin/Admin News/AdminNewsForm.jsx";

import AdminStatistics from "./Pages/Admin/AdminStatistics.jsx";

import AdminProjectsLayout from "./Pages/Admin/Admin Projects/AdminProjectsLayout.jsx";
import AdminProjects from "./Pages/Admin/Admin Projects/AdminProjects.jsx";

import {
  action as AdminNewsAction,
  loader as AdminNewsLoader,
} from "./Data Fetching/Admin/AdminNewsData.js";
import { loader as AdminStatisticsLoader } from "./Data Fetching/Admin/StatisticsData.js";
import {
  loader as AdminProjectsLoader,
  action as AdminProjectsAction,
} from "./Data Fetching/Admin/AdminProjectsData.js";
import AdminProjectsForm from "./Pages/Admin/Admin Projects/AdminProjectsForm.jsx";
import AdminPartnersLayout from "./Pages/Admin/Admin Partners/AdminPartnersLayout.jsx";
import AdminPartners from "./Pages/Admin/Admin Partners/AdminPartners.jsx";
import {
  action as AdminPartnersAction,
  loader as AdminPartnersLoader,
} from "./Data Fetching/Admin/AdminPartnersData.js";
import AdminAboutLayout from "./Pages/Admin/Admin About/AdminAboutLayout.jsx";
import AdminAbout from "./Pages/Admin/Admin About/AdminAbout.jsx";
import {
  action as AdminAboutAction,
  loader as AdminAboutLoader,
} from "./Data Fetching/Admin/AdminAboutData.js";
import AdminAboutForm from "./Pages/Admin/Admin About/AdminAboutForm.jsx";
import AdminPartnersForm from "./Pages/Admin/Admin Partners/AdminPartnersForm.jsx";
import AuthLayout from "./Pages/Auth/AuthLayout.jsx";
import Login from "./Pages/Auth/Login.jsx";
import { LoginAction } from "./Data Fetching/Auth/LoginData.js";
import Register from "./Pages/Auth/Register.jsx";
import { RegisterAction } from "./Data Fetching/Auth/RegisterData.js";
import { loader as AdminCheckAuthLoader } from "./Data Fetching/Admin/AdminCheckAuth.js";
import AdminContactsLayout from "./Pages/Admin/Admin Contacts/AdminContactsLayout.jsx";
import AdminContacts from "./Pages/Admin/Admin Contacts/AdminContacts.jsx";
import { loader as AdminContactsLoader } from "./Data Fetching/Admin/AdminContactsData.js";
import AdminCommentsLayout from "./Pages/Admin/Admin Comments/AdminCommentsLayout.jsx";
import AdminComments from "./Pages/Admin/Admin Comments/AdminComments.jsx";
import { loader as AdminCommentsLoader } from "./Data Fetching/Admin/AdminCommentsData.js";
import { Loader } from "./Data Fetching/LayoutData.js";
import { loader as ProjectsItemLoader } from "./Data Fetching/ProjectsItemData.js";
import ProjectsItemPage from "./Pages/ProjectsItemPage.jsx";
import AdminContactInfoLayout from "./Pages/Admin/Admin Contact Info/AdminContactInfoLayout.jsx";
import AdminContactInfo from "./Pages/Admin/Admin Contact Info/AdminContactInfo.jsx";

import { loader as ContactInfoLoader } from "./Data Fetching/Admin/ContactInfoData.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    loader: Loader,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: HomeLoader,
      },
      {
        path: "about",
        Component: About,
        loader: AboutLoader,
      },
      {
        path: "projects",
        Component: Projects,
        action: ProjectsAction,
        loader: ProjectsLoader,
      },
      {
        path: "Projects/:id",
        Component: ProjectsItemPage,
        loader: ProjectsItemLoader,
      },
      {
        path: "agroschool",
        Component: AgroSchool,
      },
      {
        path: "partners",
        Component: Partners,
        loader: PartnersLoader,
      },
      {
        path: "News",
        Component: News,
        loader: NewsLoader,
      },
      {
        path: "News/:id",
        Component: NewsItemPage,
        loader: NewsItemLoader,
      },
      {
        path: "Contacts",
        Component: Contacts,
        action: contactAction,
      },
    ],
  },
  {
    path: "chat/:id?",
    Component: Chat,
  },
  {
    path: "demo",
    Component: Demo,
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
        action: LoginAction,
      },
      {
        path: "register",
        Component: Register,
        action: RegisterAction,
      },
      {
        path: "admin/register",
        Component: Register,
        action: RegisterAction,
      },
    ],
  },
  {
    path: "/admin",
    Component: Admin,
    loader: AdminCheckAuthLoader,
    children: [
      {
        index: true, // Это будет срабатывать при /admin
        element: <Navigate to="statistics" replace />, // Редиректим на /admin/statistics
      },
      {
        path: "statistics",
        Component: AdminStatistics,
        loader: AdminStatisticsLoader,
      },
      {
        path: "news",
        Component: AdminNewsLayout,
        children: [
          {
            index: true,
            Component: AdminNews,
            loader: AdminNewsLoader,
          },
          {
            path: "new",
            Component: AdminNewsForm,
            action: AdminNewsAction,
          },
        ],
      },
      {
        path: "projects",
        Component: AdminProjectsLayout,
        children: [
          {
            index: true,
            Component: AdminProjects,
            loader: AdminProjectsLoader,
          },
          {
            path: "new",
            Component: AdminProjectsForm,
            action: AdminProjectsAction,
          },
        ],
      },
      {
        path: "partners",
        Component: AdminPartnersLayout,
        children: [
          {
            index: true,
            Component: AdminPartners,
            loader: AdminPartnersLoader,
          },
          {
            path: "new",
            Component: AdminPartnersForm,
            action: AdminPartnersAction,
          },
        ],
      },
      {
        path: "about",
        Component: AdminAboutLayout,
        children: [
          {
            index: true,
            Component: AdminAbout,
            loader: AdminAboutLoader,
          },
          {
            path: "new",
            Component: AdminAboutForm,
            action: AdminAboutAction,
          },
        ],
      },
      {
        path: "contacts",
        Component: AdminContactsLayout,
        children: [
          {
            index: true,
            Component: AdminContacts,
            loader: AdminContactsLoader,
          },
        ],
      },
      {
        path: "comments",
        Component: AdminCommentsLayout,
        children: [
          {
            index: true,
            Component: AdminComments,
            loader: AdminCommentsLoader,
          },
        ],
      },
      {
        path: "contact-info",
        Component: AdminContactInfoLayout,
        children: [
          {
            index: true,
            Component: AdminContactInfo,
            loader: ContactInfoLoader,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalLanguageContextProvider>
      <RouterProvider router={router} />
    </GlobalLanguageContextProvider>
  </StrictMode>
);
