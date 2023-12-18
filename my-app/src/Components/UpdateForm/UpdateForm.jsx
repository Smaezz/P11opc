import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserJWT } from "../../utils/redux/selectors";
import { updateUser } from "../../utils/redux/reducers";
import Api from "../../utils/api/Api";


function UpdateForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectUserJWT);
  const [formIsLocked, setFormIsLocked] = useState(true);
  const [firstName, setFirstNameInput] = useState("");
  const [lastName, setLastNameInput] = useState("");
  const [userName, setUserNameInput] = useState("");

  const request = async () => {
    const req = await new Api().updateRequest(userName, token);

    if (req.status === 200) {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const userName = req.body.userName;
      dispatch(updateUser({ firstName, lastName, userName}));
      setFormIsLocked(true);
    }
  };

  return (
    <div className="header">
      <h1 id="padding">Welcome back</h1>
      <h2>
          {user.userName}
          </h2>
      {formIsLocked ? (
        <div>
          
          <button
            className="edit-button"
            onClick={() => setFormIsLocked(!formIsLocked)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <div className="updateform_inputs">
          <label htmlFor="firstName" id="labelSignin">Firstname</label>
            <input name="firstName"
              type="text"
              placeholder={user.firstName}
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
            <label htmlFor="lastName" id="labelSignin">Lastname</label>
            <input name="lastName"
              type="text"
              placeholder={user.lastName}
              onChange={(e) => setLastNameInput(e.target.value)}
            />
            <label htmlFor="userName" id="labelSignin">Username</label>
            <input name="userName"
              type="text"
              placeholder={user.userName}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>
          <div>
            <button className="edit-button" onClick={() => request()}>
              Save
            </button>
            <button
              className="edit-button"
              onClick={() => setFormIsLocked(!formIsLocked)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateForm;
