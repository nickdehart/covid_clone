const countries = ({ data, geolocate }) => {
  // console.log(data);
  let sorted = data.sort((a, b) =>
    a.TotalConfirmed < b.TotalConfirmed
      ? 1
      : b.TotalConfirmed < a.TotalConfirmed
      ? -1
      : 0
  );
  // console.log(sorted);
  return (
    <table className="table table-dark">
      <tbody>
        {sorted.map((item, index) => {
          return (
            item.TotalConfirmed > 1000 && (
              <tr
                key={`row-${index}`}
                onClick={() => geolocate(item.CountryCode)}
              >
                <td>
                  <p className="red">
                    <b>{item.TotalConfirmed.toLocaleString()}</b>
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
