import { Link } from 'react-router-dom';
import { Button } from '../../atoms/button/button';
import { Input } from '../../atoms/search-input/input-text';
import { HeaderSearchBox } from '../../molecules/header-search-box/header-search-box';

export const Header = (): React.ReactElement => {
  const inputSearchHandler = (e) => {
    console.log('so', e.target.value);
  };
  return (
    <>
      <h1 title="connect">
        <Link to={{ pathname: '/' }}>
          <img src="/logo-connect.svg" />
        </Link>
      </h1>
      <HeaderSearchBox>
        <Input
          alt="header search"
          placeHolder="Find the Items"
          aria="input text field"
          callback={inputSearchHandler}
        >
          <Button />
        </Input>
      </HeaderSearchBox>
    </>
  );
};
