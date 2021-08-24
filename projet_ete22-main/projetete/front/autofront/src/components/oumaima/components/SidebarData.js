import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';
 export const SidebarData = [
   {
     title: "Acceuil",
     path: "/client",
     icon: <AiIcons.AiFillHome />,
     cName: "nav-text",
   },
   {
     title: "Mon Profil",
     path: "/Userprofile",
     icon: <CgIcons.CgProfile />,
     cName: "nav-text",
   },
   {
     title: "Mes Séances",
     path: "/Demo",
     icon: <AiIcons.AiOutlineCalendar />,
     cName: "nav-text",
   },
   {
     title: "Cours",
     path: "/Cours",
     icon: <FaIcons.FaBook />,
     cName: "nav-text",
   },
   {
     title: "Test Gratuit",
     path: "/TestGratuit",
     icon: <AiIcons.AiFillStar />,
     cName: "nav-text",
   },

   {
     title: "Se déconnecter",
     path: "/deconnexion",
     icon: <MdIcons.MdPayment />,
     cName: "nav-text",
   },
 ];