import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const checkButtonHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <h1>{status.message}</h1>
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
