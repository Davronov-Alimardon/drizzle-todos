import { getData } from "@/actions/todos"

import Todos from "./Todos";

export default async function Home() {
  const data = await getData();
  
  return <Todos todos={data} />
};
