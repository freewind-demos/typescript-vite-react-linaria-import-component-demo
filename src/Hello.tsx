import { css } from '@linaria/core';
import React, { FC } from 'react';

const styles = {
  hello: css`
    background-color: #EEEEEE;
  `
}

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={styles.hello}>
    <h1>Hello React</h1>
  </div>;
}
