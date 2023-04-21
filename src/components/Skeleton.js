import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = ({ page }) => {
  switch (page) {
    case '/':
      return (
        <div style={{ marginLeft: '32px' }}>
          <Skeleton
            count={1}
            width={193}
            height={38.5}
            style={{ margin: '25px 0' }}
          />
          <BoxDictionary>
            <Skeleton count={1} width={170} height={40} />
            <Skeleton count={1} width={300} height={38} />
          </BoxDictionary>
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
        </div>
      );

    case '/training':
      return (
        <div>
          {/* 
          <Skeleton count={1} width={116} height={40} /> */}
          {/*  <Skeleton
            count={1}
            width={112}
            height={39}
            style={{ margin: '23px auto' }}
          /> */}
          <Skeleton count={1} width={580} height={39}></Skeleton>
          <BoxOptions>
            <Skeleton
              count={1}
              width={75}
              height={42}
              borderRadius={4}
            ></Skeleton>
            <Skeleton
              count={1}
              width={75}
              height={42}
              borderRadius={4}
            ></Skeleton>
            <Skeleton
              count={1}
              width={75}
              height={42}
              borderRadius={4}
            ></Skeleton>
            <Skeleton
              count={1}
              width={75}
              height={42}
              borderRadius={4}
            ></Skeleton>
          </BoxOptions>
          <Skeleton count={1} width={145} height={40}></Skeleton>
        </div>
      );

    case '/vocabulary':
      return (
        <div style={{ marginLeft: '32px' }}>
          <Skeleton
            count={1}
            width={193}
            height={38.5}
            style={{ margin: '25px 0' }}
          />
          <Skeleton count={1} width={300} height={38} />
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
          <BoxWord>
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ marginRight: '27px' }}
            />
            <Skeleton count={1} width={440} height={45} />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
            <Skeleton
              count={1}
              width={20}
              height={20}
              style={{ margin: '0 5px' }}
            />
          </BoxWord>
        </div>
      );

    default:
      return (
        <div
          style={{
            marginTop: '20px',
          }}
        >
          <Skeleton
            width={548}
            height={372}
            count={1}
            style={{ marginBottom: 15 }}
          />
          <Skeleton count={1} width={130} height={42} />
        </div>
      );
  }
};

const BoxOptions = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        listStyle: 'none',
        margin: '15px auto',
        padding: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      {children}
    </div>
  );
};

const BoxDictionary = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        displayWrap: 'nowrap',
        gap: '10px',
        margin: '0px auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
      }}
    >
      {children}
    </div>
  );
};

const BoxWord = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 'fit-content',
        margin: '10px auto',
        padding: '0',
        inline: 'true',
      }}
    >
      {children}
    </div>
  );
};

Loader.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Loader;
