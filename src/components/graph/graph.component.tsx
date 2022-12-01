import { FC, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import Spinner from '../spinner/spinner.component';

interface Data {
  index: number;
  date: string;
  foo: number;
  illuvialsDefeated: number;
  illuvitar: string;
  millisecondsSpentPlanning: string;
  nickname: string;
  wave: number;
}

interface Data {
  index: number;
  date: string;
  foo: number;
  illuvialsDefeated: number;
  illuvitar: string;
  millisecondsSpentPlanning: string;
  nickname: string;
  wave: number;
}

type Props = {
  data: Data[];
};

export const Graph: FC<Props> = ({ data }) => {
  let [isLoading, setLoading] = useState(false);

  const today = new Date();
  const year = today.getFullYear();

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-center text-xl font-bold text-transparent bg-clip-text my-5 tracking-tight rgbg">
        Graph
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          // id="charty"
        >
          <Line type="monotone" dataKey="index" stroke="#c334cd" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis
            dataKey="date"
            interval="preserveStart"
            allowDataOverflow
            domain={['dataMin', 'dataMax']}
          />
          <YAxis dataKey="foo" />
          <Tooltip />
        </LineChart>
      </div>
    </>
  );
};
