const countries = ({ data }) => {
  let sorted = data.sort((a, b) =>
    a.TotalDeaths < b.TotalDeaths ? 1 : b.TotalDeaths < a.TotalDeaths ? -1 : 0
  );
  return (
    <table className="table table-dark">
      <tbody>
        {sorted.map((item, index) => {
          return (
            item.TotalDeaths > 1000 && (
              <tr key={`row-${index}`}>
                <td>
                  <p className="red">
                    <b>{item.TotalDeaths.toLocaleString()}</b>
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
