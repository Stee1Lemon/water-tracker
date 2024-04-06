import { Scrollbars } from 'rc-scrollbars';

import css from "./CustomScrollbars.module.css"

export const CustomScrollbars = ({ children }) => {
  return (
      <Scrollbars autoHeight autoHeightMax={180} classes={{
        trackVertical: css.trackVertical,
        thumbVertical: css.thumbVertical,
      }}>
          {children}
      </Scrollbars>
  )
}
