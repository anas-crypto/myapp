import React, { useState } from 'react';

const Hooks = () => {
  const [passwordState, setPasswordState] = useState({
    type: 'password',
    class: 'fa fa-eye-slash',
    msg: 'hide',
    msgClass: 'alert alert-success',
  });

  function togglePassword() {
    if (passwordState.type === 'password') {
      setPasswordState({
        type: 'text',
        class: 'fa fa-eye',
        msg: '',
        msgClass: '',
      });
    } else {
      setPasswordState({
        type: 'password',
        class: 'fa fa-eye-slash',
        msg: 'hide',
        msgClass: 'alert alert-success',
      });
    }
  }
  return (
    <>
      <input name='password' type={passwordState.type}></input>
      <button type='button' onClick={togglePassword}>
        <i class={passwordState.class} aria-hidden='true'></i>
      </button>

      <div class={passwordState.msgClass} role='alert'>
        {passwordState.msg}
      </div>
    </>
  );
};

export default Hooks;
