import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ testProp }) => {
  const [testState, setTestState] = React.useState(false);

  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-black">
      <h1 className="italic font-hairline text-white text-4xl text-center">
        HI
        <br />
        After Js with Redux Rematch Integration
      </h1>
    </div>
  );
};

Login.propTypes = {
  testProp: PropTypes.string,
};

Login.defaultProps = {
  testProp: 'Hi',
};

export default Login;
