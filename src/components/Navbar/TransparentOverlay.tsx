import type { FC } from 'react';

import styles from './TransparentOverlay.module.css';

interface Props {
  onClick: () => void;
}

const TransparentOverlay: FC<Props> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default TransparentOverlay;