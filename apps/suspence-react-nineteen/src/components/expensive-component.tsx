const ExpensiveComponent = () => {
    const generateLargeDataset = () => {
      const result = [];
      for (let i = 0; i < 1750; i++) {
        const row = [];
        for (let j = 0; j < 100; j++) {
          row.push(Math.random());
        }
        result.push(row);
      }
      return result;
    };
  
    const data = generateLargeDataset();
  
    return (
      <div>
        <h1>Expensive Component</h1>
        <table>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.toFixed(2)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ExpensiveComponent;