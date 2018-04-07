import React from 'react';
import PropTypes from 'prop-types';
import favicon from './js.png';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log(e);
  }
}

const HTML = props => {
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    // eslint-disable-next-line
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {css}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  htmlAttributes: PropTypes.shape({
    lang: PropTypes.string.isRequired,
  }).isRequired,
  headComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  preBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  body: PropTypes.arrayOf(PropTypes.node).isRequired,
  postBodyComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  bodyAttributes: PropTypes.object.isRequired, // eslint-disable-line
};

export default HTML;
