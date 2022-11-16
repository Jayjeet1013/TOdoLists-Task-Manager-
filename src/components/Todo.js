import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }
  return (
    <>
      <div className="container">
        <div className="head">Task Manager</div>
        <div className="heading">Add your Task</div>

        <input
          type="text"
          placeholder="Write your task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addActivity}>Add</button>

        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <div>
                    <button onClick={() => removeActivity(i)}>remove</button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
      <div className="footer">Made by @Jayjeet</div>
    </>
  );
}

export default Todo;
