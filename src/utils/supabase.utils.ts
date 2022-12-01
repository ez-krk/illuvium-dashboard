import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afuglgbcmvlyxovvwozz.supabase.co/';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdWdsZ2JjbXZseXhvdnZ3b3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzE3MjksImV4cCI6MTk4NDA0NzcyOX0.Lo_F5XLGTN_sVamaTIo8t_f0vJNcZ533_HqzUdtKEEc';
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

// fetch leaderboard for current day
export const leaderboardFetch = async () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  let { data: res, error } = await supabase
    .from('illuvium')
    .select()
    .eq('date', currentDate);
  console.log(res);
  return res;
};

// fetch leaderboard for previous day
export const leaderboardNextFetch = async () => {
  const date = new Date();
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  let { data: res, error } = await supabase
    .from('illuvium')
    .select()
    .eq('date', currentDate);
  // console.log(illuvium);
  return res;
};

// fetch everything
export const supaFetch = async () => {
  let { data: res, error } = await supabase.from('illuvium').select('*');
  // console.log(illuvium);
  return res;
};

// fetch unique players
export const uniquePlayers = async () => {
  const { data, error } = await supabase.rpc('unique_players');
  return data;
};
