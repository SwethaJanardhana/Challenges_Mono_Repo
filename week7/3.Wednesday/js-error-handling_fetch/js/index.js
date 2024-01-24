console.clear();

const userElement = document.querySelector(".user");
const errorMessageElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      errorMessageElement.innerHTML = "";
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
    } catch (error) {
      userElement.innerHTML = "";
      errorMessageElement.innerHTML = `Cannot fetch this user details : ${error}`;
    }
  })
);
