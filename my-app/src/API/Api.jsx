// import { getUserName } from "../Redux/sliceUsername";
// import { useDispatch } from "react-redux";
/*
// accéder à un profil
export const getProfil = async (token) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const loginFetchResponse = await fetch(URL_API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        method: "POST"
    }).then((response) => response.json());

    return await getProfil(loginFetchResponse);
}
*/
// mise à jour d'un profil
/*export const saveUserProfil = async (newUsername) => {
    const postNewUsername = {"username": newUsername}
    const URL_API = "http://localhost:3001/api/v1/user/profile";
console.log(newUsername);
    const saveUserProfilResponse = await fetch(URL_API, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        method: "PUT",
        body: JSON.stringify(postNewUsername)
    }).then((response) => response.json());

    return await saveUserProfil(saveUserProfilResponse);
}
*/
export async function saveUserProfil(newUsername) {
    // Créer une requête HTTP
    const postNewUsername = {"userName": newUsername}
    const URL_API = "http://localhost:3001/api/v1/user/profile";
console.log(newUsername);
    const saveUserProfilResponse = await fetch(URL_API, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        method: "PUT",
        body: JSON.stringify(postNewUsername)
    }).then((response) => response.json());
}