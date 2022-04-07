import Pricing from './Pricing';
import {memo, useContext, useRef} from 'react';
import {GlobalStateContext} from '../../GlobalState/context/GlobalStateContext';
import { useClickAway } from 'react-use';
import GlobalStateActions from '../../GlobalState/Actions/GlobalStateActions';

const PricingContainer = ({summaryInfo}: any) => {
  const ref = useRef<HTMLDivElement>(null)

  useClickAway(ref, () => {
    dispatch({type: GlobalStateActions.TOGGLE_PRICING_FORM, payload: false})
  })

  const {globalState, dispatch} = useContext(GlobalStateContext)

  const {businessInfo} = summaryInfo
  const {pricing} = businessInfo;
  console.table(globalState)

  return (

    <div ref={ref}>
      {pricing.map((price: any, index: number) => (
        <Pricing
          key={index}
          price={price.price}
          amount={price.description}
        />
      ))}
    </div>
  );
}

export default memo(PricingContainer);