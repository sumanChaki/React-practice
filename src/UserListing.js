import React, { useEffect, useState } from "react";

const UserListing = () => {

    const [userList, setUserList] = useState([
      {
        id: 1,
        userName: "Suman Chaki",
        age: 35,
        location: "Konnagar",
        userImage: "https://picsum.photos/200/300?image=0",
      },
      {
        id: 2,
        userName: "Sandip Nag",
        age: 40,
        location: "Dumdum",
        userImage: "https://picsum.photos/200/300?image=1",
      },
      {
        id: 3,
        userName: "Malay Dey",
        age: 20,
        location: "Kolkata",
        userImage: "https://picsum.photos/200/300?image=2",
      },
      {
        id: 4,
        userName: "Joy Deb",
        age: 50,
        location: "Mumbai",
        userImage: "https://picsum.photos/200/300?image=3",
      },
    ]);

    useEffect( () => {
        console.log(userList);
    }, [userList])

    const selectUser = (userId, userAge) => {
      // setUserList((prev) => prev.map((user) => user.id == userId ? { ...user, selected : user.hasOwnProperty("selected") ? !user.selected : true} : user));
      alert(userAge);
      setUserList((prev) =>
        prev.map((user) =>
          user.id == userId
            ? { ...user, selected: true }
            : { ...user, selected: false }
        )
      );
    }

    return (
      <div className="container">
        <div className="card-item-wrapper">
          {userList.map((user, index) => {
            let { age, id, location, userImage, userName } = user;
            return (
              <div
                key={index}
                className={`card-item ${
                  user.hasOwnProperty("selected") && user.selected ? "active-item" : ""
                }`}
                onClick={() => selectUser(id, age)}
              >
                <h3>{userName}</h3>
                <p>{age}</p>
                <p>{location}</p>
                <p>
                  <img src={userImage} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );

}

export default UserListing;