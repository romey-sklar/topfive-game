const Number = ({ position }) => {
  const colors = ['#FF0000', '#FFA500', '#FFEB3B', '#008000', '#0000FF']; // Basic rainbow colors
  const style = {
    backgroundColor: colors[position - 1],
  };

  return (
    <div style={style} className='number'>
      {position}
    </div>
  );
};

export default Number;