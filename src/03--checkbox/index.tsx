import React, { ChangeEvent, useState } from 'react';

function MyCheckbox() {
  const [like, setLike] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLike(e.target.checked);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={like} onChange={handleChange} />I like this
      </label>
      <p>You {like ? 'liked' : 'did not like'} this.</p>
    </>
  );
}

export default MyCheckbox;
