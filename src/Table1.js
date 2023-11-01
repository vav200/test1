import { useEffect } from "react";

export default function Table1() {
  // useEffect(() => {
  //   fetch("https://technical-task-api.icapgroupgmbh.com/api/table/")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  function getData() {
    fetch("https://technical-task-api.icapgroupgmbh.com/api/table/")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ));
      });
  }

  return (
    <>
      <h1>Таблица</h1>
      <table>{getData()}</table>
    </>
  );
}
