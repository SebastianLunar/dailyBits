export const showNavbar = (cont) => {
  cont.innerHTML = `
     <ul>
      <li>
        <img src="../assets/home.png" alt="homeIcon"/>
        <a href="./home.html">Home</a>
      </li>
      <li>
        <img src="../assets/stats.png" alt="statsIcon"/>
        <a href="./stats.html">Estadísticas</a>
      </li>
      <li>
        <img src="../assets/profile.png" alt="profileIcon"/>
        <a href="./profile.html">Perfil</a>
      </li>
    </ul>
  `
}