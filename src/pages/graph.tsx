import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Graph } from 'components/graph/graph.component';

import { uniquePlayers } from 'utils/supabase.utils';

// import Spinner from 'components/spinner/spinner.component';

const GraphPage = () => {
  let [isLoading, setLoading] = useState(false);

  let [data, setData] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      uniquePlayers()
        .then((res) => setData(res))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  console.log(data);

  return (
    <div className="">
      <Graph data={data} />
    </div>
  );
};

export default GraphPage;
