import React from 'react';
import PropTypes from 'prop-types';
import styles from './SummaryWidget.module.css';

const SummaryWidget = () => (
  <div className={styles.SummaryWidget} data-testid="SummaryWidget">
    SummaryWidget Component
  </div>
);

SummaryWidget.propTypes = {};

SummaryWidget.defaultProps = {};

export default SummaryWidget;
