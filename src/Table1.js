import { useEffect, useState } from "react";

export default function Table1() {
  const [data, setData] = useState([
    // { name: "John", email: "sfaf@dfgdf" },
    // { name: "Sara", email: "iubsdfi@kkk" },
    // { name: "Piete", email: "hjdiokr@lockc" },
    // { name: "Vliam", email: "4587@nhj" },
    // { name: "Bob", email: "bbb@hgj" },
  ]);

  console.log(data);

  useEffect(() => {
    fetch("https://technical-task-api.icapgroupgmbh.com/api/table/?format=api&offset=10")
      .then((data) => data.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  });

  function sortName() {
    let sortdat = [...data];
    sortdat.sort((a, b) => (a.name > b.name ? 1 : -1));
    setData(sortdat);
  }

  function sortMail() {
    let sortdat = [...data];
    sortdat.sort((a, b) => (a.email > b.email ? 1 : -1));
    setData(sortdat);
  }

  return (
    <>
      <h1>Таблица</h1>
      <table>
        <thead>
          <td className="td" onClick={sortName}>
            Имя
          </td>
          <td className="td" onClick={sortMail}>
            Почта
          </td>
        </thead>
        <tbody>
          {data.map((item, ind, arr) => (
            <tr key={ind}>
              <td className="td">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    setData((d) =>
                      d.map((el, i) => (i === ind ? { ...el, name: e.target.value } : el))
                    )
                  }
                />
              </td>
              <td className="td">
                <input
                  type="text"
                  value={item.email}
                  onChange={(e) =>
                    setData((d) =>
                      d.map((el, i) => (i === ind ? { ...el, email: e.target.value } : el))
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
