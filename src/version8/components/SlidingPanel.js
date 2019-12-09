
import React from 'react';

import styles from './SlidingPanel.module.css'

function SlidingPanel({children, isOpen, title, from, width,
                       onRequestClose, }){

  let classname = styles.panel;
  let dirclass = styles.panelRight;

  if (!isOpen){
    classname = styles.closePanel;
    dirclass = null;
  }

  return (<div className={`${classname} ${dirclass}`}
          >
            <div className={styles.panelTitle}>
              <button className={styles.closeButton}
                      onClick={onRequestClose}>
               X
              </button> | This is panel {title}
            </div>
              <div className={styles.panelChild}>
                {children}
              </div>
            </div>);
}

export default SlidingPanel;
