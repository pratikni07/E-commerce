import React from 'react';

const Block = ({ color, title, content }) => {
  return (
    <div className={`bg-[#${color}] w-[235px] h-[120px] p-4 rounded-lg`}>
      {title}
      <h1 className='text-[18px] font-bold'>{content}</h1>
    </div>
  );
};

export default Block;
