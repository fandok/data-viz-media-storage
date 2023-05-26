import { useCookies } from "react-cookie";

const data = [
  "Cara menjadi software engineer",
  "Apa saja framework pada javascript",
  "daftar lowongan frontend developer",
];

// document.cookie = "username=John Doe";

const Storage = () => {
  const [cookies, setCookies] = useCookies(["username"]);

  const onClickCookie = () => {
    setCookies("username", "John Wick");
  };

  const onClickLocal = () => {
    localStorage.setItem("searchHistory", JSON.stringify(data));
  };

  const onClickSession = () => {
    sessionStorage.setItem("searchHistory", JSON.stringify(data));
  };

  //   const searchHistoryString = localStorage.getItem("searchHistory");
  const searchHistoryString = sessionStorage.getItem("searchHistory");
  const searchHistory = JSON.parse(searchHistoryString);
  console.log(searchHistory);

  return (
    <div>
      <button onClick={onClickLocal}>tambah local storage</button>
      <button onClick={onClickSession}>tambah session storage</button>
      <div>{searchHistory}</div>
      <button
        onClick={() => {
          localStorage.removeItem("searchHistory");
        }}
      >
        hapus local storage
      </button>
      <button
        onClick={() => {
          sessionStorage.removeItem("searchHistory");
        }}
      >
        hapu session storage
      </button>
      <div>{cookies.username}</div>
      <button onClick={onClickCookie}>add cookie name</button>
    </div>
  );
};

export default Storage;
