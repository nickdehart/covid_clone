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
      cases: 500,
    },
    {
      name: "Feb",
      cases: 12000,
    },
    {
      name: "Mar",
      cases: 88000,
    },
    {
      name: "Apr",
      cases: 932000,
    },
    {
      name: "May",
      cases: 3344000,
    },
    // {
    //   name: "Jun",
    //   cases: 20000,
    // },
    // {
    //   name: "Jul",
    //   cases: 23000,
    // },
  ];

  const formatTicks = (item) => {
    let length = Number(item).toString().length;
    if (length > 12) return `${item / 1000000000000}T`;
    else if (length > 9) return `${item / 1000000000}B`;
    else if (length > 6) return `${item / 1000000}M`;
    else if (length > 3) return `${item / 1000}K`;
    else return item;
  };

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatTicks} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="cases"
          stroke="#ffaa00"
          strokeWidth={5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
