console.clear();

const userElement = document.querySelector(".user");
const errorMessageElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error");
    errorMessageElement.textContent = "Network error";
    userElement.textContent = "";
    return null;
  }
  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    errorMessageElement.textContent = "Ooops something went wrong.";
    userElement.textContent = "";
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);

    if (!user) {
      console.error("User not found");
      return;
    }

    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
