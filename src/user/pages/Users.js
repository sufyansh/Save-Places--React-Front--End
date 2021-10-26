import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Sufyan Shaikh',
      image:
        'https://lh3.googleusercontent.com/JNHDLN0-aJB5arEYZ8UXlaNhPV5iv6bWzzTFbTojZY07wmjkfGTKTHJ30mHo0HiNKsvmoQto2qlLHV1VEqB1YAjS_4-wxKh3Kg1ANI1UumsTjFQ5JN9GwpFe4kh1P7kQVElw7lr-JoMIy8U2tqYQHRyirCmPOQEvtW95QU1tIgbiMu6mY6hcdNUNWGiZNxp3GJVmzw9ATmSwRFWTmAqI631w57YETTeON_m5ylSh3gts1TJ_5nGtI8Sr4BZXXC6c0RXodN6IZQ11BAvpLrADn-2NJgNL9GMg5V32UmTiUgWKD1RcRM0HCjw9f_4qCY-qNcUkgIPRCkq0DnK_kdCaLpMuFsTIwQ7VTV_c6KB9lG-nXiOd2GSP1ZZsOlqC0vDZTtH74Y3wNlW6k3MqXk5ztE0TsfRwDFeCWqM3tcvlEnCaRoVlQhB2g4ZGGD-ipYONf4VbTxAnpRzUWyHFZDhg40MY0Ix7Ylpc2Z2WXfU0ZTSr1PY74k4xuiGeuFAqfc4MFq97CrJTRQG--3JSaGCxiFlsyNR1F8Gm4i2zYnaaLAXrAC0wBgexSCBzRmm3OCLAIIP9Q0HFuCmqXvyi9TNmBmyfOJ0KQOHquvbJGWDZVs_gaZ6LZOaL-Fy0VXlXmOMB6L0hE7AOh8Nt_qQx6qxJzko69yvu9kOQYTVYphseVJwdpmZNvG57eMG2UMPT5YNBTH0df192GHT6fPoIxp5y0pxi=w320-h568-no?authuser=0',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
