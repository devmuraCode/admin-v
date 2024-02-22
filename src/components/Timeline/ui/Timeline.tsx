import React from 'react';
import TimelineBase, { TimelineProps } from 'antd/lib/timeline';

import './Timeline.scss';

interface IProps extends TimelineProps {
  children: React.ReactNode;
}

interface IComponent extends React.FC<IProps> {
  Item: typeof TimelineBase.Item;
}

// @ts-ignore
const Timeline: IComponent = ({ children, ...props }) => (
  <TimelineBase {...props}>{children}</TimelineBase>
);

Timeline.Item = TimelineBase.Item;

export default Timeline;
