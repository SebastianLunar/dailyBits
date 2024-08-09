export const postUserData = async (url, data) => {
  try {
    await fetch(`${url}users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      alert("Usuario creado")
    ).then(
       window.location.href = "../../index.html"
    );
  } catch (error) {
    console.error("Error fetching data")
  }
}