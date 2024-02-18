import React from "react";
import data from './data.json'

const DataMapping = () => {

const names = data
  .map((item, index) => (
    <span style={{ display: 'grid' }} key={index}>
      {item.name}
    </span>
  ))
  .filter((item: any) => {
    const itemName = item.props.children ? item.props.children.toLowerCase() : '';
    return !itemName.includes('owen');
  });

return <>{names}</>
    
}

export default DataMapping;
