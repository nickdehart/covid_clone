const countries = ({ data }) => {
  let sorted = data.sort((a, b) =>
    a.TotalRecovered < b.TotalRecovered
      ? 1
      : b.TotalRecovered < a.TotalRecovered
      ? -1
      : 0
  );
  return (
    <table className="table table-dark">
      <tbody>
        {sorted.map((item, index) => {
          return (
            item.TotalRecovered > 1000 && (
              <tr key={`row-${index}`}>
                <td>
                  <p className="green">
                    <b>{item.TotalRecovered.toLocaleString()}</b>
                  </p>
                  <p className="gray">{item.Country}</p>
                </td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
};

export default countries;
