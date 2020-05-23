import React from 'react';
import './ProductComparison.scss';
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable';

export default function ProductComparisonView(props) {
  return (
    <div className="comparison-table">
        <ComparisonTable
            {...props}
        />
    </div>
    );
}