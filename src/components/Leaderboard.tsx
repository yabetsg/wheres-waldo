import { useEffect, useState } from "react";
import nav from '../assets/nav.png'
import {
  getDatabase,
  ref,
  child,
  get,
} from "firebase/database";
import { Link } from "react-router-dom";
interface Leaderboard {
  user: string;
  time: string;
}
export const Leaderboard = () => {
  const [leaderboardData, setLeaderBoardData] = useState<Array<Leaderboard>>(
    []
  );

  const getLeaderBoardData = () => {
    const dbRef = ref(getDatabase());
    let res: any;
    get(child(dbRef, "leaderboard"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          res = snapshot.val();
          const storedData = [];

          for (const key of Object.keys(res)) {
            const data = res[key];
            storedData.push(data);
          }

          storedData.sort((a, b) => {
            const timeA = a.time;
            const timeB = b.time;
            if (timeA < timeB) {
              return -1;
            }
            if (timeA > timeB) {
              return 1;
            }
            return 0;
          });
          
          setLeaderBoardData(storedData);
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getLeaderBoardData();
  }, []);

  return (
    <>
      <nav className="flex">
        <div className="flex items-center gap-5">
          <img
            className="w-16 h-16"
            src={nav}
            alt=""
          ></img>
          <Link to={"/"}>
            <nav className="font-[ui-sans-serif,DodgyUltraUltra] text-3xl">
              <span className="text-blue-500">Wheres</span>
              <span className="text-red-500"> Waldo?</span>
            </nav>
          </Link>
        </div>
      </nav>
      <div className="w-fit  font-[ui-sans-serif,DodgyUltraUltra] text-4xl pl-14 text-red-500  underline-offset-4 mx-auto ">
        Leaderboard
        <span className="block mx-auto text-blue-500 border-b-4 border-blue-500"></span>
      </div>

      <div className="overflow-hidden p-14 sm:rounded-lg ">
        <table className="min-w-full text-black rounded-lg shadow">
          <thead className="bg-gray-200">
            <tr className="h-11">
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="text-center border">
            {leaderboardData.map((data, index) => {
              return (
                <tr className="h-11 hover:bg-slate-50" key={index}>
                  <td className="border-b">{data.user}</td>
                  <td className="border-b">{data.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
