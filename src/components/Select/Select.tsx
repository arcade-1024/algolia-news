import React from 'react'
export interface SelectComponent {
  selectData: any;
  changeSelect: Function;
}
const Select = ({selectData,changeSelect}:SelectComponent) => {
  return (
		<div className="h-8 bg-gray-300 w-20 dark:bg-grey-600">{selectData}</div>
	);
}

export default Select
