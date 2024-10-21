import React, { useState } from 'react'
import Recover from './page'
import Success from './components/success';

const RecoverLayout = () => {
  const [isRecovered, setIsRecovered] = useState(false);
  const [email, setEmail] = useState('');
  console.log(isRecovered);
  const onClickRecover = () => setIsRecovered(true);

  return (
    <div>
      <p>{isRecovered}</p>
      {
        isRecovered ?
        <Success />
        :
        <Recover
          email={email}
          setEmail={setEmail}
          onClickRecover={onClickRecover}
        />
      }
    </div>
  )
}

export default RecoverLayout