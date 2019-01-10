export const fullWidthStyle = {
  margin: '0 auto',
  maxWidth: 960
};

export const footerStyle = {
  ...fullWidthStyle,
  padding: '1.45rem 1.0875rem',
  textAlign: 'center'
};

export const footerNavStyle = {
  '> ul': {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  '> ul > li': {
    display: 'inline',
    paddingLeft: '0.5em',
    paddingRight: '0.5em'
  }
};

export const headerNavStyle = {
  ...footerNavStyle,
  float: 'right'
};
