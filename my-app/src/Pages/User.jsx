
import "../Components/profilEdit/profilEdit.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUserProfil } from "../API/Api";
import { getUserName } from "../Redux/sliceUsername";
import { Navigate } from "react-router-dom";


const User = () => {
// Use State
let [newUsername, setNewUsername] = useState("");

// Use Selector / Use Effect
const dispatch = useDispatch();
const username = useSelector((state) => state.usernameSlice);
const token = useSelector((state) => state.tokenSlice);
console.log(token);
console.log(username);
/** 
useEffect(() => {
    const user = getLoginFetch(token);
    user.then(obj => {
        dispatch(getFirstName(obj.firstName));
        dispatch(getLastName(obj.lastName));
    });
}, []);
*/

// Edit name
const handleEdit = () => {
    document.getElementById("fullName").style.display = "none";
    document.getElementById("edit-button").style.display = "none";
    document.getElementById("edit-section").style.display = "block";
}


// Save Edit
const handleEditSave = () => {
    document.getElementById("fullName").style.display = "block";
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
    dispatch(getUserName(newUsername));
    saveUserProfil(token,username);
}

// Cancel Edit
const handleEditCancel = () => {
    document.getElementById("fullName").style.display = "block";
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
}

// Redirection
if(token === 0) return <Navigate to="/login" />

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />
          <span id="fullName">{username.value}</span>
          </h1>
          <button className="edit-button" id="edit-button" onClick={handleEdit}>Edit Name</button>
        </div>
        <div id="edit-section">
          <form className="edit" name="edit">
            <div className="profil-input-wrapper">
              <input type="text" placeholder="" />
            </div>
            <div className="profil-input-wrapper">
              <input type="text" placeholder="" />
            </div>
            <div className="profil-input-wrapper">
              <input type="text" placeholder={newUsername} onChange={e => setNewUsername(e.target.value)} required />
            </div>
          </form>
          <div className="btn-form">
            <button type="submit" className="save-button" onClick={handleEditSave}>Save</button>
            <button type="button" className="cancel-button" onClick={handleEditCancel}>Cancel</button>
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

    </>
  );
};
export default User;