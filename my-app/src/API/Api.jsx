
// accéder à un profil
export const getProfil = async (token) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const loginFetchResponse = await fetch(URL_API, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "POST"
    }).then((response) => response.json());

    return await getProfil(loginFetchResponse);
}

// mise à jour d'un profil
export const saveUserProfil = async (token,username) => {
    const URL_API = "http://localhost:3001/api/v1/user/profile";

    const saveUserProfilResponse = await fetch(URL_API, { 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(username),
    }).then((response) => response.json());
    return await saveUserProfil(saveUserProfilResponse);
}