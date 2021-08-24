import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { HiDocumentDuplicate } from "react-icons/hi";


export const SidebarEmployé = [
  {
    title: "Candidats",
    path: "/candidat",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <AiIcons.AiFillCar />,
    cName: "nav-text",
  },
  {
    title: "Se deconnecter",
    path: "/",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
];
