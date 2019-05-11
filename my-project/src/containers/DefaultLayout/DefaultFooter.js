import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardColumns, CardHeader ,Row,Col} from 'reactstrap';
import '../../views/Data/Datas/Datas.css';
import logo from '../../assets/img/brand/levelaqi.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Col xs="12" sm="6" lg="1"><p align="center"><strong>Air Quality Levels</strong></p></Col>
        <img src = {logo} />
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
