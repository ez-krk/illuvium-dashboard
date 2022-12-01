import React, { FC, useState, useContext, useEffect } from 'react';
import Image from 'next/image';

import axios, {isCancel, AxiosError} from 'axios';

import { leaderboardNextFetch } from '../../utils/supabase.utils';

import Spinner from 'components/spinner/spinner.component';

import { entries as mockData } from '../../utils/mock.json';

// import placeholder from '/placeholder.png';

const Table: FC = () => {
  let [isLoading, setLoading] = useState(false);
  let [data, setData] = useState([]);

  const date = new Date();
  const today = date.toISOString().split("T")[0];
  const URL = `https://api.illuvium-game.io/gamedata/sumo/leaderboard/${today}`;
  console.log(URL);


  useEffect(() => {
    try {
      setLoading(true);
      axios({
        method: 'get',
        url: URL,
        responseType: 'stream'
      })
        .then(function (response) {
          // console.log(response.data)
          const data = JSON.parse(response.data);
          const entries = data.entries;
          // console.log(data);
          console.log(entries);
          setData(entries);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  let x = 0;

  console.log(data);

  return (
    <>
      <div className='w-full flex justify-center items-center mx-auto'>
        <h1 className="text-center text-xl font-bold text-transparent bg-clip-text my-5 tracking-tight bg-gradient-to-tr from-[#9945FF] to-[#14F195] rgbg">
        Illuvium Leaderboard
        </h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto w-50 text-neutral">
          <table className="table w-full max-w-screen" id="illuvium-stats">
            {/* <!-- head --> */}
            <thead className="text-center ">
              <tr className="font-bold text-white">
                <th>Rank</th>
                <th>Player</th>
                <th>Mastery Points</th>
                <th>Illuvials Defeated</th>
                <th>Wave</th>
              </tr>
            </thead>
            {/* <!-- table body --> */}
            <tbody className="text-center">
              {/* <!-- row --> */}
              {data.map((entry) => {
                x++;
                return (
                  <tr key={entry.nickname}>
                    <td className="text-xs bg-white">#{x}</td>
                    <td className='bg-white'>
                      <div className="flex items-center justify-left">
                        <div className="avatar">
                          <div className="mask mask-hexagon w-12 h-12">
                            <Image
                              src={`${
                                // entry.illuvitar
                                //   ? entry.illuvitar
                                  // : 
                                  '/placeholder.png'
                              } `}
                              alt={`${entry.nickname}'s Illuvitar`}
                              width={48}
                              height={48}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm">
                            {entry.nickname}
                          </div>
                          {/* <div className="text-sm opacity-50 w-full text-left">
                        XBorg
                      </div> */}
                        </div>
                      </div>
                    </td>
                    <td className="font-bold text-xs bg-white">{entry.masteryPoints}</td>
                    <td className="font-bold text-xs bg-white">
                      {entry.illuvialsDefeated}
                    </td>
                    <td className="font-bold text-xs bg-white">{entry.wave}</td>
                  </tr>
                );
              })}
              {/* <!-- end row --> */}
            </tbody>
            {/* <!-- foot --> */}
            {/* <tfoot className="text-center">
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Mastery</th>
          <th>Illuvials Defeated</th>
          <th>Wave</th>
        </tr>
      </tfoot> */}
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
