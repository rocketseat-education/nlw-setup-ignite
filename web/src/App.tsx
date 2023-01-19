import './styles/global.css';
import './lib/dayjs'
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}

