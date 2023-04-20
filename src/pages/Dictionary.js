import { useSelector } from 'react-redux';
import { selectFilteredUnknownWords } from 'redux/words/selectors';
/* import Loader from 'components/Skeleton/Skeleton';*/
import { WordList } from 'components/WordList/WordList';
import ModalAddWord from 'components/ModalAddWord/ModalAddWord';
import { Filter } from 'components/Filter/Filter';

const Dictionary = () => {
  const words = useSelector(selectFilteredUnknownWords);

  return (
    <>
      {/*       {isLoading && <Loader page="/dictionary" />}*/}
      <h2 style={{ margin: '25px auto' }}>My dictionary</h2>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
        }}
      >
        <ModalAddWord />
        <Filter />
      </div>
      <WordList words={words} />
    </>
  );
};

export default Dictionary;
