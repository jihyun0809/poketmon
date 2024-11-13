import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PoketmonList from "../components/PoketmonList";

const Dex = () => {
  const [data, setData] = useState([]);

  const addPoketmon = (newPoketmon) => {
    if (
      data.find((poketmon) => poketmon.korean_name === newPoketmon.korean_name)
    ) {
      alert("이 포켓몬은 이미 데리고 있어요!");
    } else if (data.length < 6) {
      setData([...data, newPoketmon]);
    } else {
      alert("포켓몬은 최대 6마리만 데리고 갈 수 있어요!");
    }
  };

  return (
    <div>
      <Dashboard data={data} setData={setData} />
      <PoketmonList data={data} addPoketmon={addPoketmon} />
    </div>
  );
};

export default Dex;
