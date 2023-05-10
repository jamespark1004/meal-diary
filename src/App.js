import { Route, Routes } from "react-router-dom";
import AdditionPage from "./pages/AdditionPage";
import ListPage from "./pages/ListPage";
import { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (date, time, menu) => {
    const newItem = {
      date,
      time,
      menu,
      id: dataId.current,
    };
    dataId.current += 1; // item 추가 될때마다 id 1씩 추가
    setData([newItem, ...data]);
  };

  return (
    <Routes>
      <Route path="/" element={<AdditionPage onCreate={onCreate} />} />
      <Route path="/list" element={<ListPage lists={data} />} />
    </Routes>
  );
};

export default App;
