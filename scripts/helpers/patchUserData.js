export const patchUserData = async (url, id, data) => {
  console.log(id)
  const endpoint = `${url}/${id}`
  try {
    await fetch(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      alert("Elemento modificado")
    );
  } catch (error) {
    console.error("Error fetching data")
  }
}