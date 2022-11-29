import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detaila");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detaila", state: arr }}>Page1Detail A</Link>
      <br />
      <Link to="/page1/detailb">Page1Detail B</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
