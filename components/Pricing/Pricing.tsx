import  React, { memo, useContext } from 'react';
import { GlobalStateContext } from '../../GlobalState/context/GlobalStateContext';

const Pricing = (props: any) => {
  const { globalState, dispatch } = useContext(GlobalStateContext);

  return (
    <div style={{padding: '10px 0 10px 0'}}>
      <form className={'payment_options'}>
        <h3 style={{color: 'white'}}>Pricing</h3>
        <label className={'signup_label'}>Email</label>
      </form>
    </div>
  );
};

export default memo(Pricing);
