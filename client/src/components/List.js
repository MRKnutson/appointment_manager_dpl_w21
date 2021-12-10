
import StringifyJson from "./StringifyJson";

const List = ({ data, title, renderData})=> {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {!renderData && <StringifyJson json={data} />}
      {renderData && data.map(renderData)}
    </div>
  );
};

export default List;