import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { HiDocumentDuplicate } from "react-icons/hi";


export const SidebarData = [
  {
    title: "Candidats",
    path: "/candidat",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "véhicules",
    path: "/véhicule",
    icon: <AiIcons.AiFillCar />,
    cName: "nav-text",
  },
  {
    title: "calendrier",
    path: "/calendrier",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
  
  {
    title: "Documents de bord ",
    path: "/document",
    icon: <AiIcons.AiFillTool />,
    cName: "nav-text",
  },
  {
    title: "Employés",
    path: "/employé",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Se deconnecter",
    path: "/",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
];
