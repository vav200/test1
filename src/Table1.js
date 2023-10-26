export default function Table1() {
  function gettable() {
    fetch("https://technical-task-api.icapgroupgmbh.com/api/table/")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.results.map((item) => <li>{item.name}</li>);
      });
  }
  return (
    <>
      <h1>Таблица</h1>
    </>
  );
}
