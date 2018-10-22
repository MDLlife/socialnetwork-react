import * as React from 'react';

const Bar = (props) => {
  return (<div className={props.containerClassName}>{
      props.items.map((item, index)=>{
      function handleClick() {
          props.handler(props.values? props.values[index] : null)
      }
      return(<h4 onClick={props.handler? handleClick: null}
          className={props.active&&props.values ? props.active === props.values[index] ? props.activeItemClassName : props.itemClassName : props.itemClassName}
          key={index}>
          {item}
          </h4>)
  })}
  </div>)
};

export default Bar;