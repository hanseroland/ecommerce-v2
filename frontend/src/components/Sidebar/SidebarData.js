import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import {Badge} from '@material-ui/core';



export const SidebarData = [
  {
    title: 'Accueil',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Nouveautés',
        path: '/detail-categorie',
        icon: <AiIcons.AiFillStar />
      },
      {
        title: 'Tendances',
        path: '/detail-categorie',
        icon: <BiIcons.BiTrendingUp />
      },
      {
        title: 'Promotions',
        path: '/detail-categorie',
        icon: <BiIcons.BiTrendingDown />
      }
    ]
  },
  {
    title: 'Catégories',
    path: '#',
    icon: <BiIcons.BiSelectMultiple />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Homme',
        path: '/categories/homme',
        icon: <IoIcons.IoMdMan />,
        cName: 'sub-nav'
      },
      {
        title: 'Femme',
        path: '/categories/femme',
        icon: <GiIcons.GiAmpleDress />,
        cName: 'sub-nav'
      },
      {
        title: 'Enfant',
        path: '/categories/enfant',
        icon: <FaIcons.FaChild />
      },
      {
        title: 'Cuisine et maison',
        path: '/categories/maison',
        icon: <MdIcons.MdKitchen />
      },
      {
        title: 'High-Tech',
        path: '/categories/high-tech',
        icon: <FaIcons.FaMobileAlt />
      },
      {
        title: 'Sport',
        path: '/categories/sport',
        icon: <BiIcons.BiFootball />
      },
      {
        title: 'Hygiène et santé',
        path: '/categories/hygiene',
        icon: <GiIcons.GiHealing />
      },
      {
        title: 'Beauté et bien-être',
        path: '/categories/beaute',
        icon: <GiIcons.GiPerfumeBottle />
      }
    ]
  },
  {
    title: 'Panier',
    path: '/panier',
    icon: <AiIcons.AiOutlineShoppingCart  />
       
  },
 
  {
    title: 'Paramètres',
    path: '#',
    icon: <AiIcons.AiFillSetting />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Aide',
        path: '/aide',
        icon: <FaIcons.FaQuestion />
      },
      {
        title: 'Se connecter',
        path: '/connexion',
        icon: <AiIcons.AiOutlineLogin />
      },
      {
        title: "S'inscrire",
        path: '/inscription',
        icon: <SiIcons.SiGnuprivacyguard />
      },
      {
        title: "Favoris",
        path: '/favoris',
        icon: <FaIcons.FaHeart />
      }
    ]
  },
  
]; 