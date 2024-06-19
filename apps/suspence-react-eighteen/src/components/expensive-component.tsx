const ExpensiveComponent = () => {
  const start = Date.now();
  while (Date.now() - start < 7000) {}

  return (
    <div>
      <div>I'm a large component</div>
    </div>
  );
};

export default ExpensiveComponent;