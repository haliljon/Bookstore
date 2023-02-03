import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import underConstruction from '../assets/Page_Under_Construction.jpg';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const checkButtonHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <h1>{status.message}</h1>
      <img src={underConstruction} alt="Under construction" style={status.img} />
      <button
        type="button"
        className="primary-button-big"
        onClick={checkButtonHandler}
      >
        Check Status
      </button>
    </div>
  );
};
export default Categories;
