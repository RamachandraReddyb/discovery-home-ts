import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/atoms/button';

storiesOf('Button', module)
  .add('with primary', () => <Button disabled={false} style={{}} onClick="" label="Primary Button" />)
  .add('with outline', () => <Button disabled={false} onClick=""
    label="Ouline Button" 
    style={{ background: 'transparent', border: '3px solid #fecd43' }}
  />)
  .add('with rounder corners', () => <Button  onClick=""  disabled={false}
    label="Rounded Button"
    style={{ borderRadius: '15px' }}
  />)
  .add('disabled', () => <Button disabled={true} onClick=""
    label="Disabled Button"
    style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
  />)
