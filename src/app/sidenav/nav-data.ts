import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Home'
  },
    {
      routeLink: 'products',
      icon: 'fas fa-chalkboard-teacher',
      label: 'Sua Jornada',

    },
 {
  routeLink: 'statistics',
  icon: 'fal fa-bullhorn',
  label: 'Fale com o RH'
},
{
  routeLink: 'coupens',
  icon: 'fal fa-tags',
  label: 'Benefícios',
  items:[
    {
      routeLink: 'coupens/list',
      label: 'Beneficios 1'
    },
    {
      routeLink: 'coupens/create',
      label: 'Beneficios 2'
    }

  ]
},
{
  routeLink: 'pages',
  icon: 'fal fa-graduation-cap',
  label: 'Plataforma de Ensino'
},
{
  routeLink: 'media',
  icon: 'fal fa-clock',
  label: 'CertPonto'
},
{
  routeLink: 'settings',
  icon: 'fas fa-glasses',
  label: 'My Career'
},

];
