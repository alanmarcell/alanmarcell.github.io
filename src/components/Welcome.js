import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BigFirstLetter from './BigFirstLetter';

const Wrapper = styled(BigFirstLetter)`
  margin-top: ${props => props.theme.welcome.marginTop};
  margin-bottom: ${props => props.theme.welcome.marginBottom};
`;

const getWelcomeMsg = () => {
  return {
    en: (
      <p>
        A passionate programmer who loves to learn.
      </p>
    ),
    pt: (
      <p>
        Um programador apaixonado que adora aprender.
      </p>
    ),
    fr: (
      <p>
        Un programmeur passionné qui aime apprendre.
      </p>
    )
  };
};

const Welcome = ({ currentLangKey }) => {
  return (
    <Wrapper>
      {getWelcomeMsg()[currentLangKey]}
    </Wrapper>
  );
};

Welcome.propTypes = {
  currentLangKey: PropTypes.string
};

export default Welcome;
