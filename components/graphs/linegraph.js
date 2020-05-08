import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function () {
  const data = [
    {
      name: "Jan",
      pv: 2400,
    },
    {
      name: "Feb",
      pv: 6000,
    },
    {
      name: "Mar",
      pv: 9800,
    },
    {
      name: "Apr",
      pv: 15000,
    },
    {
      name: "May",
      pv: 17000,
    },
    {
      name: "Jun",
      pv: 20000,
    },
    {
      name: "Jul",
      pv: 23000,
    },
  ];

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#ffaa00"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
