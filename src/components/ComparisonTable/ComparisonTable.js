import React from 'react';
import ComparisonTableView from './ComparisonTable.jsx';
import ComparisonHeaderImage from '../ComparisonHeaderImage/ComparisonHeaderImage.jsx';
import ComparisonAttributeDisplay from '../ComparisonAttributeDisplay/ComparisonAttributeDisplay';


function createData(feature, firstProduct, secondProduct) {
  return { feature, firstProduct, secondProduct };
}

function createHeaderImageCol(id, imageUrl, companyName) {
  return { 
            id, 
            component: <ComparisonHeaderImage 
                          alt_text={companyName + " Logo"}
                          img_url={imageUrl} />,
            minWidth: 170
          };
}

function createHeaderColumn(id, label) {
  return { id, label, minWidth: 170, align: 'center' };
}

function getHeaderImageColumns(foreignProduct, localProduct) {
  return [
    createHeaderImageCol('firstProduct', foreignProduct.companyImageUrl, foreignProduct.companyName),
    createHeaderImageCol('secondProduct', localProduct.companyImageUrl, localProduct.companyName)
  ];
}

function getHeaderColumn(foreignProduct, localProduct) {
  return [
    createHeaderColumn('feature', 'Feature'),
    createHeaderColumn('firstProduct', foreignProduct.companyName),
    createHeaderColumn('secondProduct', localProduct.companyName),
  ]
}

function getAttributeData(parameter) {
  return <ComparisonAttributeDisplay 
          text = {parameter.parameterValue}
          severity = {parameter.parameterSeverity}/>;
}

function getComparisonData(parameters, foreignProduct, localProduct) {
  return parameters.map((parameter) => createData(parameter.parameterName,
                                        getAttributeData(foreignProduct.parameters[parameter.parameterId]),
                                        getAttributeData(localProduct.parameters[parameter.parameterId])))
}

function ComparisonTable(props) {
  console.log(props.productData);
  const foreignProduct = props.productData.foreignProduct;
  const localProduct = props.productData.localProduct;
  const parameters = props.productData.parameters;
  return <ComparisonTableView
    headerImageCols={getHeaderImageColumns(foreignProduct, localProduct)}
    row={getComparisonData(parameters, foreignProduct, localProduct)}
    columns={getHeaderColumn(foreignProduct, localProduct)} />;
}

export default ComparisonTable;