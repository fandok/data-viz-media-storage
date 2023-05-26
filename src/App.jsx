import { Bar, Line } from "react-chartjs-2";
import Storage from "./Storage";

const labels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
const data = {
  labels,
  datasets: [
    {
      label: "My First Dataset",
      backgroundColor: "rgb(255,99,132)",
      borderColor: "rgb(255,99,132",
      data: [0, 10, 5, 2, 20, 30],
    },
  ],
};

const App = () => {
  return (
    <div>
      <Storage />
      <Line data={data} />
      <Bar
        style={{ width: 1000 }}
        options={{
          plugins: { legend: { display: false } },
          scales: {
            y: { title: { display: true, text: "Amount of Car Rentals" } },
            x: { title: { display: true, text: "Date" } },
          },
        }}
        data={{
          labels: Array.from({ length: 30 }, (_, i) => i + 1),
          datasets: [
            {
              data: Array.from({ length: 30 }, () => Math.random() * 100),
            },
          ],
        }}
      />
    </div>
  );
};

export default App;
